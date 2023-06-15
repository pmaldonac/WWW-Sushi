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

export default function AuthModal(props) {
  const {
    openModal,
    setOpenModal,
  } = props;
  const [continueValue, setContinueValue] = useState(false);
  const [currentValueEmail, setCurrentValueEmail] = useState("");
  const [currentValuePass, setCurrentValuePass] = useState("");

  const littleSize = littleSizeFunc();

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setContinueValue(false);
    setOpenModal(false);
  };

  const handleContinue = () => {
    setOpenModal(false);
  };

  const handleRegistrarse = () => {
    
  }

  /* CSS */
  const datosBox = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    minWidth: "250px",
    // maxWidth: "1130px",
    height: "fit-content",
    maxHeight: "98vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#FCFBFB",
    borderRadius: "20px",
    padding: "2vh 2vw ",
    gap: "11px",
  };
  const closeButtonBox = {
    position: "absolute",
    right: "2vmin",
    top: "2vmin",
  };
  const logoStyle = {
    minWidth: "150px",
    maxWidth: "350px",
    width: "20vw",
    height: "auto",
    padding: "4vh 2vw",
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
    ".css-183emvd-MuiInputBase-root-MuiOutlinedInput-root": {
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
  const button = {
    textTransform: "none",
    borderRadius: "10px",
    background: "#E84855",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "15px",
    padding: "8px 24px",
    "&:hover": {
      background: "#E84855",
    },
  };
  const textbutton = {
    textTransform: "none",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "15px",
    color: "#818181",
    "&:hover": {
      background: "#FAF2F3",
    },
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
        <Box sx={textFieldBox}>
          <TextField
            // error="Ingrese email valido"
            fullWidth
            required
            type="email"
            id="email"
            label="Email"
            sx={textField}
            value={currentValueEmail}
            onChange={(e) => setCurrentValueEmail(e.target.value)}
          />
        </Box>
        <Box sx={textFieldBox}>
          <TextField
            // error="Ingrese email valido"
            fullWidth
            required
            type="password"
            id="constraseña"
            label="Constraseña"
            sx={textField}
            value={currentValuePass}
            onChange={(e) => setCurrentValuePass(e.target.value)}
          />
        </Box>
        <Typography
          component={Link}
          to="../restablecer"
          sx={ingresar_contrasena_olvidar_text}
        >
          ¿Olvidaste tu contraseña?
        </Typography>
        <Button sx={button} variant="contained">
          Iniciar Sesión
        </Button>
        <Button sx={textbutton} variant="text" onClick={handleRegistrarse}>
          Regístrate
        </Button>
      </Box>
    </Modal>
  );
}
