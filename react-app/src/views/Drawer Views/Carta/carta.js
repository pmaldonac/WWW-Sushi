import React, { useState, useMemo, useEffect } from "react";
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

export default function Carta() {
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
  };
  const title = {
    fontWeight: "bold",
    letterSpacing: "1px",
    lineHeight: "170%",
  };
  const icon = {
    height: "38px",
    width: "38px",
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
              <AddCircleIcon sx={icon} />
            </IconButton>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
