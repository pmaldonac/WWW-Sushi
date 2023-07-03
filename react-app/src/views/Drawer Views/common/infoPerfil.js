import React, { useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import isMobilePhone from "validator/lib/isMobilePhone";
import isStrongPassword from "validator/lib/isStrongPassword";

import { Outlet, Link, useOutletContext, useNavigate } from "react-router-dom";
import {
  IconButton,
  Button,
  Typography,
  Box,
  Modal,
  TextField,
  FormHelperText,
  FormGroup,
} from "@mui/material";

/* ICONS */
import CloseIcon from "@mui/icons-material/Close";

import { littleSizeFunc } from "../../../controller/windowSize";
import logo from "../../../imgs/logo_compacto.png";
import CustomSelect from "./customSelect";
import StrongMeter from "./strongMeter";

import {
  listaSexo,
  listaRegiones,
  listaComunas,
  listaCargos,
} from "../../../controller/listas";
import { Fn } from "../../../controller/utils";

const transition = "500ms";

export default function InfoPerfil(props) {
  const { setStepCount, confirmText, backButton, cliente = true } = props;
  const [continueValue, setContinueValue] = useState(false);
  const [securityValue, setSecurityValue] = useState(0);

  const [valueNombres, setValueNombres] = useState("");
  const [valueApellidos, setValueApellidos] = useState("");
  const [valueRut, setValueRut] = useState("");
  const [valueSexo, setValueSexo] = useState("");
  const [valueCorreo, setValueCorreo] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [valuePassValidation, setValuePassValidation] = useState("");
  const [valueTelefono, setValueTelefono] = useState("");
  const [valueDireccion, setValueDireccion] = useState("");
  const [valueRegion, setValueRegion] = useState("");
  const [valueComuna, setValueComuna] = useState("");
  const [valueCargo, setValueCargo] = useState("");

  const [errorNombres, setErrorNombres] = useState("");
  const [errorApellidos, setErrorApellidos] = useState("");
  const [errorRut, setErrorRut] = useState("");
  const [errorSexo, setErrorSexo] = useState("");
  const [errorCorreo, setErrorCorreo] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorPassValidation, setErrorPassValidation] = useState("");
  const [errorTelefono, setErrorTelefono] = useState("");
  const [errorDireccion, setErrorDireccion] = useState("");
  const [errorRegion, setErrorRegion] = useState("");
  const [errorComuna, setErrorComuna] = useState("");
  const [errorCargo, setErrorCargo] = useState("");

  const littleSize = littleSizeFunc();

  useEffect(() => {
    setContinueValue(
      valueNombres &&
        valueApellidos &&
        valueRut &&
        valueSexo &&
        valueCorreo &&
        valuePass &&
        valuePassValidation &&
        valueTelefono &&
        valueDireccion &&
        valueRegion &&
        valueComuna &&
        !errorNombres &&
        !errorApellidos &&
        !errorRut &&
        !errorSexo &&
        !errorCorreo &&
        !errorPass &&
        !errorPassValidation &&
        !errorTelefono &&
        !errorDireccion &&
        !errorRegion &&
        !errorComuna
    );
  }, [
    valueApellidos,
    valueRut,
    valueSexo,
    valueCorreo,
    valuePass,
    valuePassValidation,
    valueTelefono,
    valueDireccion,
    valueRegion,
    valueComuna,
  ]);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setContinueValue(false);
    setOpenModal(false);
  };

  const handleRegistrar = () => {
    setOpenModal(false);
    // TODO: POST
  };

  const handleBack = () => {
    setStepCount(0);
  };

  const handleNotEmpty = (value, setValue, setError, error) => {
    setValue(value);
    if (isEmpty(value)) {
      setError(error);
    } else {
      setError("");
    }
  };

  const formatValueNumDocumento = (value) => {
    let rut = value;
    rut = rut.replace(/\.|-/g, "");
    if (rut.length > 2) {
      if (rut.length < 5) {
        rut = rut.slice(0, 1) + "." + rut.slice(1);
      } else if (rut.length < 9) {
        rut = rut.slice(0, 1) + "." + rut.slice(1, 4) + "." + rut.slice(4);
      } else if (rut.length === 9) {
        rut = rut.slice(0, 2) + "." + rut.slice(2, 5) + "." + rut.slice(5);
      } else if (rut.length > 9) {
        rut = rut.slice(0, 2) + "." + rut.slice(2, 5) + "." + rut.slice(5, 9);
      }
      if (rut.replace(".", "").length > 7) {
        rut = rut.slice(0, -1) + "-" + rut.slice(-1);
      }
    }
    return rut;
  };

  const handleRUTChange = (value) => {
    let rut = value.replace(/\.|-/g, "");
    rut = rut.slice(0, -1) + "-" + rut.slice(-1);
    setValueRut(rut);
    if (!Fn.validaRut(rut)) {
      setErrorRut("RUT inválido");
    } else {
      setErrorRut("");
    }
  };

  const handleTelChange = (value) => {
    let tel = value.includes("+56") ? value : `+56${value}`;
    setValueTelefono(tel);
    if (isMobilePhone(tel, "es-CL")) {
      setErrorTelefono("");
    } else {
      setErrorTelefono("Escriba un número de teléfono válido");
    }
  };

  const handleMailChange = (value) => {
    setValueCorreo(value);
    if (isEmail(value)) {
      setErrorCorreo("");
    } else {
      setErrorCorreo("Escriba un correo válido");
    }
  };

  const handlePasswordStrong = (value) => {
    let strongValue = isStrongPassword(value, { returnScore: true });
    setValuePass(value);
    setSecurityValue(strongValue);
    if (value.length < 8) {
      setErrorPass("Tu contraseña debe contener al menos 8 caracteres.");
    } else if (strongValue < 45) {
      setErrorPass("Su contraseña no es suficientemente segura.");
    } else {
      setErrorPass("");
    }
  };

  const handlePasswordStrong2 = (value) => {
    setValuePassValidation(value);
    if (value === valuePass) {
      setErrorPassValidation("");
    } else {
      setErrorPassValidation("Contraseña no coincide");
    }
  };

  /* CSS */
  const contenido = {
    width: "fit-content",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "11px",
    overflow: "auto",
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
  const columnas = {
    width: "fit-content",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap",
    gap: "5vw",
    overflow: "auto",
    padding: "11px 0",
  };
  const col = {
    width: "fit-content",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "22px",
  };
  const textFieldBox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    flexWrap: "nowrap",
    minWidth: littleSize ? "200px" : "250px",
    width: "20vw",
    maxWidth: "450px",
    gap: "3px",
  };
  const textField = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    background: "#FCFBFB",
    borderRadius: "6px",
    borderRadius: "10px",
    background: "#FFFFFF",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
    },
  };
  const textFieldBoxTel = {
    display: "flex",
    flexDirection: "row",
  };
  const textFieldTelLeft = {
    width: "58px",
    borderRadius: "10px",
    borderBottomRightRadius: "0%",
    borderTopRightRadius: "0%",
    background: "#FFFFFF",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      borderBottomRightRadius: "0%",
      borderTopRightRadius: "0%",
      "& .MuiOutlinedInput-input": {
        paddingLeft: "0px",
        paddingRight: "0px",
      },
    },
  };
  const textFieldTelRight = {
    width: "calc(100% - 58px)",
    borderRadius: "10px",
    borderBottomLeftRadius: "0%",
    borderTopLeftRadius: "0%",
    background: "#FFFFFF",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      borderBottomLeftRadius: "0%",
      borderTopLeftRadius: "0%",
    },
  };
  const buttonBox = {
    minWidth: "200px",
    width: "fit-content",
    display: "flex",
    flexWrap: "wrap-reverse",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
  };
  const button = {
    width: "200px",
    textTransform: "none",
    borderRadius: "10px",
    // background: "#E84855",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "15px",
    padding: "8px 24px",
    margin: "2vh 2vw",
    color: "#FCFCFC",
    // "&:hover": {
    //   background: "#E84855",
    // },
  };
  const textbutton = {
    textTransform: "none",
    fontFamily: "Poppins",
    borderRadius: "10px",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "15px",
    // color: "#E84855",
    padding: "8px 24px",
    margin: "2vh 2vw",
    // "&:hover": {
    // background: "#FAF2F3",
    // },
  };

  return (
    <Box sx={contenido}>
      <Typography sx={titleStyle}>{props.children}</Typography>
      <Box sx={columnas}>
        <Box sx={col}>
          <Box sx={textFieldBox} component={FormGroup}>
            <TextField
              fullWidth
              required
              type="text"
              id="nombres"
              label="Nombres"
              sx={textField}
              value={valueNombres}
              onChange={(e) =>
                handleNotEmpty(
                  e.target.value,
                  setValueNombres,
                  setErrorNombres,
                  "Escriba su/s nombre/s"
                )
              }
            />
            <FormHelperText error>{errorNombres}</FormHelperText>
          </Box>
          <Box sx={textFieldBox} component={FormGroup}>
            <TextField
              fullWidth
              required
              type="text"
              id="apellidos"
              label="Apellidos"
              sx={textField}
              value={valueApellidos}
              onChange={(e) =>
                handleNotEmpty(
                  e.target.value,
                  setValueApellidos,
                  setErrorApellidos,
                  "Escriba su/s apellido/s"
                )
              }
            />
            <FormHelperText error>{errorApellidos}</FormHelperText>
          </Box>
          <Box sx={textFieldBox} component={FormGroup}>
            <TextField
              fullWidth
              required
              type="text"
              id="rut"
              label="RUT"
              sx={textField}
              value={formatValueNumDocumento(valueRut)}
              onChange={(e) => handleRUTChange(e.target.value)}
            />
            <FormHelperText error>{errorRut}</FormHelperText>
          </Box>
          <Box sx={textFieldBox} component={FormGroup}>
            <TextField
              fullWidth
              required
              type="email"
              id="email"
              label="Email"
              sx={textField}
              value={valueCorreo}
              onChange={(e) => handleMailChange(e.target.value)}
            />
            <FormHelperText error>{errorCorreo}</FormHelperText>
          </Box>
          <Box sx={textFieldBox} component={FormGroup}>
            <TextField
              fullWidth
              required
              type="password"
              id="pass"
              label="Constraseña"
              sx={textField}
              value={valuePass}
              onChange={(e) => handlePasswordStrong(e.target.value)}
            />
            <StrongMeter value={securityValue} />
            <FormHelperText error>{errorPass}</FormHelperText>
          </Box>
          <Box sx={textFieldBox} component={FormGroup}>
            <TextField
              fullWidth
              required
              type="password"
              id="passValidation"
              label="Confirma la constraseña"
              sx={textField}
              value={valuePassValidation}
              onChange={(e) => handlePasswordStrong2(e.target.value)}
            />
            <FormHelperText error>{errorPassValidation}</FormHelperText>
          </Box>
        </Box>

        <Box sx={col}>
          <Box sx={textFieldBox} component={FormGroup}>
            <CustomSelect
              req={true}
              label="Sexo"
              fontWeightValue={400}
              value={valueSexo}
              setValue={setValueSexo}
              errorText={valueSexo ? "" : errorSexo}
            >
              {listaSexo}
            </CustomSelect>
          </Box>
          <Box sx={textFieldBox} component={FormGroup}>
            <TextField
              fullWidth
              required
              type="text"
              id="direccion"
              label="Dirección"
              sx={textField}
              value={valueDireccion}
              onChange={(e) =>
                handleNotEmpty(
                  e.target.value,
                  setValueDireccion,
                  setErrorDireccion,
                  "Escriba su direccion"
                )
              }
            />
          </Box>
          <Box sx={textFieldBox} component={FormGroup}>
            <CustomSelect
              req={true}
              label="Región"
              fontWeightValue={400}
              value={valueRegion}
              setValue={setValueRegion}
              errorText={valueRegion ? "" : errorRegion}
            >
              {listaRegiones}
            </CustomSelect>
          </Box>
          <Box sx={textFieldBox} component={FormGroup}>
            <CustomSelect
              disabled={valueRegion === ""}
              req={true}
              label="Comuna"
              fontWeightValue={400}
              value={valueComuna}
              setValue={setValueComuna}
              errorText={valueComuna ? "" : errorComuna}
            >
              {listaComunas.find((obj) => obj.region === valueRegion).comunas}
            </CustomSelect>
          </Box>
          <Box sx={textFieldBox} component={FormGroup}>
            <Box sx={textFieldBoxTel}>
              <TextField sx={textFieldTelLeft} fullWidth disabled label="+56" />
              <TextField
                sx={textFieldTelRight}
                fullWidth
                required
                id="telefono"
                label="Telefono"
                type="tel"
                value={valueTelefono.replace("+56", "")}
                onChange={(e) => handleTelChange(e.target.value)}
              />
            </Box>
            <FormHelperText error>{errorTelefono}</FormHelperText>
          </Box>
          {cliente ? null : (
            <Box sx={textFieldBox} component={FormGroup}>
              <CustomSelect
                req={true}
                label="Cargo"
                fontWeightValue={400}
                value={valueCargo}
                setValue={setValueCargo}
                errorText={valueCargo ? "" : errorCargo}
              >
                {listaCargos}
              </CustomSelect>
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={buttonBox}>
        {backButton ? (
          <Button sx={textbutton} variant="text" onClick={handleBack}>
            Volver
          </Button>
        ) : null}
        <Button sx={button} variant="contained" disabled={!continueValue} onClick={handleRegistrar}>
          {confirmText}
        </Button>
      </Box>
    </Box>
  );
}
