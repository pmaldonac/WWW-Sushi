import React, { useState, useMemo, useEffect } from "react";
import { Typography, Box, Select, MenuItem, FormControl } from "@mui/material";
import { listaEstadoPedido } from "../../../controller/listas";
import CustomSelect from "./customSelect";

export default function StateCell(props) {
  const { variant, state } = props;
  const [currentEstado, sertCurrentEstado] = useState("Preparand"); // TODO: fetch
  let pointColor = "#FFFFF";

  const handleChange = (event) => {
    sertCurrentEstado(event.target.value);
  };

  if (
    /entregado/i.test(state) ||
    /validado/i.test(state) ||
    /resuelto/i.test(state)
  ) {
    pointColor = "#6DCDAA";
  } else if (/cancelado/i.test(state)) {
    pointColor = "#DE5C5C";
  } else if (
    /preparando/i.test(state) ||
    /pendiente/i.test(state) ||
    /abierto/i.test(state)
  ) {
    pointColor = "#F7BA60";
  } else if (/en camino/i.test(state) || /procesando/i.test(state)) {
    pointColor = "#1876D1";
  }

  /* CSS */
  const stateBox = {
    border: "1.5px solid #D9D9D9",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "row",
    width: "fit-content",
    height: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    padding: "4px 7px",
    margin: "0px",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const colorPoint = {
    width: "5px",
    height: "5px",
    borderRadius: "100%",
    background: pointColor,
  };
  const text = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "150%",
    textTransform: "capitalize",
    width: "fit-content",
  };

  return variant === "delivery" ? (
    <CustomSelect
      small
      label=""
      fontWeightValue={400}
      value={currentEstado}
      setValue={sertCurrentEstado}
    >
      {listaEstadoPedido}
    </CustomSelect>
  ) : (
    <Box sx={stateBox}>
      <Box sx={colorPoint} />
      <Typography sx={text}>{state}</Typography>
    </Box>
  );
}
