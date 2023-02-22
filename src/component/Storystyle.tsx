import List from "@mui/material/List";
import { Box, Grid } from "@mui/material";

export default function PinnedSubheaderList(props: any) {
  const list = props.list;
  // console.log(list[0]);
  
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        backgroundColor: "#FBFBFB",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      <li>
        <ul>
          {list &&
            <Box className={"list-box"}>
              {list?.map((item: any) => (
                <Grid
                  key={`event-${ item.idx }`}
                  container
                  className={"container-mi"}
                >
                  <Grid item xs={7} className={"Grid-text"}>
                    <span style={{ marginLeft: "5px" }}>{ item.company }</span>
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
              ))}
            </Box>
          }
        </ul>
      </li>
    </List>
  );
}
