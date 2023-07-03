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
