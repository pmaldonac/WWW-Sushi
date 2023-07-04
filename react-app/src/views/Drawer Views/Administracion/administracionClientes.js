import React, { useState, useMemo, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { UserContext } from "../../../App";
import { Button, Box } from "@mui/material";
import MuiLink from "@mui/material/Link";

import { ordenes } from "../../../controller/testData";
import { headCellsClientes, cargoValues} from "../../../controller/listas";
import { littleSizeFunc } from "../../../controller/windowSize";
import CustomTable from "../common/customTable";
import AnadirClienteModal from "./anadirClienteModal";

const GET_CLIENTES = gql`
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

export default function AdminClientes() {
  const { data, loading, error } = useQuery(GET_CLIENTES);

  const littleSize = littleSizeFunc();
  const [clientes, setClientes] = useState([]);
  const [openNuevoModal, setOpenNuevoModal] = useState(false);

  useEffect(() => {
    if (!loading && data) {
      setClientes(data.getClientes);
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
        headCells={headCellsClientes}
        rows={clientes}
        setRows={setClientes}
        variant="admin"
      />
      <Box sx={buttonBox}>
        <Button sx={button} variant="contained" onClick={handleNuevoModal}>
          Nuevo Cliente
        </Button>
      </Box>
      <AnadirClienteModal
        openModal={openNuevoModal}
        setOpenModal={setOpenNuevoModal}
      />
    </Box>
  );
}
