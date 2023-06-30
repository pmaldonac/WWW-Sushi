import React, { useState, useEffect } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";

/* ICONS */
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

/* CUSTOM DATA */

// const actionButtonWidthHeight = "1.9517vmin";
const actionButtonWidthHeight = "15px";

export default function ActionButtonsCell(props) {
  const [trabajadores, setTrabajadores] = useState();
  const [tickets, setTickets] = useState();
  const [documentos, setDocumentos] = useState();
  const navigate = useNavigate();
  const {
    variant,
    linea,
    setOpenDeleteModal,
  } = props;

  /* TRABAJADORES ACTION BUTTONS HANDLERS */
  // const handleEditModal = (e) => {
  //   setOpenEditModal(true);
  //   setLineaSeleccionada(linea);
  // };

  // const handleExtendModal = (e) => {
  //   setOpenExtenderModal(true);
  //   setLineaSeleccionada(linea);
  // };

  // const handleListarDocumentacion = () => {
  //   setLineaSeleccionada(linea);
  // };

  const handleDelete = () => {
    setOpenDeleteModal(true);
  };

  /* DOCUMENTO ACTION BUTTONS HANDLERS */
  // const handleSubirDocModal = (e) => {
  //   setOpenSubirDocModal(true);
  //   setLineaSeleccionada(linea);
  // };

  // const handleSubirMultipleDocModal = (e) => {
  //   setOpenSubirMultipleDocsModal(true);
  //   setLineaSeleccionada(linea);
  // };

  // const handlePDFModal = (e) => {
  //   setOpenPDFViewModal(true);
  //   setLineaSeleccionada(linea);
  // };

  // const handleOpenErrorModal = (e) => {
  //   setOpenErrorModal(true);
  //   setLineaSeleccionada(linea);
  // };

  /* CLIENTE ACTION BUTTONS HANDLERS */
  // const handleTrabajadores = (e) => {
  //   setSelectedCliente(linea);
  //   navigate("Trabajadores");
  // };

  // const handleDatosCliente = (e) => {
  //   setSelectedCliente(linea);
  //   navigate("Datos cliente");
  // };

  /* TICKETS ACTION BUTTONS HANDLERS */
  // const handleOpenTicketModal = (e) => {
  //   setOpenTicketModal(true);
  //   setLineaSeleccionada(linea);
  // };

  /* CSS */
  const cellBox = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    gap: "5px",
    margin: "0px",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const buttonBox = {
    width: "100%",
    height: "100%",
  };
  const buttonHiddenBox = {
    display: "none",
    width: "100%",
    height: "100%",
  };
  const blueButton = {
    width: "fit-content",
    height: "fit-content",
    minWidth: actionButtonWidthHeight,
    minHeight: actionButtonWidthHeight,
    padding: "0px",
    borderRadius: "5px",
    border: "2px solid",
    "&:hover": {
      border: "2px solid",
      opacity: "0.8",
    },
  };
  const redButton = {
    width: "fit-content",
    height: "fit-content",
    minWidth: actionButtonWidthHeight,
    minHeight: actionButtonWidthHeight,
    padding: "0px",
    borderRadius: "5px",
    border: "1.5px solid #DE5C5C",
    color: "#DE5C5C",
    "&:hover": {
      color: "#DE5C5C",
      border: "1px solid #DE5C5C",
    },
  };
  const icons = {
    width: actionButtonWidthHeight,
    height: actionButtonWidthHeight,
  };

  /* VIEWS */
  // useEffect(() => {
  //   if (linea.estado) {
  //     setTrabajadores(
  //       /validado/i.test(linea.estado.props.state) ||
  //         /procesando/i.test(linea.estado.props.state) ? (
  //         <Box sx={cellBox}>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               onClick={handleEditModal}
  //             >
  //               <EditOutlinedIcon />
  //             </Button>
  //           </Box>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               component={Link}
  //               to="Listar documentacion"
  //               onClick={handleListarDocumentacion}
  //             >
  //               <FormatListBulletedOutlinedIcon />
  //             </Button>
  //           </Box>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               component={Link}
  //               to={samplePDF}
  //               target={samplePDF}
  //               download={
  //                 linea.documento ? `${linea.documento}` : `${linea.nombre}`
  //               }
  //             >
  //               <FileDownloadOutlinedIcon />
  //             </Button>
  //           </Box>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               onClick={handleExtendModal}
  //             >
  //               <CalendarMonthOutlinedIcon />
  //             </Button>
  //           </Box>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={redButton}
  //               onClick={handleBajaModal}
  //             >
  //               <DeleteOutlineOutlinedIcon />
  //             </Button>
  //           </Box>
  //         </Box>
  //       ) : /rechazado/i.test(linea.estado.props.state) ? (
  //         <Box sx={cellBox}>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               onClick={handleEditModal}
  //             >
  //               <EditOutlinedIcon />
  //             </Button>
  //           </Box>
  //           <Box sx={buttonBox}>
  //             <Button variant="outlined" sx={blueButton} onClick={handleOpenErrorModal}>
  //               <ErrorOutlineOutlinedIcon />
  //             </Button>
  //           </Box>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={redButton}
  //               onClick={handleBajaModal}
  //             >
  //               <DeleteOutlineOutlinedIcon />
  //             </Button>
  //           </Box>
  //         </Box>
  //       ) : /pendiente/i.test(linea.estado.props.state) ? (
  //         <Box sx={cellBox}>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               onClick={handleEditModal}
  //             >
  //               <EditOutlinedIcon />
  //             </Button>
  //           </Box>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={redButton}
  //               onClick={handleBajaModal}
  //             >
  //               <DeleteOutlineOutlinedIcon />
  //             </Button>
  //           </Box>
  //         </Box>
  //       ) : null
  //     );

  //     setDocumentos(
  //       /analizando/i.test(linea.estado.props.state) ? (
  //         <Box sx={cellBox}>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               onClick={handlePDFModal}
  //             >
  //               <SearchOutlinedIcon />
  //             </Button>
  //           </Box>
  //         </Box>
  //       ) : /sin subir/i.test(linea.estado.props.state) ? (
  //         <Box sx={cellBox}>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               onClick={setOpenSubirMultipleDocsModal ? handleSubirMultipleDocModal : handleSubirDocModal}
  //             >
  //               <FileUploadOutlinedIcon />
  //             </Button>
  //           </Box>
  //         </Box>
  //       ) : /aprobado/i.test(linea.estado.props.state) ? (
  //         <Box sx={cellBox}>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               component={Link}
  //               to={samplePDF}
  //               target={samplePDF}
  //               download={
  //                 linea.documento ? `${linea.documento}` : `${linea.nombre}`
  //               }
  //             >
  //               <FileDownloadOutlinedIcon />
  //             </Button>
  //           </Box>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               onClick={handlePDFModal}
  //             >
  //               <SearchOutlinedIcon />
  //             </Button>
  //           </Box>
  //         </Box>
  //       ) : (
  //         <Box sx={cellBox}>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               onClick={handleSubirDocModal}
  //             >
  //               <FileUploadOutlinedIcon />
  //             </Button>
  //           </Box>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               onClick={handlePDFModal}
  //             >
  //               <SearchOutlinedIcon />
  //             </Button>
  //           </Box>
  //           <Box sx={buttonBox}>
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               onClick={handleOpenErrorModal}
  //             >
  //               <ErrorOutlineOutlinedIcon />
  //             </Button>
  //           </Box>
  //         </Box>
  //       )
  //     );

  //     setTickets(
  //       <Box sx={cellBox}>
  //         <Box sx={buttonBox}>
  //           {/abierto/i.test(linea.estado.props.state) ? (
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               onClick={handleOpenTicketModal}
  //             >
  //               <SyncAltOutlinedIcon />
  //             </Button>
  //           ) : (
  //             <Button
  //               variant="outlined"
  //               sx={blueButton}
  //               onClick={handleOpenTicketModal}
  //             >
  //               <SearchOutlinedIcon />
  //             </Button>
  //           )}
  //         </Box>
  //       </Box>
  //     );
  //   }
  // }, [linea]);

  const cliente = /preparando/i.test(linea.estado.props.state) ? (
    <Box sx={cellBox}>
      <Box sx={buttonBox}>
        <Button variant="outlined" sx={blueButton} onClick={(e) => handleDelete(e)}>
          <DeleteOutlineOutlinedIcon />
        </Button>
      </Box>
    </Box>
  ) : null;

  return cliente;

  // return variant === "tra"
  //   ? trabajadores
  //   : variant === "documentos"
  //   ? documentos
  //   : variant === "cliente"
  //   ? cliente
  //   : variant === "tickets"
  //   ? tickets
  //   : null;
}
