import { getHttpEndpoint } from "@orbs-network/ton-access";
import { mnemonicToWalletKey } from "ton-crypto";
import { TonClient, WalletContractV4, Address } from "ton";
import Buyer from "../buyer_contracts/buyer_contract"; // this is the interface class we just implemented

async function main() {
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

  // open wallet and read the current seqno of the wallet
  const walletContract = client.open(wallet);
  const walletSender = walletContract.sender(key.secretKey);
  const seqno = await walletContract.getSeqno();

  // open Buyer instance by address
  const contractAddress = Address.parse('EQCHwnyGbF3ZsGT3MgrjHYyYYIDmIXZ2axipB83JNdnmqdbP');
  const buyer = new Buyer(contractAddress);
  const buyerContract = client.open(buyer);
  const sellerAddress = Address.parse("kQC7HOKQD7dXS90ZYJraugmdlyJRojVQKt_qhm00bxPRJ3hX");
  const fee = 0.12;

  // send the increment transaction
  await buyerContract.sendMoney(walletSender, sellerAddress, '0.1', fee);

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