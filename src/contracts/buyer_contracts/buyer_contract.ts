import { Contract, ContractProvider, Sender, Address, Cell, contractAddress, beginCell, toNano } from "ton-core";

export default class Buyer implements Contract {

  static createForDeploy(code: Cell, initialValue: number, addr: Address): Buyer {
    const data = beginCell()
      .storeAddress(addr)
      .storeUint(initialValue, 64)
      .endCell();
    const workchain = 0; // deploy to workchain 0
    const address = contractAddress(workchain, { code, data });
    return new Buyer(address, { code, data });
  }
  
  constructor(readonly address: Address, readonly init?: { code: Cell, data: Cell }) {}

  async sendDeploy(provider: ContractProvider, via: Sender) {
    await provider.internal(via, {
      value: "0.01", // send 0.01 TON to contract for rent
      bounce: false
    });
  }

  async sendMoney(provider: ContractProvider, via: Sender, addr: Address, amount: string, fee: number) {
    const fee_rate = Math.round(fee * 100000000);

    const messageBody = beginCell()
                          .storeAddress(addr)
                          .storeUint(toNano(amount), 64)
                          .storeUint(fee_rate, 64)
                        .endCell();
    await provider.internal(via, {
      value: amount, // send 0.002 TON for gas
      body: messageBody
    });
  }

  async getInitial(provider: ContractProvider) {
    const { stack } = await provider.get("getter", []);
    const addr = stack.readAddress();
    const time = stack.readBigNumber();
    return {addr: addr, time: time};
  }
}