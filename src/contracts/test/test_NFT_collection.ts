import { getHttpEndpoint } from "@orbs-network/ton-access";
import { mnemonicToWalletKey } from "ton-crypto";
import { TonClient, WalletContractV4, Address } from "ton";
import NFT_collection from "../seller_contracts/NFT_collection_contract";

async function main() {
  // initialize ton rpc client on testnet
  const endpoint = await getHttpEndpoint({ network: "testnet" });
  const client = new TonClient({ endpoint });
  //const client = new TonClient({ endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC", apiKey: "f20ff0043ded8c132d0b4b870e678b4bbab3940788cbb8c8762491935cf3a460" });

  // open wallet v4 (notice the correct wallet version here)
  const mnemonic = 'ticket seven ecology school door breeze interest spin current soda palm blouse other teach joke fitness spray sibling balcony basket home track rabbit know';
  const key = await mnemonicToWalletKey(mnemonic!.split(" "));
  const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });
  if (!await client.isContractDeployed(wallet.address)) {
    return console.log("wallet is not deployed");
  }

  // open wallet and read the current seqno of the wallet
  const walletContract = client.open(wallet);
  const walletSender = walletContract.sender(key.secretKey);
  const seqno = await walletContract.getSeqno();

  // // open owner instance by address
  const contractAddress = Address.parse('EQBR5rAoHodjJtMa8lZq3Dr8H-pNeROr6VkkVGC91i4Jl2v6');
  const owner = new NFT_collection(contractAddress);
  const collectionContract = client.open(owner);

  // send the increment transaction
  await collectionContract.sendDeployNft
                            (
                              walletSender,
                              0,
                              '0.2',
                              '0.json',
                              wallet.address
                            );

  // wait until confirmed
  let currentSeqno = seqno;
  while (currentSeqno == seqno) {
    //console.log("waiting for transaction to confirm...");
    await sleep(1500);
    currentSeqno = await walletContract.getSeqno();
  }
  console.log("transaction confirmed!");
}

main();

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}