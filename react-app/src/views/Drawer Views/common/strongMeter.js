import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";

const transition = "500ms";

export default function StrongMeter(props) {
  const { value } = props;

  let percentage = 100 - (value / 60) * 100;

  const color_text = (value) => {
    if (percentage <= 0) {
      return value ? "rgba(3, 168, 6,1)" : "Excelente";
    } else if (percentage <= 10) {
      return value ? "rgba(3, 168, 6,1)" : "Muy buena";
    } else if (percentage <= 25) {
      return value ? "rgba(3, 168, 6,1)" : "Buena";
    } else if (percentage <= 50) {
      return value ? "rgba(255,132,0,1)" : "Media";
    } else if (percentage <= 75) {
      return value ? "rgba(255,0,0,1)" : "Mala";
    } else if (percentage <= 90) {
      return value ? "rgba(255,0,0,1)" : "Muy mala";
    }
  };

  /* CSS */
  const meter = {
    transition: transition,
    opacity: value ? 1 : 0,
    width: "95%",
    height: value ? "10px" : "0px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "5px",
  };
  const line = {
    position: "relative",
    height: "10px",
    borderRadius: "10px",
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexWrap: "nowrap",
    background:
      "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,132,0,1) 50%, rgba(0,255,4,1) 100%)",
  };
  const whiteLine = {
    position: "absolute",
    width: `${percentage}%`,
    height: "110%",
    background: "#FCFCFC",
  };
  const textStyle = {
    width: "20%",
    minWidth: "90px",
    fontSize: "16px",
    color: color_text(true),
    textAlign: "end",
  };

  return (
    <Box sx={meter}>
      <Box sx={line}>
        <Box sx={whiteLine} />
      </Box>
      <Typography sx={textStyle}>{color_text(false)}</Typography>
    </Box>
  );
}
