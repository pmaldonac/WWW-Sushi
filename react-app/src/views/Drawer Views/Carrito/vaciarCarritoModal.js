import React, { useEffect, useState } from "react";
import { Outlet, Link, useOutletContext, useNavigate } from "react-router-dom";
import {
  IconButton,
  Button,
  Typography,
  Box,
  Modal,
  TextField,
} from "@mui/material";

/* ICONS */
import CloseIcon from "@mui/icons-material/Close";

import { littleSizeFunc } from "../../../controller/windowSize";
import logo from "../../../imgs/logo_compacto.png";

const transition = "500ms";

export default function VaciarCarritoModal(props) {
  const { openModal, setOpenModal } = props;
  const [continueValue, setContinueValue] = useState(false);
  const [currentRazon, setCurrentRazon] = useState("");
  const [stepCount, setStepCount] = useState(0);

  const littleSize = littleSizeFunc();

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setContinueValue(false);
    setOpenModal(false);
    setStepCount(0);
  };

  const handleContinue = () => {
    setOpenModal(false);
  };

  const handleRegistrarse = () => {
    setStepCount(stepCount + 1);
  };

  /* CSS */
  const datosBox = {
    transition: transition,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
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
    minWidth: "100px",
    maxWidth: "250px",
    width: "10vw",
    height: "auto",
    padding: "4vh 2vw",
  };
  const contenido = {
    width: "fit-content",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "22px",
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
            ¿Estás seguro de vaciar el carrito?
          </Typography>
          <Box sx={buttonBox}>
            <Button sx={button} variant="contained" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button sx={textbutton} variant="text">
              Vaciar
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
