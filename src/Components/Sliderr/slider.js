import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export default function Sliderr() {
  const [value, setValue] = React.useState(10);

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography>{"Probability: " + value + "%"}</Typography>
      <Slider
        value={value}
        min={0}
        step={5}
        max={100}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}
