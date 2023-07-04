import React, { useEffect, useState } from "react";
import { Outlet, Link, useOutletContext, useNavigate } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import {
  IconButton,
  Button,
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

export default function AnadirProductoModal(props) {
  const { openModal, setOpenModal } = props;
  const [continueValue, setContinueValue] = useState(false);

  const [valueNombre, setValueNombre] = useState("");
  const [valueDescripcion, setValueDescripcion] = useState("");
  const [valuePrecio, setValuePrecio] = useState("");
  const [valueURL, setValueURL] = useState("");

  const [errorNombre, setErrorNombre] = useState("");
  const [errorDescripcion, setErrorDescripcion] = useState("");
  const [errorPrecio, setErrorPrecio] = useState("");
  const [errorURL, setErrorURL] = useState("");

  const littleSize = littleSizeFunc();

  const navigate = useNavigate();

  useEffect(() => {
    setContinueValue(
      valueNombre &&
        valueDescripcion &&
        valuePrecio &&
        valueURL &&
        !errorNombre &&
        !errorDescripcion &&
        !errorPrecio &&
        !errorURL
    );
  }, [valueNombre, valueDescripcion, valuePrecio, valueURL]);

  const handleCloseModal = () => {
    setContinueValue(false);
    setOpenModal(false);
  };

  const handleAnadir = () => {
    setOpenModal(false);
    // TODO: POST
  };

  const handleNotEmpty = (value, setValue, setError, error) => {
    setValue(value);
    if (isEmpty(value)) {
      setError(error);
    } else {
      setError("");
    }
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
    maxWidth: "200px",
    width: "20vw",
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
    gap: "11px",
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
    borderRadius: "10px",
    background: "#FFFFFF",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
    },
  };
  const button = {
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
    textTransform: "none",
    fontFamily: "Poppins",
    borderRadius: "10px",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "15px",
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
        <Box
          loading="lazy"
          component="img"
          src={logo}
          alt="Logo"
          sx={logoStyle}
        />
        <Box sx={contenido}>
          <Box sx={textFieldBox}>
            <TextField
              fullWidth
              required
              type="text"
              id="nombre"
              label="Nombre del producto"
              sx={textField}
              value={valueNombre}
              onChange={(e) =>
                handleNotEmpty(
                  e.target.value,
                  setValueNombre,
                  setErrorNombre,
                  "Escriba el nombre del producto"
                )
              }
            />
            <FormHelperText error>{errorNombre}</FormHelperText>
          </Box>
          <Box sx={textFieldBox}>
            <TextField
              fullWidth
              required
              type="text"
              id="descripcion"
              label="Descripción"
              sx={textField}
              value={valueDescripcion}
              onChange={(e) =>
                handleNotEmpty(
                  e.target.value,
                  setValueDescripcion,
                  setErrorDescripcion,
                  "Escriba la descripcion del producto"
                )
              }
            />
            <FormHelperText error>{errorDescripcion}</FormHelperText>
          </Box>
          <Box sx={textFieldBox}>
            <TextField
              fullWidth
              required
              type="number"
              id="precio"
              label="Precio"
              sx={textField}
              value={valuePrecio}
              onChange={(e) =>
                handleNotEmpty(
                  e.target.value,
                  setValuePrecio,
                  setErrorPrecio,
                  "Escriba el precio del producto"
                )
              }
            />
            <FormHelperText error>{errorPrecio}</FormHelperText>
          </Box>
          <Box sx={textFieldBox}>
            <TextField
              fullWidth
              required
              type="text"
              id="foto"
              label="Foto URL"
              sx={textField}
              value={valueURL}
              onChange={(e) =>
                handleNotEmpty(
                  e.target.value,
                  setValueURL,
                  setErrorURL,
                  "Copie y pegue la URL del producto"
                )
              }
            />
            <FormHelperText error>{errorURL}</FormHelperText>
          </Box>
          <Button
            sx={button}
            variant="contained"
            disabled={!continueValue}
            onClick={handleAnadir}
          >
            Añadir producto
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
