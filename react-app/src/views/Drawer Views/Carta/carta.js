import React, { useState, useMemo, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  IconButton,
  ListSubheader,
  Paper,
  Card,
  Tooltip,
  Collapse,
  Button,
} from "@mui/material";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { sushis } from "../../../controller/testData";
import { littleSizeFunc } from "../../../controller/windowSize";

const GET_PRODUCTOS = gql`
  query getProductos {
    getProductos {
      _id
      nombre
      foto
      disponibilidad
      precio
      ingredientes
      descuento
      tipo_producto
    }
  }
`;

export default function Carta() {
  const { data, loading, error } = useQuery(GET_PRODUCTOS);
  console.log(JSON.stringify(data));
  console.log(JSON.stringify(loading));
  console.log(JSON.stringify(error));
  const [cardExpanded, setCardExpanded] = useState(null);
  const littleSize = littleSizeFunc();

  const handleExpandCard = (e, index) => {
    if (cardExpanded === index) {
      setCardExpanded(null);
    } else {
      setCardExpanded(index);
    }
  };

  /* CSS */
  const cartaStyle = {
    height: "fit-content",
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: littleSize ? "center" : "flex-start",
    alignItems: "center",
    gap: littleSize ? "11px 11px" : "33px 50px",
  };
  const card = {
    background: "#eb5e69",
    height: littleSize ? "30vh" : "300px",
    width: littleSize ? "43vw" : "255px",
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
    padding: littleSize ? "1vh 3px 1vh 3px" : "20px 3px 20px 3px",
    justifyContent: "flex-end",
    gap: littleSize ? "0px" : "5%",
  };
  const ingredientesText = {
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

  return (
    <Box sx={cartaStyle}>
      {sushis.map((sushi, index) => (
        <Card sx={card}>
          {/* <Card sx={pestanaStyle}></Card> */}
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
            <Box sx={ingredienteBox}>
              <List>
                <Typography sx={ingredientesText}>Ingredientes:</Typography>
                <ul>
                  {sushi.ingredientes.split(",").map((ingrediente) => (
                    <Typography sx={ingredientesText}>
                      <li>{ingrediente}</li>
                    </Typography>
                  ))}
                </ul>
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
              <Typography sx={precio}>{sushi.precio}</Typography>
            </Box>
            <IconButton>
              <AddCircleIcon sx={icon} />
            </IconButton>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
