import { Address, OpenedContract, Sender } from "ton";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import NFT_collection from "../contracts/seller_contracts/NFT_collection_contract";

const contractAddress = "EQDS5XIzwLW89qLjZZ6IHWek6sPTfcWLo0tfjBRAa6h4TQBq";

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

export function useCollectionDeployNft(connection: any) {
  // BuyerContract sendMoney 기능 사용
  // console.log(sender);
  const collectionContract = useCollectionContract();

  var next_nft_idx = 0;
  var owner_address: Address;

  collectionContract?.get_collection_data().then((response) => {
    next_nft_idx = response.next_nft_idx;
    owner_address = response.owner_address;
    console.log(owner_address);
  });
  // if(connection.address) {
  //   console.log(Address.parse(connection.address));
  // }

  return {
    deployNft: (amount: string, content: string) => {
      return collectionContract?.sendDeployNft(connection.sender, next_nft_idx, amount, content, owner_address);
    },
  };
}