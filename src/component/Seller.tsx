import "@twa-dev/sdk";
import "../App.css";
import Footer from "./Footer";
import { Box, Button } from "@mui/material";
import "../index.css";
import Slider from "./Slider";
import TextInput from "./TextInput";
import { Link } from "react-router-dom";
import BatteryStatus from "./BatteryStatus";
import { useCollectionDeployNft } from "../hooks/deployNFT";
import { useTonClient } from "../hooks/useTonClient";
import { fromNano } from "ton-core";
import { getBalance } from "../hooks/getBalance";
import main from "./main";
import { useEffect, useState } from "react";

export default function Seller(props: any) {
  var battery = BatteryStatus();

  const [value, setValue] = useState(0);

  const nftButton = useCollectionDeployNft(props.connection).deployNft;

  const energy = battery.props.children.props.level * 100 * 6;
  const energy_max = Math.floor(energy / 100) * 100;
  const nft = value / 100 - 1;
  // console.log(nft);
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
            {battery.props.children.props.level * 100 * 6} kWh LUX
          </Box>
        </Box>
        <Box className={"secondBoxCopy"}></Box>
        <Box className={"history"}>
          <Box className={"SellBG"}>
            <Box className={"SellBox"}>
              <Box className={"text-Q4"}>Your Required Amount</Box>
              <TextInput val={value} />
              <Slider setVal={setValue} val={value} max={energy_max} />
            </Box>
            {energy >= value ? (
              <Button
                className={"btn"}
                style={{ marginTop: "30px" }}
                onClick={() => {
                  nftButton("0.05", { nft } + ".json");
                }}
              >
                <span className={"text"}> {value} kWh</span>
              </Button>
            ) : (
              <Button
                className={"btn"}
                style={{ marginTop: "30px" }}
                onClick={() => {
                  nftButton("0.05", { nft } + ".json");
                }}
              >
                <span className={"text"}> 700 kWh</span>
              </Button>
            )}
          </Box>
        </Box>
      </div>
      <div className={"FooterC"}>
        <Footer />
      </div>
    </>
  );
}
