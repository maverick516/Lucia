import Buyer from '../contracts/buyer_contracts/buyer_contract';
import { useAsyncInitialize } from './useAsyncInitialize';
import { Address, OpenedContract, Sender } from 'ton-core';
import { useTonClient } from './useTonClient';

const contractAddress = "EQCHwnyGbF3ZsGT3MgrjHYyYYIDmIXZ2axipB83JNdnmqdbP";

function useBuyerContract() {
  // BuyerContract 연결
  const client = useTonClient();

  return useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new Buyer(
      Address.parse(contractAddress)
    );
    return client.open(contract) as OpenedContract<Buyer>;
  }, [client]);
}

export function useBuyerSendMoney(sender: Sender) {
  // BuyerContract sendMoney 기능 사용
  console.log('Start useBuyerContract');
  const buyerContract = useBuyerContract();

  return {
    sendMoney: (seller: Address, amount: string, fee: number) => {
      return buyerContract?.sendMoney(sender, seller, amount, fee);
    },
  };
}
