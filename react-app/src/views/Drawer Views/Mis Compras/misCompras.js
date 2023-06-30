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
  Button,
} from "@mui/material";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import CssBaseline from "@mui/material/CssBaseline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import PersonIcon from "@mui/icons-material/Person";

import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BentoIcon from "@mui/icons-material/Bento";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SetMealIcon from "@mui/icons-material/SetMeal";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import TapasIcon from "@mui/icons-material/Tapas";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { pedidos } from "../../../controller/testData";
import { headCellsPedidos } from "../../../controller/listas";
import { littleSizeFunc } from "../../../controller/windowSize";
import CustomTable from "../common/customTable";

export default function MisCompras() {
  const littleSize = littleSizeFunc();
  const [currentPedidos, setCurrentPedidos] = useState([]);

  useEffect(() => {
    pedidos.forEach((compra) => {
      compra.id = typeof compra.id === "string" ? compra.id : `#${compra.id}`;
      compra.estado =
        compra.estado === 0
          ? "Preparando"
          : compra.estado === 1
          ? "En camino"
          : compra.estado === 2
          ? "Entregado"
          : compra.estado === 3
          ? "Cancelado"
          : compra.estado;
      compra.total =
        typeof compra.total === "string" ? compra.total : `$${compra.total}`;
    });
    setCurrentPedidos(pedidos);
  }, []);

  /* CSS */
  const contenido = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    gap: "44px",
  };

  return (
    <Box sx={contenido}>
      <CustomTable
        headCells={headCellsPedidos}
        rows={currentPedidos}
        setRows={setCurrentPedidos}
        variant="cliente"
      />
    </Box>
  );
}
