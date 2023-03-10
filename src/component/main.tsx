import "@twa-dev/sdk";
import "../App.css";
import Logo from "../assets/Logo.svg";
import Sell from "../assets/Sell.svg";
import Buy from "../assets/Buy.svg";
import Register from "../assets/Register.svg";
import Footer from "./Footer";
import { Box, Button, Grid } from "@mui/material";
import "../index.css";
import { useTonClient } from "../hooks/useTonClient";
import { getBalance } from "../hooks/getBalance";
import { fromNano } from "ton-core";
import getTransactionsHistory, {
  transactions,
} from "../hooks/getTransactionsHistory";
import { useCollectionDeployNft } from "../hooks/deployNFT";
import { Link } from "react-router-dom";

export default function main(props: any) {
  // console.log('Main Page start');
  const client = useTonClient();
  const user_address = props.connection.address;

  //잔고 조회
  const balance_bigint = getBalance(client, user_address);
  const balance = balance_bigint ? fromNano(balance_bigint) : "0";

  // 트랜젝션 목록 조회
  const history = getTransactionsHistory(user_address, 5);
  // console.log(history);
  // (new Date(transaction_info.now * 1000)).toISOString()

  return (
    <>
      <div className={"Container"}>
        <Box style={{ textAlign: "right" }}>
          <button onClick={() => props.connection.disconnect.disconnection()}>
            disconnect
          </button>
        </Box>
        <Box className={"box"}>
          <img className={"logoLucia"} src={Logo} />
          <Box className={"boxTitle"}>Available Balance</Box>
          <Box className={"boxBalance"}>{balance} TON</Box>
        </Box>
        <Box className={"secondBox"}>
          <Grid container className={"btncti"}>
            <Grid item xs={4}>
              <Link to="/Lucia-page/Seller" style={{ textDecoration: "none" }}>
                <Button className={"btnLine"}>
                  <Box>
                    <img src={Sell}></img>
                    <Box className={"btnText"}>Seller</Box>
                  </Box>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="/Lucia-page/Buyer" style={{ textDecoration: "none" }}>
                <Button className={"btnLine"}>
                  <Box>
                    <img src={Buy}></img>
                    <Box className={"btnText"}>Buyer</Box>
                  </Box>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="/Lucia-page/LockNFT" style={{ textDecoration: "none" }}>
                <Button className={"btnLine"}>
                  <Box>
                    <img src={Register}></img>
                    <Box className={"btnText"}>Mediator</Box>
                  </Box>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box className={"history"}>
          <Box className={"TransactionBg"}>
            <Grid
              container
              style={{ justifyContent: "space-between", textAlign: "center" }}
            >
              <Grid
                item
                xs={9}
                className={"TransactionTitle"}
                style={{ maxWidth: "69%" }}
              >
                Transaction History
              </Grid>
              <Grid item xs={3} className={"btnText2"}>
                <Link
                  to="/Lucia-page/TradeHistory"
                  style={{ textDecoration: "none" }}
                >
                  View All
                </Link>
              </Grid>
            </Grid>
            <Box className={"TransH"}>
              {history.map((transaction: transactions) => (
                <Grid
                  key={`event-${transaction.hash}`}
                  container
                  style={{
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={8} className={"TransactionDeli"}>
                    {(transaction.dir == "in"
                      ? transaction.from
                      : transaction.to
                    ).slice(0, 15) + "..."}
                    <Grid className={"TransactionDate"}>
                      {new Date(Number(transaction.utime) * 1000).toISOString()}
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                    <Box
                      className={"TransactionPrice"}
                      style={{ fontSize: "12px" }}
                    >
                      {fromNano(transaction.value)}
                      <br></br> <span style={{ color: "#BDBDBD" }}>TON</span>
                    </Box>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Box>
          {/* <Storystyle /> */}
        </Box>
      </div>
      <div className={"FooterC"}>
        <Footer />
      </div>
    </>
  );
}
