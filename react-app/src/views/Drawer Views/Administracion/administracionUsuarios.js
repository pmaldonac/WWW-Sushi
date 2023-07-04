import React, { useState, useMemo, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { UserContext } from "../../../App";
import { Button } from "@mui/material";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";

import { ordenes } from "../../../controller/testData";
import { headCellsUsuarios, cargoValues } from "../../../controller/listas";
import { littleSizeFunc } from "../../../controller/windowSize";
import CustomTable from "../common/customTable";
import AnadirUsuarioModal from "./anadirUsuarioModal";

const GET_USUARIOS = gql`
  query Query {
    getClientes {
      comuna
      correo
      direccion
      nombre
      region
      rut
      sexo
      telefono
      usuario {
        rol
      }
    }
  }
`;

export default function AdminUsuarios() {
  const { data, loading, error } = useQuery(GET_USUARIOS);

  const littleSize = littleSizeFunc();
  const [usuarios, setUsuarios] = useState([]);
  const [openNuevoModal, setOpenNuevoModal] = useState(false);

  useEffect(() => {
    if (!loading && data) {
      const us = JSON.parse(JSON.stringify(data.getClientes));
      us.forEach((cliente) => {
        cliente.cargo = cargoValues[cliente.usuario.rol];
      });
      setUsuarios(us);
    }
  }, [loading]);

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
        headCells={headCellsUsuarios}
        rows={usuarios}
        setRows={setUsuarios}
        variant="admin"
      />
      <Box sx={buttonBox}>
        <Button sx={button} variant="contained" onClick={handleNuevoModal}>
          Nuevo Usuario
        </Button>
      </Box>
      <AnadirUsuarioModal
        openModal={openNuevoModal}
        setOpenModal={setOpenNuevoModal}
      />
    </Box>
  );
}
