import React, { useState, useMemo, useEffect } from "react";
import {
  IconButton,
  Card,
  Button,
  Tooltip,
  Collapse,
  List,
} from "@mui/material";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { carrito } from "../../../controller/testData";
import { littleSizeFunc } from "../../../controller/windowSize";
import CancelModal from "../Mis Compras/cancelModal";
import VaciarCarritoModal from "./vaciarCarritoModal";

export default function Carrito() {
  const littleSize = littleSizeFunc();
  const [openVaciarModal, setOpenVaciarModal] = useState(false);
  const [cardExpanded, setCardExpanded] = useState(null);

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

  /* CSS */
  const contenido = {
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    width: "100%",
    justifyContent: "space-between",
    gap: "44px",
  };
  const cartaStyle = {
    // width: "fit-content",
    // height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: littleSize ? "center" : "flex-start",
    alignItems: "center",
    gap: "33px 50px",
  };
  const card = {
    background: "#eb5e69",
    height: littleSize ? "30vh" : "300px",
    width: littleSize ? "50vw" : "255px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // gap: '11px',
  };
  const imageCollapse = {
    transition: "500ms",
    height: "250px",
    width: "100%",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    background: "#262626",
    justifyContent: "center",
  };
  const imageBox = {
    height: "250px",
    width: "100%",
    background: "#262626",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const imgStyle = {
    height: "100%",
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
    height: "250px",
    width: "100%",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#FFFFFF",
    padding: "20px 3px 20px 3px",
    justifyContent: "flex-end",
    gap: "5%",
  };
  const retractButton = {
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
    padding: "3px 0px",
  };
  const title = {
    fontWeight: "bold",
    // fontSize: "16px",
    letterSpacing: "1px",
    lineHeight: "170%",
  };
  const icon = {
    height: "38px",
    width: "38px",
    color: "#FFFFFF",
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

  return (
    <Box sx={contenido}>
      <Box sx={cartaStyle}>
        {carrito.map((sushi, index) => (
          <Card sx={card}>
            <Tooltip
              arrow
              disableInteractive
              title="Click para ver detalles"
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
                    src={sushi.img}
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
                <List>
                  {sushi.ingredientes.split(",").map((ingrediente) => (
                    <Typography>- {ingrediente}</Typography>
                  ))}
                </List>
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
                <Typography sx={title}>{sushi.title}</Typography>
                <Typography>{sushi.precio}</Typography>
              </Box>
              <IconButton>
                <DeleteIcon sx={icon} />
              </IconButton>
            </Box>
          </Card>
        ))}
      </Box>
      <Box sx={buttonBox}>
        <Button sx={textbutton} variant="text" onClick={handleVaciar}>
          Vaciar Carrito
        </Button>
        <Button sx={button} variant="contained">
          Ir a pagar
        </Button>
      </Box>
      <VaciarCarritoModal
        openModal={openVaciarModal}
        setOpenModal={setOpenVaciarModal}
      />
    </Box>
  );
}
