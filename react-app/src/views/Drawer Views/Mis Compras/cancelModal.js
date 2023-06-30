import React, { useEffect, useState } from "react";
import { Outlet, Link, useOutletContext, useNavigate } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import {
  IconButton,
  Button,
  Typography,
  Box,
  Modal,
  TextField,
  FormHelperText,
} from "@mui/material";

/* ICONS */
import CloseIcon from "@mui/icons-material/Close";

import { littleSizeFunc } from "../../../controller/windowSize";
import logo from "../../../imgs/logo_compacto.png";

const transition = "500ms";

export default function CancelModal(props) {
  const { openModal, setOpenModal } = props;
  const [continueValue, setContinueValue] = useState(false);
  const [currentRazon, setCurrentRazon] = useState("");
  const [errorRazon, setErrorRazon] = useState("");
  const [stepCount, setStepCount] = useState(0);

  const littleSize = littleSizeFunc();

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setContinueValue(false);
    setOpenModal(false);
    setStepCount(0);
    setErrorRazon("");
    setCurrentRazon("");
  };

  const handleAnular = () => {
    if (currentRazon){
      // TODO: back enviar razon
      setOpenModal(false);
    } else{
      setErrorRazon("Ingrese el motivo de anulación")
    }
  };

  const handleRazon = (value) => {
    setCurrentRazon(value);
    if (isEmpty(value)) {
      setErrorRazon("Ingrese el motivo de anulación");
    } else {
      setErrorRazon("");
    }
  }

  /* CSS */
  const datosBox = {
    transition: transition,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: stepCount > 0 ? "80vw" : "fit-content",
    minWidth: "250px",
    maxWidth: "1500px",
    height: "fit-content",
    maxHeight: "98vh",
    background: "#FCFBFB",
    borderRadius: "20px",
    padding: "2vh 2vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "11px",
  };
  const closeButtonBox = {
    transition: transition,
    position: "absolute",
    right: "2vmin",
    top: "2vmin",
  };
  const logoStyle = {
    transition: transition,
    minWidth: stepCount > 0 ? "100px" : "150px",
    maxWidth: stepCount > 0 ? "250px" : "350px",
    width: stepCount > 0 ? "10vw" : "20vw",
    height: "auto",
    padding: stepCount > 0 ? "4vh 2vw 2vh 2vw" : "4vh 2vw",
  };
  const contenido = {
    width: "fit-content",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "11px",
  };
  const titleStyle = {
    transition: transition, // smooth transition
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "18px",
    maxWidth: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  };
  const textFieldBox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    minWidth: "200px",
    width: "40vw",
    maxWidth: "450px",
    gap: "11px",
  };
  const textField = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    background: "#FCFBFB",
    borderRadius: "6px",
    borderRadius: "10px",
    background: "#FFFFFF",
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
    },
  };
  const ingresar_contrasena_olvidar_text = {
    display: "flex",
    justifyContent: "flex-end",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "150%",
    color: "#818181",
  };
  const buttonBox = {
    display: "flex",
    gap: "11px",
  };
  const button = {
    width: "100px",
    textTransform: "none",
    borderRadius: "10px",
    // background: "#E84855",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "15px",
    padding: "8px 24px",
    color: "#FCFCFC",
  };
  const textbutton = {
    width: "100px",
    textTransform: "none",
    fontFamily: "Poppins",
    borderRadius: "10px",
    fontStyle: "normal",
    fontWeight: "600",
    padding: "8px 24px",
    fontSize: "15px",
    border: "2px solid"
    // color: "#818181",
  };

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box sx={datosBox}>
        <Box sx={closeButtonBox}>
          <IconButton onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box component="img" src={logo} alt="Logo" sx={logoStyle} />
        <Box sx={contenido}>
          <Typography sx={titleStyle}>
            ¿Estás seguro que quieres anular la compra?
          </Typography>
          <Box sx={textFieldBox}>
            <TextField
              fullWidth
              required
              multiline
              minRows={5}
              type="text"
              id="razon"
              label="Ingrese el motivo de la anulación"
              sx={textField}
              value={currentRazon}
              onChange={(e) => handleRazon(e.target.value)}
            />
            <FormHelperText error>{errorRazon}</FormHelperText>
          </Box>
          <Box sx={buttonBox}>
            <Button sx={button} variant="contained" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button sx={textbutton} variant="text" onClick={handleAnular}>
              Anular
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
