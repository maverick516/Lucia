import { ConnectedWallet, useTonConnectUI } from '@tonconnect/ui-react';
import { Sender, SenderArguments } from 'ton-core';

export function useTonConnect(): { sender: Sender; connected: boolean; address: string | undefined; disconnect: { disconnection: () => Promise<void>}; connect: { connection: () => Promise<ConnectedWallet>; } } {
  const [tonConnectUI] = useTonConnectUI();

  return {
    sender: {
      send: async (args: SenderArguments) => {
        tonConnectUI.sendTransaction({
          messages: [
            {
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString('base64'),
            },
          ],
          validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
        });
      },
    },
    connected: tonConnectUI.connected,
    address: tonConnectUI.account?.address,
    disconnect: {
      disconnection: async () =>
        tonConnectUI.disconnect()
      },
    connect: {
      connection: async () =>
        tonConnectUI.connectWallet()
      },
  };
}