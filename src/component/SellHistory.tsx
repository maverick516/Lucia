import { Component } from "react";
import "@twa-dev/sdk";
import "../App.css";
import Footer from "./Footer";
import { Box, Button, Grid } from "@mui/material";
import "../index.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";
import Select from "./Select";
import Sellstory from "./Sellstory";

export default class TradeHistory extends Component {
  render() {
    return (
      <>
        <div
          className={"Container"}
          style={{ background: "#FBFBFB", gap: "0!important" }}
        >
          <Box
            className={"TH-Header"}
            style={{ padding: "0 20px", marginTop: "10px" }}
          >
            <Link to="/Lucia-page/main">
              <ChevronLeftIcon fontSize="large" style={{ color: "black" }} />
            </Link>
          </Box>
          <Box className={"t-history"}>
            <Grid
              container
              style={{
                justifyContent: "space-between",
                textAlign: "start",
                margin: "0 auto",
                padding: "0px 35px 0 30px",
              }}
            >
              <Grid xs={9} className={"TransactionTitle"}>
                <Select />
              </Grid>
              <Grid xs={3} className={"btnText2"}>
                <Link to="/Lucia-page/TradeHistory">View All</Link>
              </Grid>
            </Grid>
            <Sellstory />
            <Grid
              container
              style={{ marginTop: "10px", justifyContent: "center" }}
            >
              <Button
                className={"btn"}
                component={Link}
                to="/Lucia-page/SellList"
              >
                <span className={"text"}>Sell</span>
              </Button>
            </Grid>
          </Box>
        </div>
        <div className={"FooterC"}>
          <Footer />
        </div>
      </>
    );
  }
}
