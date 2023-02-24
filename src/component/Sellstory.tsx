import List from "@mui/material/List";
import { Box, Grid } from "@mui/material";

export default function PinnedSubheaderList() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "410px",
        background: "#FBFBFB",
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0].map((sectionId) => (
        <li>
          <ul
            style={{
              backgroundColor: "#FBFBFB",
            }}
          >
            {[0].map((item) => (
              <Box className={"SHB"}>
                <Grid container className={"container-mi"}>
                  <Grid item xs={7} className={"Grid-text"}>
                    <span style={{ marginLeft: "5px" }}>DAEGU LLC</span>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{ padding: "10px 0px", marginRight: "10px" }}
                  >
                    <Grid className={"Money"}>
                      <span style={{ marginRight: "5px" }}>-1,000원</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={"container-mi"}>
                  <Grid item xs={7} className={"Grid-text"}>
                    <span style={{ marginLeft: "5px" }}>Smart Factory LLC</span>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{ padding: "10px 10px", marginRight: "10px" }}
                  >
                    <Grid className={"Money"}>
                      <span style={{ marginRight: "5px" }}>-1,000원</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={"container-mi"}>
                  <Grid item xs={7} className={"Grid-text"}>
                    <span style={{ marginLeft: "5px" }}>Smart Factory LLC</span>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{ padding: "10px 10px", marginRight: "10px" }}
                  >
                    <Grid className={"Money"}>
                      <span style={{ marginRight: "5px" }}>-1,000원</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={"container-mi"}>
                  <Grid item xs={7} className={"Grid-text"}>
                    <span style={{ marginLeft: "5px" }}>Smart Factory LLC</span>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{ padding: "10px 10px", marginRight: "10px" }}
                  >
                    <Grid className={"Money"}>
                      <span style={{ marginRight: "5px" }}>-1,000원</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={"container-mi"}>
                  <Grid item xs={7} className={"Grid-text"}>
                    <span style={{ marginLeft: "5px" }}>Smart Factory LLC</span>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{ padding: "10px 10px", marginRight: "10px" }}
                  >
                    <Grid className={"Money"}>
                      <span style={{ marginRight: "5px" }}>-1,000원</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={"container-mi"}>
                  <Grid item xs={7} className={"Grid-text"}>
                    <span style={{ marginLeft: "5px" }}>Smart Factory LLC</span>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{ padding: "10px 10px", marginRight: "10px" }}
                  >
                    <Grid className={"Money"}>
                      <span style={{ marginRight: "5px" }}>-1,000원</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
