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
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { sushis } from "../../../controller/testData";
import { littleSizeFunc } from "../../../controller/windowSize";

export default function Carta() {
  const littleSize = littleSizeFunc();

  /* CSS */
  const cartaStyle = {
    // width: "fit-content",
    // height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: littleSize ? "center" : "flex-start",
    alignItems: "center",
    gap: "33px 50px",
  };
  const card = {
    background: "#eb5e69",
    height: littleSize ? "30vh" : "300px",
    width: littleSize ? "50vw" : "255px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // gap: '11px',
  };
  const imageBox = {
    height: "255px",
    width: "100%",
    background: "#262626",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const imgStyle = {
    height: "100%",
    width: "auto",
    alignSelf: "center",
  };
  const titleBox = {
    width: "100%",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3px 3px 3px 11px",
  };
  const icon = {
    color: "#FFFFFF",
  };

  return (
    <Box sx={cartaStyle}>
      {sushis.map((sushi) => (
        <Card sx={card}>
          <Card sx={imageBox}>
            <Box component="img" src={sushi.img} alt="Logo" sx={imgStyle} />
          </Card>
          <Box sx={titleBox}>
            <Typography>{sushi.title}</Typography>
            <IconButton>
              <AddCircleIcon sx={icon} />
            </IconButton>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
