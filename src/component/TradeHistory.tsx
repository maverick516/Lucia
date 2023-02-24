import { Component } from "react";
import "@twa-dev/sdk";
import "../App.css";
import Footer from "./Footer";
import { Box, Grid } from "@mui/material";
import "../index.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";
import Select from "./Select";

export default class TradeHistory extends Component {
  render() {
    return (
      <>
        <div className={"Container"} style={{ background: "white" }}>
          <Box
            className={"TH-Header"}
            style={{ padding: "0 20px", marginTop: "40px" }}
          >
            <Link to="/Lucia-page/main">
              <ChevronLeftIcon fontSize="large" />
            </Link>
          </Box>
          <Box className={"t-history"}>
            <Grid
              container
              style={{ justifyContent: "space-between", textAlign: "start" }}
            >
              <Grid
                item
                xs={12}
                className={"TransactionTitle"}
                style={{ padding: "0 30px" }}
              >
                Transaction History
              </Grid>
            </Grid>
            <Box style={{ textAlign: "start", padding: "25px 18px" }}>
              <Select />
            </Box>
            <Box className={"Transaction-HBg"}>
              <Box className={"TransH"} style={{ margin: "0" }}>
                <Grid
                  container
                  style={{
                    justifyContent: "space-between",
                    textAlign: "start",
                  }}
                >
                  <Grid item xs={8} className={"TransactionDeli"}>
                    DAEGU LLC
                    <Grid className={"TransactionDate"}>
                      2021-10-04-10:21:00
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                    <Box className={"TransactionPrice"}>1.25LUX</Box>
                  </Grid>
                </Grid>
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
}
