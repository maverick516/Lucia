import { useEffect, useState } from 'react';
import { TonClient } from 'ton';
import { Address } from 'ton-core';

export function getBalance(client: TonClient | undefined, address: string | undefined) {
  const [balance, setBalance] = useState<bigint>();
  // console.log(address);
  // console.log(client);

  useEffect(() => {
    if (client && address) {
      (async () => {
        setBalance(await client.getBalance(Address.parse(address)));
      })();
    }
  });

  return balance;
}