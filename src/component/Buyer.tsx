import { Component } from "react";
import "@twa-dev/sdk";
import "../App.css";
import Footer from "./Footer";
import { Box, Grid } from "@mui/material";
import "../index.css";
import Select from "./Select";
import Storystyle from "./Storystyle";
import Modal from "./Modal";

export default class Buyer extends Component {
  render() {
    return (
      <>
        <div className={"Container"}>
          <Box className={"box"}>
            <Box
              className={"subTitle text-Q1"}
              style={{ color: "white", fontSize: "23px", marginTop: "80px" }}
            >
              Buy Energy For You
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
              <Grid xs={9} className={"TransactionTitle"}>
                <Select />
              </Grid>
            </Grid>
            <Storystyle />
            <Modal />
          </Box>
        </div>
        <div className={"FooterC"}>
          <Footer />
        </div>
      </>
    );
  }
}
