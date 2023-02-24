import "@twa-dev/sdk";
import "../App.css";
import Footer from "./Footer";
import { Box, Button, Grid } from "@mui/material";
import "../index.css";
import Select from "./Select";
import { Link } from "react-router-dom";
import Storystyle from "./Storystyle";
import { getBuyerList } from "../hooks/getBuyerInfo";
import token from "../assets/token.svg";

export default function SellList() {
  const buyerList = getBuyerList();

  return (
    <>
      <div className={"Container"}>
        <Box className={"box"}>
          <Box
            className={"boxTitle"}
            style={{ paddingTop: "15px", fontSize: "20px", marginTop: "80px" }}
          >
            Mediator For You
          </Box>
        </Box>
        <Box className={"secondBoxCopy"}></Box>
        <Box className={"lock-history"} style={{ padding: "20px" }}>
          <Box>
            <Box className={"Lock-text1"}>Locked NFT</Box>
            <Box className={"Lock-text2"}>
              You need to send energy in order to receive it
            </Box>
            <Grid container>
              <Grid item xs={6}>
                <Box>
                  <Box className={"lock-box"}>
                    <Box>
                      <img className={"token-bg"} src={token}></img>
                    </Box>
                    <Box className={"token-text1"}>Energy NFT</Box>
                    <Box className={"token-text2"}>100 TON</Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Box className={"lock-box"}>
                    <Box>
                      <img className={"token-bg"} src={token}></img>
                    </Box>
                    <Box className={"token-text1"}>Energy NFT</Box>
                    <Box className={"token-text2"}>100 TON</Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Box>
                  <Box className={"lock-box"}>
                    <Box>
                      <img className={"token-bg"} src={token}></img>
                    </Box>
                    <Box className={"token-text1"}>Energy NFT</Box>
                    <Box className={"token-text2"}>100 TON</Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Box className={"lock-box"}>
                    <Box>
                      <img className={"token-bg"} src={token}></img>
                    </Box>
                    <Box className={"token-text1"}>Energy NFT</Box>
                    <Box className={"token-text2"}>100 TON</Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
      <div className={"FooterC"}>
        <Footer />
      </div>
    </>
  );
}
