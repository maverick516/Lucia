import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectSmall() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 200, marginLeft: 0 }} size="small">
      <InputLabel id="demo-select-small" className="select-text">
        All· Price · Distance
      </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>DAEGU</MenuItem>
        <MenuItem value={20}>SEOUL</MenuItem>
        <MenuItem value={30}>BUSAN</MenuItem>
      </Select>
    </FormControl>
  );
}
