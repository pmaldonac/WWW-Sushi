import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from "@mui/material";

/* ICONS */
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const transition = "500ms";
const selectHeight = "40px";
const selectMaxHeight = "40px";

export default function CustomSelect(props) {
  const { value, setValue, req, label, fontWeightValue, errorText='', disabled=false, helperText=''} = props;
  const [filtroSeleccionadoValue, setFiltroSeleccionadoValue] = useState(false);

  const handleValueChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "") {
      setFiltroSeleccionadoValue(false);
    } else {
      setFiltroSeleccionadoValue(true);
    }
  };

  /* CSS */
  const form = {
    width: "100%",
  };
  const labelStyle = {
    fontWeight: fontWeightValue ? fontWeightValue : 600,
    width: "80%",
    "&.Mui-disabled": {
      opacity: 0.7,
    },
    
  }
  const filtroSeleccionado = {
    width: "100%",
    borderRadius: "10px",
    transition: transition,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: fontWeightValue ? fontWeightValue : 600,
    fontSize: "100%",
    lineHeight: "150%",
    alignItems: "center",
    background: "#FFFFFF",
    // height: selectHeight,
    // maxHeight: selectMaxHeight,
    ".Mui-disabled": {
      opacity: 0.7,
    },
  };
  const filtroVacioSiempre = {
    width: "100%",
    borderRadius: "10px",
    transition: transition,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: fontWeightValue ? fontWeightValue : 600,
    fontSize: "100%",
    display: "flex",
    alignItems: "center",
    lineHeight: "150%",
    color: "#818181",
    background: "#FFFFFF",
    // height: selectHeight,
    // maxHeight: selectMaxHeight,
    ".Mui-disabled": {
      opacity: 0.7,
    },
  };
  const filtroVacio = {
    width: "100%",
    borderRadius: "10px",
    transition: transition,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: fontWeightValue ? fontWeightValue : 600,
    fontSize: "100%",
    lineHeight: "150%",
    color: "#818181",
    background: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    // height: selectHeight,
    // maxHeight: selectMaxHeight,
    "&:hover": {
      color: "#E84855",
    },
    ".Mui-disabled": {
      opacity: 0.7,
    },
  };
  
  return (
    <FormControl fullwidth sx={form} size="medium" required={req}>
      <InputLabel disabled={disabled}  sx={labelStyle} id={`${label}-id`}>{label}</InputLabel>
      <Select
        disabled={disabled}
        error = {errorText}
        labelId={`${label}-id`}
        required={req}
        value={value}
        onChange={handleValueChange}
        label={label}
        displayEmpty = {req}
        IconComponent={KeyboardArrowDownIcon}
        sx={filtroSeleccionadoValue ? filtroSeleccionado : filtroVacioSiempre}
        // MenuProps= {keepMounted ? { keepMounted: keepMounted} : {}}
      >
        { req ? null :
          <MenuItem sx={filtroVacioSiempre} value="">
            {label}
          </MenuItem>
        }
        {props.children.map((val) => (
          <MenuItem
            sx={val.id === value ? filtroSeleccionado : filtroVacio}
            value={val.id}
          >
            {val.value}
          </MenuItem>
        ))}
      </Select>
      { helperText ? 
      <FormHelperText error>{errorText}</FormHelperText> : null } 
    </FormControl>
  );
}
