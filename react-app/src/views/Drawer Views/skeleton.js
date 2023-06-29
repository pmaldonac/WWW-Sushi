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

import { Outlet, Link, useLocation } from "react-router-dom";

import React, { useState } from "react";

import { littleSizeFunc } from "../../controller/windowSize";
import logo from "../../imgs/logo_text.png";
import tabla from "../../imgs/tabla.png";

import AnimatePetals from "../animations/sakura";
import AuthModal from "./Auth/authModal";
import RegistrarModal from "./Auth/registrarModal";

const transition = "500ms";

export default function Skeleton() {
  const { pathname } = useLocation();
  const path = pathname.replace("%20", " ").split("/");
  path.shift();
  const [open, setOpen] = React.useState(true);
  const [sectionClicked, setSectionClicked] = useState(path[0]);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [openRegistrarModal, setOpenRegistrarModal] = useState(false);

  const littleSize = littleSizeFunc();

  const handleSwitchDrawer = () => {
    setOpen(!open);
  };

  const sectionClick = (event, section) => {
    setSectionClicked(section);
  };

  const handleAuth = (event) => {
    setOpenAuthModal(true);
  };

  const inicio = {
    // position: "relative",
    height: "100vh",
    width: "100vw",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    display: "grid",
    gridTemplateColumns: "12fr",
    backgroundColor: "transparent",
    transition: transition,
    overflow: "hidden",
  };
  const appBar = {
    zIndex: 1050,
    // flex: "0 0 20%",
    height: "13vh",
    width: "100vw",
    overflow: "hidden",
    transition: transition,
    borderRadius: "0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E84855",
    padding: "0px 1vw",
    gap: "11px",
  };
  const toolbar = {
    height: "fit-content",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E84855",
  };
  const appBarButtonsBox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "50%",
    gap: "11px",
  };
  const appBarButton = {
    minWidth: "40px",
    minHeight: "40px",
    height: "fit-content",
    width: "fit-content",
    background: "#FAC5C9",
    color: "#FFFFFF",
    "&:hover": {
      background: "#FC9FA6",
    },
  };
  const icons = {
    minWidth: "30px",
    minHeight: "30px",
    height: "3vmax",
    width: "3vmax",
    padding: "0.2vmax",
  };
  const logoStyle = {
    width: "auto",
    minWidth: "150px",
    maxWidth: "300px",
    height: "auto",
    padding: "1vh 0vw",
  };
  const centerDiv = {
    height: "100%",
    width: "100%",
    display: "flex",
  };
  const drawer = {
    background: "#eb5e69",
    // flex: "0 0 20%",
    // zIndex: 1050,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
    width: "20vw",
    minWidth: "115px",
    transition: transition,
    // gridColumn: "1/span 2",
  };
  const drawerList = {
    width: "100%",
    height: "100%",
    display: "grid",
    background: "#ed6f79",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 10fr 1fr",
    transition: transition,
  };
  const drawerTitle = {
    gridColumn: "1/span 2",
    background: "#eb5e69",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "11px",
    gridColumn: "1 /span 2",
    width: "100%",
    height: "auto",
  };
  const drawerListTile = {
    gridColumn: "1 /span 2",
    width: "100%",
    height: "auto",
    padding: "0vh 0vw",
  };
  const drawerListTileButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "inherit",
    gap: "0vh 1.5vw",
    padding: "1vh 2vw",
    transition: transition,
    color: "#ed939a",
    "&:hover": {
      background: "#ed939a",
    },
    "&.Mui-selected": {
      background: "#ed939a",
      "&:hover": {
        background: "#ed939a",
      },
    },
  };
  const drawerListTileButtonIcon = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    minWidth: "1vw",
    height: "fit-content",
    color: "#FCFBFB",
    transition: transition,
  };
  const drawerListTileButtonIconIcon = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: "3vh",
  };
  const drawerListTileButtonText = {
    transition: transition, // smooth transition
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    maxWidth: "100%",
    height: "100%",
    color: "#FCFBFB",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  };
  const ladoDerecho = {
    height: "87vh",
    width: "100%",
    maxWidth: "80vw",
    overflow: "auto",
    transition: transition,
  };
  const contenido = {
    // display: "flex",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "5vh 5vw",
    overflow: "auto",
    zIndex: "500",
  };
  const fabButton = {
    position: "absolute",
    right: "5vw",
    bottom: "8vh",
    backgroundColor: "#FCFCFB",
    minWidth: "40px",
    minHeight: "40px",
    width: "fit-content",
    height: "fit-content",
  };
  const fabButtonIcon = {
    minWidth: "30px",
    minHeight: "30px",
    height: "3vmax",
    width: "3vmax",
  };

  var drawerListValues = [
    {
      title: "Rolls",
      icon: <SetMealIcon sx={drawerListTileButtonIconIcon} />,
    },
    {
      title: "Tempura y Panko Rolls",
      icon: <RiceBowlIcon sx={drawerListTileButtonIconIcon} />,
    },
    {
      title: "Rolls Especiales",
      icon: <RamenDiningIcon sx={drawerListTileButtonIconIcon} />,
    },
    {
      title: "Veggie Rolls",
      icon: <KebabDiningIcon sx={drawerListTileButtonIconIcon} />,
    },
    {
      title: "Tablas",
      icon: <BentoIcon sx={drawerListTileButtonIconIcon} />,
    },
    {
      title: "Postres y Bebidas",
      icon: <TapasIcon sx={drawerListTileButtonIconIcon} />,
    },
  ];

  const list = () => (
    <List
      sx={drawerList}
      subheader={
        <ListSubheader sx={drawerTitle}>
          <ListItemIcon sx={drawerListTileButtonIcon}>
            <MenuBookIcon sx={drawerListTileButtonIconIcon} />
          </ListItemIcon>

          <ListItemText
            primary="Carta"
            sx={drawerListTileButtonText}
            // disableTypography
          />
        </ListSubheader>
      }
    >
      {drawerListValues.map((value) => (
        // <ListItem sx={drawerListTile} component={Link} to={`${value.title}`}>
        <ListItem sx={drawerListTile}>
          <ListItemButton
            sx={drawerListTileButton}
            selected={sectionClicked === value.title}
            key={value.title}
            onClick={(event) => sectionClick(event, value.title)}
          >
            <ListItemIcon sx={drawerListTileButtonIcon}>
              {value.icon}
            </ListItemIcon>
            <ListItemText
              primary={value.title}
              sx={drawerListTileButtonText}
              disableTypography
            />
          </ListItemButton>
        </ListItem>
      ))}
      {/* <ListItem sx={versionTile}> 
          <ListItemText sx={versionText}>
            V 1.2.0
          </ListItemText>
        </ListItem> */}
    </List>
  );

  return (
    <Box sx={inicio}>
      <CssBaseline />
      {/* <Box sx={background}>
        <AnimatePetals />
      </Box> */}
      <Card elevation={3} sx={appBar}>
        <Box component="img" src={logo} alt="Logo" sx={logoStyle} />
        <Box sx={appBarButtonsBox}>
          <IconButton sx={appBarButton}>
            <ShoppingCartIcon sx={icons} />
          </IconButton>
          <IconButton sx={appBarButton} onClick={handleAuth}>
            <PersonIcon sx={icons} />
          </IconButton>
        </Box>
      </Card>
      <Box sx={centerDiv}>
        <Box sx={drawer}>{list()}</Box>
        <Box sx={ladoDerecho}>
          <Box sx={contenido}>
            <Outlet />
          </Box>
        </Box>
      </Box>
      <AuthModal openModal={openAuthModal} setOpenModal={setOpenAuthModal} />
      {/* <RegistrarModal openModal={openAuthModal} setOpenModal={openAuthModal} /> */}
      {/* <Fab sx={fabButton} onClick={handleOpenSupp}>
        <PersonIcon sx={fabButtonIcon} />
      </Fab> */}
      {/* <Modal open={openSupp} onClose={handleCloseSupp} sx={modal}> */}
      {/* <SupportPopUp setOpenSupp={setOpenSupp} /> */}
      {/* </Modal> */}
    </Box>
  );
}
