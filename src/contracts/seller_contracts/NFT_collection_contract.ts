import { Contract, ContractProvider, Sender, Address, Cell, contractAddress, beginCell, toNano, Builder } from "ton-core";

export default class NFT_collection implements Contract {

  static createForDeploy
  (
    code: Cell,
    owner_addr: Address,
    nft_item_index: number,
    content: Cell,
    nft_item_code: Cell,
    royalty_params: Cell
  ): NFT_collection {
    const data = beginCell()
        .storeAddress(owner_addr)
        .storeUint(nft_item_index, 64)
        .storeRef(content)
        .storeRef(nft_item_code)
        .storeRef(royalty_params)
      .endCell();
    const workchain = 0; // deploy to workchain 0
    const address = contractAddress(workchain, { code, data });
    return new NFT_collection(address, { code, data });
  }
  
  constructor(readonly address: Address, readonly init?: { code: Cell, data: Cell }) {}

  async sendDeploy(provider: ContractProvider, via: Sender) {
    await provider.internal(via, {
      value: "0.05", // send 0.01 TON to contract for rent
      bounce: false
    });
  }

  async sendDeployNft(provider: ContractProvider, via: Sender, item_index: number, amount: string, content: string, owner_addr: Address) {
    const op = 1;
    const query_id = 0;

    const uriContent = storeSerializeUri(content, beginCell()).endCell();

    const in_msg_full = new Cell({refs: [uriContent]})
                              .asBuilder()
                              .storeAddress(owner_addr)
                            .endCell();

    const in_msg_body = new Cell({refs: [in_msg_full]})
                              .asBuilder()
                              .storeUint(op, 32)
                              .storeUint(query_id, 64)
                              .storeUint(item_index, 64)
                              .storeCoins(toNano(amount))
                            .endCell();

    await provider.internal(via, {
      value: amount, // send TON for gas
      body: in_msg_body
    });
  }

  async get_collection_data(provider: ContractProvider) {
    const { stack } = await provider.get("get_collection_data", []);
    const next_nft_idx = stack.readNumber();
    const content = stack.readCell();
    const owner_address = stack.readAddress();
    return {next_nft_idx: next_nft_idx, content: content, owner_address: owner_address};
  }

  async get_nft_address_by_index(provider: ContractProvider, index: number) {
    const { stack } = await provider.get("get_nft_address_by_index", []);
    return stack.readCell();
  }
}

function storeSerializeUri(uri: string, cell: Builder) {
  const ui8 = new TextEncoder().encode(encodeURI(uri));
  var build = cell;
  for (let i = 0; i < ui8.length; i++) {
    build = build.storeUint(ui8[i], 8);
  }
  return build;
}

export function createContentCell(params: any) {
  const OFFCHAIN_CONTENT_PREFIX = 1;

  const collectionContentCell = storeSerializeUri
                                  (params.collectionContentUri,
                                  beginCell().storeUint(OFFCHAIN_CONTENT_PREFIX, 8))
                                .endCell();

  const commonContentCell = storeSerializeUri
                              (params.nftItemContentBaseUri,
                              beginCell())
                            .endCell();

  const contentCell = new Cell({refs: [collectionContentCell, commonContentCell]});

  return contentCell;
}

export function createRoyaltyCell(params: any) {
  const royaltyBase = 1000;
  const royaltyFactor = Math.floor(params.royalty * royaltyBase);

  const royaltyCell = beginCell()
                        .storeUint(royaltyFactor, 16)
                        .storeUint(royaltyBase, 16)
                        .storeAddress(params.royaltyAddress)
                      .endCell();

  return royaltyCell;
}