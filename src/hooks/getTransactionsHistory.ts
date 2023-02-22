import axios from "axios"
import { useEffect, useState } from "react";

export default function getTransactionsHistory(address: string, limit: number) {
  const [History, setHistory] = useState<string>();

  useEffect(() => {
    if (address) {
      (async () => {
        setHistory(
          await (await axios.get(
            'https://testnet.toncenter.com/api/v2/getTransactions',
            {
              params: {
                address: address,
                limit: limit,
                api_key: import.meta.env.VITE_TON_CENTER_API_KEY
              }
            }
          ).then((result) => {
            const data_raw = result.data.result;
            const data = new Array();
            // console.log(data_raw);

            for(var i = 0; i < data_raw.length; i++) {
              if (data_raw[i].in_msg.source == '') {
                data[i] = {
                  hash: data_raw[i].transaction_id.hash,
                  dir: 'out',
                  from: data_raw[i].out_msgs[0].source,
                  to: data_raw[i].out_msgs[0].destination,
                  value: data_raw[i].out_msgs[0].value,
                  fee: data_raw[i].fee,
                  utime: data_raw[i].utime
                };
              } else {
                data[i] = {
                  hash: data_raw[i].transaction_id.hash,
                  dir: 'in',
                  from: data_raw[i].in_msg.source,
                  to: data_raw[i].in_msg.destination,
                  value: data_raw[i].in_msg.value,
                  fee: data_raw[i].fee,
                  utime: data_raw[i].utime
                };
              }
            }

            return JSON.stringify(data);
          }))
        );
      })();
    }
  });

  return (History ? JSON.parse(History) : []);
}

export interface transactions {
  hash: string;
  dir: string;
  from: string;
  to: string;
  value: string;
  fee: string;
  utime: string;
}