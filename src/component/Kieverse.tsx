import "@twa-dev/sdk";
import "../App.css";
import Footer from "./Footer";
import { Box, Button, Fade, Grid, Modal } from "@mui/material";
import "../index.css";
import { Link } from "react-router-dom";
import kieverse from "../assets/thekieicon.svg";
import timeicon from "../assets/timeicon.svg";
import TextInput from "./TextInput";
import Backdrop from "@mui/material/Backdrop";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  p: 4,
  background: "white",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "18px",
  height: "280px",
};

export default function Kieverse() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className={"Container"}>
        <Box className={"box"}>
          <Box
            className={"boxTitle"}
            style={{ paddingTop: "15px", fontSize: "18px", marginTop: "80px" }}
          >
            Welcome to the KIE-UNIVERSE
          </Box>
        </Box>
        <Box className={"secondBoxCopy"}></Box>
        <Box className={"kie-history"} style={{ padding: "14px" }}>
          <Box>
            <Box className={"kie-sub-text1"}>
              Please connect with the KIE-Devices
            </Box>
            <Box className={"kie-sub-text2"}>
              To utilize the underlying services, it is necessary to install one
            </Box>
            <Box className={"Lock-text2"}>
              please click the link if you want to install one
            </Box>
            <Grid container>
              <Grid item xs={6}>
                <Box>
                  <Box className={"kie-box"}>
                    <Button className={"kie-button"} onClick={handleOpen}>
                      <Box>
                        <img className={"kie-bg"} src={kieverse}></img>
                      </Box>
                      <Box className={"kie-text1"}>KIE-MECS</Box>
                      <Box className={"kie-text2"}>
                        <span>STAKING</span>
                        <br></br> <span>Housing DATA</span>
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Box className={"kie-box"}>
                    <Button className={"kie-button"} onClick={handleOpen}>
                      <Box>
                        <img className={"kie-bg"} src={kieverse}></img>
                      </Box>
                      <Box className={"kie-text1"}>KIE-RTMU</Box>
                      <Box className={"kie-text2"}>
                        <span>Monitoring</span>
                        <br></br> <span>Sending Energy Data </span>
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Box>
                  <Box className={"kie-box"}>
                    <Button className={"kie-button"}>
                      <Box>
                        <img className={"kie-bg"} src={timeicon}></img>
                      </Box>
                      <Box className={"kie-text1"}>
                        Coming<br></br>soon
                      </Box>
                      <Box className={"kie-text2"}>
                        {" "}
                        <span>Will Be</span>
                        <br></br> <span>Updated Soon</span>
                      </Box>
                    </Button>
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

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Box className={"Buyer-Modal"}>
                <Box className={"kiemecsMQ"}>
                  Would you like to connect<br></br>with Lucia?
                </Box>
                <TextInput />
                <Box style={{ padding: "10px" }}>QR CODE</Box>
                <Link to="/Lucia-page/Kiemecs">
                  <Button className={"btn"}>
                    <span className={"text"}>Confirm</span>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
}
