import "@twa-dev/sdk";
import "../App.css";
import Footer from "./Footer";
import { Box, Button } from "@mui/material";
import "../index.css";
import Slider from "./Slider";
import TextInput from "./TextInput";
import { Link } from "react-router-dom";
import { getBuyerList } from "../hooks/getBuyerInfo";

export default function Seller() {  
  return (
    <>
      <div className={"Container"}>
        <Box className={"box"}>
          <Box
            className={"subTitle text-Q1"}
            style={{ color: "white", fontSize: "23px" }}
          >
            Sell Your Energy
          </Box>
          <Box
            className={"boxTitle"}
            style={{ paddingTop: "15px", fontSize: "13px" }}
          >
            Your Generated Amount
          </Box>
          <Box className={"subBalance"} style={{ color: "white" }}>
            547.54 kWh LUX
          </Box>
        </Box>
        <Box className={"secondBoxCopy"}></Box>
        <Box className={"history"}>
          <Box className={"SellBG"}>
            <Box className={"SellBox"}>
              <Box className={"text-Q4"}>Your Required Amount</Box>
              <TextInput />
              <Slider />
            </Box>
          </Box>
          <Button
            className={"btn"}
            style={{ marginTop: "30px" }}
            component={Link}
            to="/Lucia-page/SellList"
          >
            <span className={"text"}>Next</span>
          </Button>
        </Box>
      </div>
      <div className={"FooterC"}>
        <Footer />
      </div>
    </>
  );
}
