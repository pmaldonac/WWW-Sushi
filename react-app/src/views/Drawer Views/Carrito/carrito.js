import React, { useState, useMemo, useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { UserContext } from "../../../App";
import {
  IconButton,
  Card,
  Button,
  Tooltip,
  Collapse,
  List,
  Typography,
  Box,
} from "@mui/material";
import MuiLink from "@mui/material/Link";
import LoadingSkeleton from "@mui/material/Skeleton";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { carrito } from "../../../controller/testData";
import { littleSizeFunc } from "../../../controller/windowSize";
import VaciarCarritoModal from "./vaciarCarritoModal";
import DeleteModal from "./deleteModal";

const GET_CARRO = gql`
  query Query($idUsuario: String!) {
    getCarroUsuario(id_usuario: $idUsuario) {
      _id
      total
      producto {
        _id
        descuento
        disponibilidad
        foto
        ingredientes
        nombre
        precio
      }
    }
  }
`;

export default function Carrito(props) {
  const { user, setUser } = useContext(UserContext);
  const { data, loading, error } = useQuery(GET_CARRO, {
    variables: { idUsuario: user.id },
  });

  const littleSize = littleSizeFunc();
  const [openVaciarModal, setOpenVaciarModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [cardExpanded, setCardExpanded] = useState(null);
  const [currentRollName, setCurrentRollName] = useState("");

  const handleExpandCard = (e, index) => {
    if (cardExpanded === index) {
      setCardExpanded(null);
    } else {
      setCardExpanded(index);
    }
  };

  const handleVaciar = () => {
    setOpenVaciarModal(true);
  };

  const handleDelete = (e, rollName) => {
    setCurrentRollName(rollName);
    setOpenDeleteModal(true);
  };

  const idExtractor = (url) => {
    const id = url.split("d/")[1].split("/")[0];
    return id;
  };

  /* CSS */
  const contenido = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    gap: "44px",
  };
  const cartaStyle = {
    height: "fit-content",
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: littleSize ? "center" : "flex-start",
    alignItems: "center",
    gap: littleSize ? "11px 25px" : "33px 50px",
  };
  const card = {
    background: "#eb5e69",
    height: littleSize ? "30vh" : "300px",
    width: littleSize ? "40vw" : "255px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const imageCollapse = {
    transition: "500ms",
    height: littleSize ? "22.5vh" : "250px",
    width: "100%",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    background: "#262626",
    justifyContent: "center",
  };
  const imageBox = {
    height: littleSize ? "22.5vh" : "250px",
    width: "100%",
    background: "#262626",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const imgStyle = {
    height: littleSize ? "80%" : "100%",
    width: "auto",
    alignSelf: "center",
  };
  const ingredienteCollapse = {
    transition: "500ms",
    width: "100%",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const ingredienteBox = {
    height: littleSize ? "22.5vh" : "250px",
    width: "100%",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#FFFFFF",
    padding: littleSize ? "1vh 3px 1vh 3px" : "20px 22px 20px 22px",
    justifyContent: "flex-end",
    gap: littleSize ? "0px" : "5%",
  };
  const ingredientesText = {
    textAlign: "center",
    fontSize: littleSize ? "12px" : "16px",
    lineHeight: littleSize ? "120%" : "",
  };
  const retractButton = {
    minHeight: "20px",
    height: "20%",
    width: "100%",
    color: "#FFFFFF",
  };
  const footerBox = {
    width: "100%",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3px 3px 3px 11px",
  };
  const titleBox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  const title = {
    fontSize: littleSize ? "80%" : "16px",
    fontWeight: "bold",
    letterSpacing: "1px",
    lineHeight: littleSize ? "100%" : "170%",
  };
  const precio = {
    fontSize: littleSize ? "80%" : "16px",
  };
  const icon = {
    height: littleSize ? "30px" : "38px",
    width: littleSize ? "30px" : "38px",
    color: "#FFFFFF",
  };
  const totalText = {
    display: "flex",
    alignItems: "center",
    height: "100%",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
  };
  const buttonBox = {
    display: "flex",
    justifyContent: littleSize ? "center" : "flex-end",
    gap: "11px",
  };
  const button = {
    textTransform: "none",
    borderRadius: "10px",
    background: "#eb5e69",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "15px",
    padding: "8px 24px",
    "&:hover": {
      background: "#eb5e69",
    },
  };
  const textbutton = {
    textTransform: "none",
    fontFamily: "Poppins",
    borderRadius: "10px",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "15px",
    color: "#eb5e69",
    border: "2px solid #eb5e69",
    "&:hover": {
      background: "transparent",
    },
  };

  if (loading) {
    return (
      <LoadingSkeleton
        variant="rectangular"
        animation="pulse"
      ></LoadingSkeleton>
    );
  }

  return (
    <Box sx={contenido}>
      <Box sx={cartaStyle}>
        {data.getCarroUsuario.producto.map((sushi, index) => (
          <Card sx={card}>
            <Tooltip
              arrow
              disableInteractive
              title="Ingredientes"
              placement="top-start"
              enterDelay={500}
              followCursor
            >
              <Collapse
                collapsedSize="10%"
                easing="500ms"
                sx={imageCollapse}
                in={cardExpanded !== index}
                timeout="auto"
              >
                <Card sx={imageBox} onClick={(e) => handleExpandCard(e, index)}>
                  <Box
                    loading="lazy"
                    component="img"
                    src={`https://drive.google.com/uc?export=view&id=${idExtractor(
                      sushi.foto
                    )}`}
                    alt="Logo"
                    sx={imgStyle}
                  />
                </Card>
              </Collapse>
            </Tooltip>
            <Collapse
              easing="500ms"
              sx={ingredienteCollapse}
              in={cardExpanded === index}
              timeout="auto"
            >
              <Box
                sx={ingredienteBox}
                onClick={(e) => handleExpandCard(e, index)}
              >
                <Typography sx={ingredientesText}>
                  {" "}
                  {sushi.ingredientes}{" "}
                </Typography>
                <Button
                  sx={retractButton}
                  onClick={(e) => handleExpandCard(e, index)}
                >
                  <KeyboardArrowDownIcon />
                </Button>
              </Box>
            </Collapse>
            <Box sx={footerBox}>
              <Box sx={titleBox}>
                <Typography sx={title}>{sushi.nombre}</Typography>
                <Typography sx={precio}>{sushi.precio}</Typography>
              </Box>
              <IconButton>
                <DeleteIcon
                  sx={icon}
                  onClick={(e) => handleDelete(e, sushi.nombre)}
                />
              </IconButton>
            </Box>
          </Card>
        ))}
      </Box>
      <Box sx={buttonBox}>
        <Typography sx={totalText}>Total: {data.getCarroUsuario.total}</Typography>
        <Button sx={textbutton} variant="text" onClick={handleVaciar}>
          Vaciar Carrito
        </Button>
        <Button sx={button} variant="contained">
          Ir a pagar
        </Button>
      </Box>
      <DeleteModal
        rollName={currentRollName}
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
      />
      <VaciarCarritoModal
        openModal={openVaciarModal}
        setOpenModal={setOpenVaciarModal}
      />
    </Box>
  );
}
