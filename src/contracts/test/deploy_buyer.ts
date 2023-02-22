import * as fs from "fs";
import { getHttpEndpoint } from "@orbs-network/ton-access";
import { mnemonicToWalletKey } from "ton-crypto";
import { TonClient, Cell, WalletContractV4 } from "ton";
import Buyer from "../buyer_contracts/buyer_contract"; // this is the interface class from step 7

async function deploy() {
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

  // prepare Buyer's initial code and data cells for deployment
  const buyerCode = Cell.fromBoc(fs.readFileSync("contracts/buyer_contracts/buyer_contract.cell"))[0]; // compilation output from step 6
  const initialValue = Date.now(); // to avoid collisions use current number of milliseconds since epoch as initial value
  const buyer = Buyer.createForDeploy(buyerCode, initialValue, wallet.address);
  
  // exit if contract is already deployed
  console.log("contract address:", buyer.address.toString());
  if (await client.isContractDeployed(buyer.address)) {
    return console.log("Buyer already deployed");
  }

  // open wallet and read the current seqno of the wallet
  const walletContract = client.open(wallet);
  const walletSender = walletContract.sender(key.secretKey);
  const seqno = await walletContract.getSeqno();
  
  // send the deploy transaction
  const buyerContract = client.open(buyer);
  await buyerContract.sendDeploy(walletSender);

  // wait until confirmed
  let currentSeqno = seqno;
  while (currentSeqno == seqno) {
    //console.log("waiting for deploy transaction to confirm...");
    await sleep(1500);
    currentSeqno = await walletContract.getSeqno();
  }
  console.log("deploy transaction confirmed!");
}

deploy();

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}