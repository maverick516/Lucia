import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <Box sx={{ padding: "10px 10px" }}>
      <Slider defaultValue={30} step={10} marks min={10} max={100} />
    </Box>
  );
}
