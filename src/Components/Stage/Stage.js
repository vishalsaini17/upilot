import * as React from "react";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircleIcon from "@mui/icons-material/Circle";
import Typography from "@mui/material/Typography";
const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: "#00CBED"
  },
  "& .MuiRating-iconHover": {
    color: "#00CBED"
  }
}));
const labels = {
  1: "New opportunity",
  2: "Presentation/Pitch",
  3: "Needs analysis",
  4: "Quote",
  5: "Negotiation"
};

function getLabelText(value) {
  return `${value} Circle${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function Stage() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 300,
        display: "flex",
        alignItems: "center"
      }}
    >
      <Typography component="legend"></Typography>
      <StyledRating
        name="customized-color"
        value={value}
        size="small"
        precision={1}
        icon={<CircleIcon fontSize="inherit" />}
        emptyIcon={<CircleIcon fontSize="inherit" />}
        getLabelText={getLabelText}
        highlightSelectedOnly
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
