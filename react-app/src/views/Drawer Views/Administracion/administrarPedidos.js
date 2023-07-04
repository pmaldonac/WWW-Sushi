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

import { ordenes } from "../../../controller/testData";
import { headCellsOrdenesAdmin } from "../../../controller/listas";
import { littleSizeFunc } from "../../../controller/windowSize";
import CustomTable from "../common/customTable";

export default function AdminPedidos() {
  const littleSize = littleSizeFunc();
  const [currentPedidos, setCurrentPedidos] = useState([]);

  useEffect(() => {
    ordenes.forEach((compra) => {
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
    setCurrentPedidos(ordenes);
  }, []);

  /* CSS */
  const contenido = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    gap: "44px",
  };
  const buttonBox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: "11px 0px",
  };
  const button = {
    textTransform: "none",
    borderRadius: "10px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "15px",
    padding: "8px 24px",
  };

  return (
    <Box sx={contenido}>
      <CustomTable
        wide={false}
        headCells={headCellsOrdenesAdmin}
        rows={currentPedidos}
        setRows={setCurrentPedidos}
        variant="admin"
      />
      {/* <Box sx={buttonBox}>
        <Button sx={button} variant="contained">
          Imprimir seleccion
        </Button>
      </Box> */}
    </Box>
  );
}
