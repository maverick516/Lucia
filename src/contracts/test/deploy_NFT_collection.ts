import * as fs from "fs";
import { getHttpEndpoint } from "@orbs-network/ton-access";
import { mnemonicToWalletKey } from "ton-crypto";
import { TonClient, Cell, WalletContractV4 } from "ton";
import NFT_collection, { createContentCell, createRoyaltyCell } from "../seller_contracts/NFT_collection_contract";

async function deploy_collection() {
  // initialize ton rpc client on testnet
  const endpoint = await getHttpEndpoint({ network: "testnet" });
  const client = new TonClient({ endpoint });
    //const client = new TonClient({ endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC", apiKey: "f20ff0043ded8c132d0b4b870e678b4bbab3940788cbb8c8762491935cf3a460" });

  // open wallet v4 (notice the correct wallet version here)
  const mnemonic = 'awake wisdom lend push toddler success nasty outdoor video skull wise drink again vapor law supreme catalog purse school rally east shed govern pen';
  const key = await mnemonicToWalletKey(mnemonic!.split(" "));
  const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });
  if (!await client.isContractDeployed(wallet.address)) {
    return console.log("wallet is not deployed");
  }
  
  // prepare nft_collection's initial code and data cells for deployment
  const collectionCode = Cell.fromBoc(fs.readFileSync("contracts/seller_contracts/nft_collection.cell"))[0];
  const nftCode = Cell.fromBoc(fs.readFileSync("contracts/seller_contracts/nft_item.cell"))[0];
  // const nftCode = Cell.fromBoc(Buffer.from(JSON.parse(fs.readFileSync("contracts/seller_contracts/nft-item.compiled.json").toString()).hex, "hex"))[0];

  const contentParams = {
    collectionContentUri: 'https://bafybeibcdk7vxzmxzwmvbcaqalrsv7qzw72yhwlfebjdesf5gctmpwwe7y.ipfs.nftstorage.link/collection.json',
    nftItemContentBaseUri: 'https://bafybeibcdk7vxzmxzwmvbcaqalrsv7qzw72yhwlfebjdesf5gctmpwwe7y.ipfs.nftstorage.link/',
  }

  const RoyaltyParams = {
    royalty: 0.05,
    royaltyAddress: wallet.address,
  }

  const content = createContentCell(contentParams);
  const royalty_params = createRoyaltyCell(RoyaltyParams);

  const nft_collection = NFT_collection.createForDeploy(collectionCode, wallet.address, 0, content, nftCode, royalty_params);
  
  // exit if contract is already deployed
  console.log("contract address:", nft_collection.address.toString());
  if (await client.isContractDeployed(nft_collection.address)) {
    return console.log("nft_collection already deployed");
  }

  // open wallet and read the current seqno of the wallet
  const walletContract = client.open(wallet);
  const walletSender = walletContract.sender(key.secretKey);
  const seqno = await walletContract.getSeqno();
  
  // send the deploy transaction
  const nft_collectionContract = client.open(nft_collection);
  await nft_collectionContract.sendDeploy(walletSender);

  // wait until confirmed
  let currentSeqno = seqno;
  while (currentSeqno == seqno) {
    //console.log("waiting for deploy transaction to confirm...");
    await sleep(1500);
    currentSeqno = await walletContract.getSeqno();
  }
  console.log("deploy transaction confirmed!");
}

deploy_collection();

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}