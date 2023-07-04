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
import InfoPerfil from "../common/infoPerfil";

const transition = "500ms";

export default function AnadirPersonaModal(props) {
  const { openModal, setOpenModal } = props;
  const [continueValue, setContinueValue] = useState(false);
  const [currentValueEmail, setCurrentValueEmail] = useState("");
  const [currentValuePass, setCurrentValuePass] = useState("");
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
    width: "80vw",
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
    padding: "4vh 2vw 2vh 2vw",
  };

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box sx={datosBox}>
        <Box sx={closeButtonBox}>
          <IconButton onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          loading="lazy"
          component="img"
          src={logo}
          alt="Logo"
          sx={logoStyle}
        />
        <InfoPerfil
          confirmText="Añadir Usuario"
          setStepCount={setStepCount}
          cliente={false}
          setOpenModal={setOpenModal}
        >
          ¡Rellena los campos y recibe las mejores ofertas de sushi!
        </InfoPerfil>
      </Box>
    </Modal>
  );
}
