import "@twa-dev/sdk";
import "../App.css";
import Footer from "./Footer";
import { Box, Button, Grid } from "@mui/material";
import "../index.css";
import Select from "./Select";
import { Link } from "react-router-dom";
import Storystyle from "./Storystyle";
import { getBuyerList } from "../hooks/getBuyerInfo";

export default function SellList() {
  const buyerList = getBuyerList();

  return (
    <>
      <div className={"Container"}>
        <Box className={"box"}>
          <Box
            className={"subTitle text-Q1"}
            style={{ color: "white", fontSize: "23px" }}
          >
            Available Location
          </Box>
          <Box
            className={"boxTitle"}
            style={{ paddingTop: "15px", fontSize: "13px" }}
          >
            Selling Amount
          </Box>
          <Box className={"subBalance"} style={{ color: "white" }}>
            547.54 kWh LUX
          </Box>
        </Box>
        <Box className={"secondBoxCopy"}></Box>
        <Box className={"history"}>
          <Grid
            container
            style={{
              justifyContent: "space-between",
              textAlign: "start",
              margin: "0 auto",
              padding: "30px 35px 0 30px",
            }}
          >
            <Grid item xs={9} className={"TransactionTitle"}>
              <Select />
            </Grid>
            <Grid item xs={3} className={"btnText2"}>
              <Link to="/Lucia-page/TradeHistory">View All</Link>
            </Grid>
          </Grid>
          <Storystyle list={buyerList} />
          <Button
            className={"btn"}
            component={Link}
            to="/Lucia-page/SellHistory"
          >
            <span className={"text"}>Sell</span>
          </Button>
        </Box>
      </div>
      <div className={"FooterC"}>
        <Footer />
      </div>
    </>
  );
}
