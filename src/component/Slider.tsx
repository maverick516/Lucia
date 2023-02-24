import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function DiscreteSlider(props: any) {
  const setValue = props.setVal;
  const value = props.val;
  const max = props.max ? props.max : 700;

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    // console.log(event);
  };

  return (
    <Box sx={{ padding: "10px 10px" }}>
      <Slider
        key={`slider-${value}`}
        defaultValue={value}
        step={100}
        marks
        min={0}
        max={max}
        onChangeCommitted={handleChange}
      />
    </Box>
  );
}
