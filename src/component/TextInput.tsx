import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MultilineTextFields() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <div style={{ marginTop: "15px", border: "0", textAlign: "center" }}>
        <TextField
          id="outlined-multiline-flexible"
          className={"SellInput"}
          multiline
          maxRows={4}
        />
      </div>
    </Box>
  );
}
