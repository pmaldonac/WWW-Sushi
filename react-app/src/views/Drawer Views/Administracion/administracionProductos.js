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
import { headCellsProductos } from "../../../controller/listas";
import { littleSizeFunc } from "../../../controller/windowSize";
import CustomTable from "../common/customTable";
import AnadirProductoModal from "./anadirProductoModal";

export default function AdminProductos() {
  const littleSize = littleSizeFunc();
  const [currentPedidos, setCurrentPedidos] = useState([]);
  const [openNuevoModal, setOpenNuevoModal] = useState(false);

  const handleNuevoModal = () => {
    setOpenNuevoModal(true);
  };

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
        headCells={headCellsProductos}
        rows={currentPedidos}
        setRows={setCurrentPedidos}
        variant="admin"
      />
      <Box sx={buttonBox}>
        <Button sx={button} variant="contained" onClick={handleNuevoModal}>
          Nuevo Producto
        </Button>
      </Box>
      <AnadirProductoModal
        openModal={openNuevoModal}
        setOpenModal={setOpenNuevoModal}
      />
    </Box>
  );
}
