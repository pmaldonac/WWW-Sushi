import React, { useState, useMemo, useEffect } from "react";
import {
  InputAdornment,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  Box,
  Typography,
  Button,
  TableRow,
  TableSortLabel,
  TextField,
  Card,
  SvgIcon,
  Modal,
} from "@mui/material";

/* ICONS */
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as EmptyFileIcon } from "../../../imgs/svg/emptyFile.svg";

/* CUSTOM LIBRARIES */
import StateCell from "../common/stateCell";
import ActionButtonsCell from "../common/actionButttonsCell";
import CancelModal from "../Mis Compras/cancelModal";
const transition = "500ms";

const states = {
  preparando: 1,
  "en camino": 2,
  entregado: 3,
  cancelado: 4,
};

function descendingComparator(a, b, orderBy) {
  if (orderBy === "estado") {
    const b_estado = states[b.estado.props.state.toLowerCase()];
    const a_estado = states[a.estado.props.state.toLowerCase()];
    if (b_estado < a_estado) {
      return -1;
    }
    if (b_estado > a_estado) {
      return 1;
    }
    return 0;
  } else {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function CustomTable(props) {
  const {
    headCells,
    rows,
    setRows,
    search = false,
    wide = false,
    variant,
    setLineaSeleccionada,
  } = props;
  const [searchColor, setSearchColor] = useState("#D9D9D9");
  const [labelMarginSearch, setLabelMarginSearch] = useState(30);
  const [focusedSearch, setFocusedSearch] = useState(false);
  const [currentValueSearch, setCurrentValueSearch] = useState("");
  const [initialRows, setInitialRows] = useState(rows);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  if (rows) {
    for (var i = 0; i < rows.length; i++) {
      let estado = rows[i]["estado"];
      if (typeof estado === "string") {
        rows[i]["estado"] = <StateCell state={`${estado}`} />;
      }
      rows[i]["acciones"] = (
        <ActionButtonsCell
          variant={variant}
          linea={rows[i]}
          setOpenDeleteModal={setOpenDeleteModal}
        />
      );
    }
  }

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  useEffect(() => {
    if (currentValueSearch) {
      const filterRows = initialRows.filter((obj) => {
        for (let i = 0; i < headCells.length; i++) {
          var exists = false;
          if (headCells[i].id === "estado") {
            exists = obj[headCells[i].id].props.state
              .toString()
              .toLowerCase()
              .includes(currentValueSearch.toLowerCase());
          } else {
            exists = obj[headCells[i].id]
              .toString()
              .toLowerCase()
              .includes(currentValueSearch.toLowerCase());
          }
          if (exists) {
            return exists;
          }
        }
        return false;
      });
      setRows(filterRows);
    } else {
      setRows(initialRows);
    }
  }, [currentValueSearch]);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };
  const handleFocus = (state) => {
    setFocusedSearch(state);
    if (currentValueSearch !== "" || state) {
      setLabelMarginSearch(0);
      setSearchColor("");
    } else {
      setLabelMarginSearch(30);
      setSearchColor("#D9D9D9");
    }
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /* CSS */
  const contenido = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    gap: "1vh",
    transition: transition,
  };
  const searchFieldBox = {
    display: "flex",
    flexDirection: "column",
    padding: "0px",
  };
  const searchField = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    height: "4.94vh",
    width: "100%",
    ".MuiOutlinedInput-root": {
      display: "flex",
      borderRadius: "20px",
      background: "transparent",
    },
  };
  const searchLabel = {
    transition: transition,
    marginLeft: labelMarginSearch,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "150%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: searchColor,
  };
  const tableBox = {
    height: "fit-content",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    // gap: "1vh",
    transition: transition,
  };
  const tableCard = {
    backgroundColor: "transparent",
    height: "fit-content",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "11px",
    transition: transition,
    overflow: "hidden",
    borderRadius: "20px",
  };
  const table = {
    borderRadius: "20px",
    transition: transition,
  };
  const titleRow = {
    background: "#E84855",
    color: "#FCFBFB",
    height: "fit-content",
  };
  const titleCell = {
    textAlign: "center",
    color: "#FCFBFB",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "150%",
    width: "auto",
    minWidth: "fit-content",
    height: "2.82vh",
    padding: "0.94vh 0.6944vw",
  };
  const titleCellSortIcon = {
    height: "fit-content",
    color: "#FCFBFB",
    "&.MuiTableSortLabel-root": {
      color: "#FCFBFB",
      ".MuiTableSortLabel-icon": {
        color: "#FCFBFB",
        transition: transition,
      },
    },
  };
  const tableBody = {
    backgroundColor: "#FCFCFC",
    opacity: 0.8,
  };
  const cell = {
    height: "fit-content",
    textAlign: "justify",
    width: "auto",
    minWidth: "fit-content",
    padding: wide ? "28px 28px" : "6px 6px",
  };
  const cellText = {
    height: "fit-content",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    width: "auto",
    minWidth: "fit-content",
    whiteSpace: wide ? "normal" : "nowrap",
  };
  const tableFooterBox = {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  };
  const tableFooter = {
    width: "100%",
    ".MuiTablePagination-toolbar": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      ".css-12ovgqq-MuiInputBase-root-MuiTablePagination-select": {
        marginLeft: "8px",
        marginRight: "40px",
      },
    },
  };
  const emptyRow = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "fit-content",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    color: "#818181",
    padding: "11px",
  };
  const emptyIcon = {
    height: "150px",
    width: "auto",
  };

  return (
    <Box sx={contenido}>
      {search ? (
        <Box sx={searchFieldBox}>
          <TextField
            fullWidth
            size="small"
            sx={searchField}
            label="Buscar"
            onFocus={() => handleFocus(true)}
            onBlur={() => handleFocus(false)}
            value={currentValueSearch}
            onChange={(e) => setCurrentValueSearch(e.target.value)}
            InputProps={{
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              shrink: focusedSearch || currentValueSearch,
              style: searchLabel,
            }}
          />
        </Box>
      ) : null}
      <Box sx={tableBox}>
        <Card sx={tableCard}>
          <TableContainer sx={table}>
            <Table>
              <TableHead>
                <TableRow sx={titleRow}>
                  {headCells.map((title) => (
                    <TableCell
                      sx={titleCell}
                      sortDirection={orderBy === title.id ? order : false}
                    >
                      <TableSortLabel
                        sx={titleCellSortIcon}
                        active={
                          title.id === "acciones" ? false : orderBy === title.id
                        }
                        direction={orderBy === title.id ? order : "asc"}
                        onClick={createSortHandler(title.id)}
                        hideSortIcon={true}
                      >
                        {title.label}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody sx={tableBody}>
                {visibleRows.length > 0 ? (
                  visibleRows.map((r) => (
                    <TableRow>
                      {headCells.map((title) => (
                        <TableCell sx={cell}>
                          {typeof r[`${title.id}`] === "string" || "numeric" ? (
                            <Typography sx={cellText}>
                              {r[`${title.id}`]}
                            </Typography>
                          ) : (
                            r[`${title.id}`]
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell align="center" colSpan={headCells.length}>
                      <Box sx={emptyRow}>
                        <SvgIcon sx={emptyIcon}>
                          <EmptyFileIcon />
                        </SvgIcon>
                        No hay compras registradas
                      </Box>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
        <Box sx={tableFooterBox}>
          <TablePagination
            sx={tableFooter}
            labelRowsPerPage=""
            labelDisplayedRows={() => {}}
            rowsPerPageOptions={[]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Box>
      <CancelModal
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
      />
    </Box>
  );
}