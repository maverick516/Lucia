import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import TextInput from "./TextInput";
import "@twa-dev/sdk";
import "../App.css";
import Footer from "./Footer";
import { Box, Button, Fade, Grid, Modal } from "@mui/material";
import "../index.css";
import Lux from "../assets/Lux.svg";

export default function Kiemecs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={"Container"}>
        <Box className={"box"}>
          <Box
            className={"boxTitle"}
            style={{ padding: "10px 0", fontSize: "18px", marginTop: "50px" }}
          >
            KIE-MECS
          </Box>
          <Box className={"boxTitle"}>Your LUX Amount</Box>
          <Box className={"boxKiemecs"}>2300.00 TON</Box>
        </Box>
        <Box className={"secondBoxCopy"}></Box>
        <Box className={"kiemecs-history"} style={{ padding: "14px" }}>
          <Box>
            <Grid container>
              <Grid item xs={6}>
                <Box>
                  <Box className={"kie-box"}>
                    <Button className={"kie-button"} onClick={handleOpen}>
                      <Box>
                        <img className={"kie-bg"} src={Lux}></img>
                      </Box>
                      <Box className={"kie-text1"}>
                        LUX<br></br>Staking
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Grid>
              {/* <Grid item xs={6}>
                <Box>
                  <Box className={"kie-box"}>
                    <Button className={"kie-button"}>
                      <Box>
                        <img className={"kie-bg"} src={kieverse}></img>
                      </Box>
                      <Box className={"kie-text1"}>KIE-RTMU</Box>
                      <Box className={"kie-text2"}>
                        <span>Monitoring</span>
                        <br></br> <span>Sending Energy Data</span>
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Grid> */}
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
