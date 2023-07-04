import React, { useEffect, useState, useContext } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";

import {
  IconButton,
  Button,
  Typography,
  Box,
  Modal,
  TextField,
  FormHelperText,
  Backdrop,
  CircularProgress,
} from "@mui/material";

/* ICONS */
import CloseIcon from "@mui/icons-material/Close";

import { littleSizeFunc } from "../../../controller/windowSize";
import logo from "../../../imgs/logo_compacto.png";
import InfoPerfil from "../common/infoPerfil";

const transition = "500ms";

const LOGIN = gql`
  mutation Mutation($user: String!, $passw: String!) {
    loginUsuario(user: $user, passw: $passw) {
      data {
        password
        rol
        username
        _id
      }
      error
      status
    }
  }
`;

export default function AuthModal(props) {
  const { openModal, setOpenModal } = props;
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const { user, setUser } = useContext(UserContext);
  // const { data, loading, error } = useQuery(LOGIN, {
  //   variables: { idUsuario: user.id },
  // });
  const [continueValue, setContinueValue] = useState(false);
  const [currentValueEmail, setCurrentValueEmail] = useState("");
  const [currentValuePass, setCurrentValuePass] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const [stepCount, setStepCount] = useState(0);

  const littleSize = littleSizeFunc();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && data) {
      if (data.loginUsuario.status === 200) {
        navigate("/");
        setOpenModal(false);
        setUser({
          id: data.loginUsuario.data._id,
          rol: Number(data.loginUsuario.data.rol),
          username: data.loginUsuario.data.username,
          password: data.loginUsuario.data.password,
        });
      } else if (data.loginUsuario.status === 400) {
        setErrorEmail(data.loginUsuario.error);
        setErrorPass("");
      } else if (data.loginUsuario.status === 401) {
        setErrorEmail("");
        setErrorPass(data.loginUsuario.error);
      }
    }
    if (loading) {
      <Backdrop sx={{ color: "#fff", zIndex: 20000 }} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>;
    }
  }, [loading]);

  const handleCloseModal = () => {
    setContinueValue(false);
    setOpenModal(false);
    setStepCount(0);
  };

  const handleContinue = () => {
    setOpenModal(false);
  };

  const handleLogin = (e) => {
    login({
      variables: { user: currentValueEmail, passw: currentValuePass },
    });
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
        {stepCount === 0 ? (
          <Box sx={contenido}>
            <Box sx={textFieldBox}>
              <TextField
                fullWidth
                required
                type="email"
                id="email"
                label="Email"
                sx={textField}
                value={currentValueEmail}
                onChange={(e) => setCurrentValueEmail(e.target.value)}
              />
              <FormHelperText error>{errorEmail}</FormHelperText>
            </Box>
            <Box sx={textFieldBox}>
              <TextField
                fullWidth
                required
                type="password"
                id="constraseña"
                label="Constraseña"
                sx={textField}
                value={currentValuePass}
                onChange={(e) => setCurrentValuePass(e.target.value)}
              />
              <FormHelperText error>{errorPass}</FormHelperText>
            </Box>
            {/* <Typography
              component={Link}
              to="../restablecer"
              sx={ingresar_contrasena_olvidar_text}
            >
              ¿Olvidaste tu contraseña?
            </Typography> */}
            <Button sx={button} variant="contained" onClick={handleLogin}>
              Iniciar Sesión
            </Button>
            <Button sx={textbutton} variant="text" onClick={handleRegistrarse}>
              Regístrate
            </Button>
          </Box>
        ) : (
          <InfoPerfil
            confirmText="Registrar"
            backButton
            setStepCount={setStepCount}
            setOpenModal={setOpenModal}
          >
            ¡Rellena los campos y recibe las mejores ofertas de sushi!
          </InfoPerfil>
        )}
      </Box>
    </Modal>
  );
}
