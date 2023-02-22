import { Address, OpenedContract, Sender } from "ton";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import NFT_collection from "../contracts/seller_contracts/NFT_collection_contract";

const contractAddress = "EQAZqZ2mO8CKIB9TCBIc6pdfItydyIvN8k6Xj58oCnxGWa9G";

function useCollectionContract() {
  // BuyerContract 연결
  const client = useTonClient();

  return useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new NFT_collection(
      Address.parse(contractAddress)
    );
    return client.open(contract) as OpenedContract<NFT_collection>;
  }, [client]);
}

export function useCollectionDeployNft(sender: Sender) {
  // BuyerContract sendMoney 기능 사용
  const collectionContract = useCollectionContract();

  return {
    deployNft: (item_index: number, amount: string, content: string, owner_addr: Address) => {
      return collectionContract?.sendDeployNft(sender, item_index, amount, content, owner_addr);
    },
  };
}
