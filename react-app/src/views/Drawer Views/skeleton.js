import React, { useContext, useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { UserContext } from "../../App";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  IconButton,
  Card,
  Collapse,
  SvgIcon,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import PersonIcon from "@mui/icons-material/Person";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { littleSizeFunc } from "../../controller/windowSize";
import logoText from "../../imgs/logo_text.png";
import logo from "../../imgs/logo_compacto.png";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { ReactComponent as RollsIcon } from "../../imgs/svg/Rolls.svg";
import { ReactComponent as SpecialRollIcon } from "../../imgs/svg/Special Roll.svg";
import { ReactComponent as TablasIcon } from "../../imgs/svg/Tablas.svg";
import { ReactComponent as TempuraIcon } from "../../imgs/svg/Tempura.svg";
import { ReactComponent as VeggieRollIcon } from "../../imgs/svg/Veggie Roll.svg";
import { ReactComponent as PostresIcon } from "../../imgs/svg/Postres.svg";
import MenuIcon from "@mui/icons-material/Menu";

import AnimatePetals from "../animations/sakura";
import AuthModal from "./Auth/authModal";
import RegistrarModal from "./common/infoPerfil";

const transition = "500ms";

const GET_PRODUCTOS = gql`
  query getProductos {
    Producto {
      _id
      nombre
      foto
      disponibilidad
      precio
      ingredientes
      descuento
      tipo_producto
    }
  }
`;

const GET_CARRO = gql`
  query Query($idUsuario: String!) {
    getCarroUsuario(id_usuario: $idUsuario) {
      _id
      producto {
        _id
      }
    }
  }
`;

export default function Skeleton(props) {
  const { user, setUser } = useContext(UserContext);
  // const { data, loading, error } = useQuery(GET_CARRO, {
  //   variables: { idUsuario: user.id },
  // });
  const carritoCount = 0

  // const carritoCount = loading
  //   ? 0
  //   : data.getCarroUsuario.producto.length;
  // const { data, loading, error } = useQuery(GET_LOCATIONS);
  const littleSize = littleSizeFunc();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.replace("%20", " ").split("/");
  path.shift();
  const [openMenu, setOpenMenu] = useState(true);
  const [sectionClicked, setSectionClicked] = useState(path[0]);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(!littleSize);
  const [openRegistrarModal, setOpenRegistrarModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const appBarColor =
    user.rol === 2
      ? "#E89005"
      : user.rol === 1
      ? "#262626"
      : user.rol === 0
      ? "#08A89E"
      : "#E84855";
  const drawerColor =
    user.rol === 2
      ? "#ffc56e"
      : user.rol === 1
      ? "#383838"
      : user.rol === 0
      ? "#0a403d"
      : "#ed6f79";
  const itemColor =
    user.rol === 2
      ? "#ffa724"
      : user.rol === 1
      ? "#4d4c4c"
      : user.rol === 0
      ? "#057d75"
      : "#eb5e69";
  const hoverColor =
    user.rol === 2
      ? "#ffd08a"
      : user.rol === 1
      ? "#757575"
      : user.rol === 0
      ? "#99ccc9"
      : "#ed939a";

  useEffect(() => {
    if (user.rol === null) {
      setOpenAuthModal(true);
    } else {
      setOpenAuthModal(false);
    }
  }, []);

  useEffect(() => {
    if (littleSize) {
      setOpenDrawer(false);
    } else {
      setOpenDrawer(true);
    }
  }, [littleSize]);

  useEffect(() => {
    navigate(sectionClicked);
  }, [sectionClicked]);

  const sectionTitleClick = (event, section) => {
    setSectionClicked(section);
  };

  const drawerClick = (e) => {
    setOpenDrawer(!openDrawer);
  };

  const menuClick = (event) => {
    setOpenMenu(!openMenu);
  };

  const menuSectionClick = (event, section) => {
    setSectionClicked("Carta");
    if (littleSize) {
      setOpenDrawer(false);
    }
  };

  const adminSectionClick = (event, section) => {
    setSectionClicked(section);
    if (littleSize) {
      setOpenDrawer(false);
    }
  };

  const sectionClick = (event, section) => {
    setSectionClicked(section);
    handleCloseProfileMenu(null);
    if (littleSize) {
      setOpenDrawer(false);
    }
  };

  const handleAuth = (event) => {
    if (user.rol === null) {
      setOpenAuthModal(true);
    } else {
      handleProfileMenu(event);
    }
  };

  const handleProfileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProfileMenu = (event) => {
    setAnchorEl(null);
  };

  const handleLogOut = (event) => {
    navigate("Carta");
    handleCloseProfileMenu();
    setUser({
      id: null,
      rol: null,
      username: null,
      password: null,
    });
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
    backgroundColor: appBarColor,
    padding: "0px 1vw",
    gap: "11px",
  };
  const appBarButtonsBox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "50%",
    gap: "11px",
    padding: "0 1vw",
  };
  const appBarButton = {
    minWidth: "30px",
    minHeight: "30px",
    height: "fit-content",
    width: "fit-content",
    color: "#FFFFFF",
    "&:hover": {
      background: hoverColor,
    },
  };
  const icons = {
    minWidth: "20px",
    minHeight: "20px",
    height: "5vh",
    width: "auto",
    padding: "0.2vmax",
  };
  const logoStyle = {
    width: "auto",
    minWidth: littleSize ? "25px" : "150px",
    maxWidth: littleSize ? "75px" : "250px",
    height: "auto",
    padding: "1vh 0vw",
  };
  const centerDiv = {
    transition: transition,
    height: "100%",
    width: "100%",
    overflow: "auto",
    display: "flex",
  };
  const drawerCollapse = {
    position: littleSize ? "absolute" : "",
    width: littleSize ? "80vw" : "20vw",
    minWidth: "130px",
    padding: "0",
    height: "100%",
    zIndex: 100,
  };
  const drawer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    overflowY: "auto",
    width: littleSize ? "80vw" : "20vw",
    minWidth: "130px",
    padding: "0",
    height: "100%",
    transition: transition,
  };
  const drawerList = {
    width: "100%",
    background: drawerColor, // TODO: Delivery: #ffc56e, Admin: #757575, Dueño: #0a403d
    height: "100%",
    transition: transition,
    padding: "0",
  };
  const drawerListMenu = {
    width: "100%",
    background: drawerColor, // TODO: Delivery: #ffc56e, Admin: #757575, Dueño: #0a403d
    height: "fit-content",
    transition: transition,
    padding: "0",
  };
  const arrowMenuIcon = {
    width: "auto",
    height: "3vh",
    transform: openMenu ? "rotate(90deg) scaleX(-1)" : "rotate(90deg)",
    transition: transition, // smooth transition ease
  };
  const drawerListTile = {
    transition: transition, // smooth transition
    width: "100%",
    padding: "0vh 0vw",
  };
  const drawerListTileButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    gap: "11px",
    padding: "1vh 2vw",
    transition: transition,
    color: hoverColor,
    "&:hover": {
      background: hoverColor,
    },
    "&.Mui-selected": {
      background: hoverColor,
      "&:hover": {
        background: hoverColor,
      },
    },
  };
  const drawerListTileButton2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: "11px",
    padding: "1vh 1vw",
    transition: transition,
    background: itemColor,
    color: hoverColor,
    "&:hover": {
      background: hoverColor,
    },
    "&.Mui-selected": {
      background: hoverColor,
      "&:hover": {
        background: hoverColor,
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
    height: "5vh",
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
    maxWidth: littleSize ? "100vw" : "80vw",
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

  var drawerTitleListValuesCliente = [
    {
      title: "Mis compras",
      icon: <ShoppingBagIcon sx={drawerListTileButtonIconIcon} />,
    },
    {
      title: "Editar Perfil",
      icon: <ManageAccountsIcon sx={drawerListTileButtonIconIcon} />,
    },
  ];

  var drawerTitleListValuesDelivery = [
    {
      title: "Pedidos",
      icon: <ManageAccountsIcon sx={drawerListTileButtonIconIcon} />, // TODO: Cambiar icono
    },
  ];

  var drawerTitleListValuesAdmin = [
    {
      title: "Administrar Pedidos",
      icon: <ManageAccountsIcon sx={drawerListTileButtonIconIcon} />, // TODO: Cambiar icono
    },
  ];

  var drawerTitleListValuesDueno = [
    {
      title: "Reportes",
      icon: <ManageAccountsIcon sx={drawerListTileButtonIconIcon} />, // TODO: Cambiar icono
    },
  ];

  var drawerListValuesMenu = [
    {
      title: "Rolls",
      icon: (
        <SvgIcon sx={drawerListTileButtonIconIcon}>
          <RollsIcon />
        </SvgIcon>
      ),
    },
    {
      title: "Tempura y Panko Rolls",
      icon: (
        <SvgIcon sx={drawerListTileButtonIconIcon}>
          <TempuraIcon />
        </SvgIcon>
      ),
    },
    {
      title: "Rolls Especiales",
      icon: (
        <SvgIcon sx={drawerListTileButtonIconIcon}>
          <SpecialRollIcon />
        </SvgIcon>
      ),
    },
    {
      title: "Veggie Rolls",
      icon: (
        <SvgIcon sx={drawerListTileButtonIconIcon}>
          <VeggieRollIcon />
        </SvgIcon>
      ),
    },
    {
      title: "Tablas",
      icon: (
        <SvgIcon sx={drawerListTileButtonIconIcon}>
          <TablasIcon />
        </SvgIcon>
      ),
    },
    {
      title: "Postres y Bebidas",
      icon: (
        <SvgIcon sx={drawerListTileButtonIconIcon}>
          <PostresIcon />
        </SvgIcon>
      ),
    },
  ];

  var drawerListValuesAdmin = [
    {
      title: "Administrar Usuarios",
    },
    {
      title: "Administrar Productos",
    },
    {
      title: "Administrar Clientes",
    },
  ];

  const cartaList = () => (
    <List disablePadding sx={drawerList}>
      <ListItem
        sx={drawerListTileButton2}
        component={ListItemButton}
        onClick={(e) => menuClick(e)}
      >
        <ListItemIcon sx={drawerListTileButtonIcon}>
          <MenuBookIcon sx={drawerListTileButtonIconIcon} />
        </ListItemIcon>
        <ListItemText primary="Carta" sx={drawerListTileButtonText} />
        <ListItemIcon sx={drawerListTileButtonIcon}>
          <ArrowForwardIosIcon sx={arrowMenuIcon} />
        </ListItemIcon>
      </ListItem>
      <Collapse in={openMenu} timeout="auto">
        {drawerListValuesMenu.map((value) => (
          <List disablePadding sx={drawerListMenu}>
            <ListItem sx={drawerListTile}>
              <ListItemButton
                sx={drawerListTileButton}
                selected={sectionClicked === value.title}
                key={value.title}
                onClick={(e) => menuSectionClick(e, value.title)}
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
          </List>
        ))}
      </Collapse>
      {user.rol !== null
        ? drawerTitleListValuesCliente.map((value) => (
            <ListItem
              sx={drawerListTileButton2}
              component={ListItemButton}
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
                // disableTypography
              />
            </ListItem>
          ))
        : null}
    </List>
  );

  const deliveryList = () => (
    <List disablePadding sx={drawerList}>
      {drawerTitleListValuesDelivery.map((value) => (
        <ListItem
          sx={drawerListTileButton2}
          component={ListItemButton}
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
            // disableTypography
          />
        </ListItem>
      ))}
    </List>
  );

  const adminList = () => (
    <List disablePadding sx={drawerList}>
      <ListItem
        sx={drawerListTileButton2}
        component={ListItemButton}
        onClick={(e) => menuClick(e)}
      >
        <ListItemIcon sx={drawerListTileButtonIcon}>
          <MenuBookIcon sx={drawerListTileButtonIconIcon} />
        </ListItemIcon>
        <ListItemText primary="Administración" sx={drawerListTileButtonText} />
        <ListItemIcon sx={drawerListTileButtonIcon}>
          <ArrowForwardIosIcon sx={arrowMenuIcon} /> {/* TODO: cambiar icono */}
        </ListItemIcon>
      </ListItem>
      <Collapse in={openMenu} timeout="auto">
        {drawerListValuesAdmin.map((value) => (
          <List disablePadding sx={drawerListMenu}>
            <ListItem sx={drawerListTile}>
              <ListItemButton
                sx={drawerListTileButton}
                selected={sectionClicked === value.title}
                key={value.title}
                onClick={(e) => adminSectionClick(e, value.title)}
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
          </List>
        ))}
      </Collapse>
      {drawerTitleListValuesAdmin.map((value) => (
        <ListItem
          sx={drawerListTileButton2}
          component={ListItemButton}
          selected={sectionClicked === value.title}
          key={value.title}
          onClick={(event) => sectionClick(event, value.title)}
        >
          <ListItemText
            primary={value.title}
            sx={drawerListTileButtonText}
            // disableTypography
          />
        </ListItem>
      ))}
    </List>
  );

  const duenoList = () => (
    <List disablePadding sx={drawerList}>
      {drawerTitleListValuesDueno.map((value) => (
        <ListItem
          sx={drawerListTileButton2}
          component={ListItemButton}
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
            // disableTypography
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={inicio}>
      <AnimatePetals />
      <CssBaseline />
      <Card elevation={3} sx={appBar}>
        {littleSize ? (
          <IconButton sx={appBarButton} onClick={drawerClick}>
            <MenuIcon sx={icons} />
          </IconButton>
        ) : null}
        {littleSize ? (
          <Box
            loading="lazy"
            component="img"
            src={logo}
            alt="Logo"
            sx={logoStyle}
          />
        ) : (
          <Box
            loading="lazy"
            component="img"
            src={logoText}
            alt="Logo"
            sx={logoStyle}
          />
        )}

        <Box sx={appBarButtonsBox}>
          {user.rol === 3 ? (
            <IconButton
              sx={appBarButton}
              onClick={(e) => sectionClick(e, "Carrito")}
            >
              <Badge badgeContent={carritoCount} color="secondary">
                <ShoppingCartIcon sx={icons} />
              </Badge>
            </IconButton>
          ) : null}
          <IconButton sx={appBarButton} onClick={handleAuth}>
            <PersonIcon sx={icons} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleCloseProfileMenu}
          >
            <MenuItem onClick={(e) => sectionClick("Editar Perfil")}>
              Editar Perfil
            </MenuItem>
            <MenuItem onClick={handleLogOut}>Cerrar Sesión</MenuItem>
          </Menu>
        </Box>
      </Card>
      <Box sx={centerDiv}>
        <Collapse
          sx={drawerCollapse}
          in={openDrawer}
          timeout="auto"
          orientation="horizontal"
        >
          {user.rol === 2 ? (
            <Box sx={drawer}>{deliveryList()}</Box>
          ) : user.rol === 1 ? (
            <Box sx={drawer}>{adminList()}</Box>
          ) : user.rol === 0 ? (
            <Box sx={drawer}>{duenoList()}</Box>
          ) : (
            <Box sx={drawer}>{cartaList()}</Box>
          )}
        </Collapse>
        <Box sx={ladoDerecho}>
          <Box sx={contenido}>
            <Outlet />
          </Box>
        </Box>
      </Box>
      <AuthModal openModal={openAuthModal} setOpenModal={setOpenAuthModal} />
    </Box>
  );
}
