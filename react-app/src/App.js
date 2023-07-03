// import logo from './logo.svg';

import "./App.css";
import { Helmet } from "react-helmet";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Skeleton from "./views/Drawer Views/skeleton";
import Carta from "./views/Drawer Views/Carta/carta";
// import Clientes from "./views/Drawer Views/Clientes/clientes";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Poppins from "./fonts/Poppins-Regular.ttf";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AnimatePetals from "./views/animations/sakura";
import Carrito from "./views/Drawer Views/Carrito/carrito";
import MisCompras from "./views/Drawer Views/Mis Compras/misCompras";
import EditarPerfil from "./views/Drawer Views/Editar Perfil/editarPerfil";
import Pedidos from "./views/Drawer Views/Pedidos/pedidos";
import AdminUsuarios from "./views/Drawer Views/Administracion/administracionUsuarios";
import AdminProductos from "./views/Drawer Views/Administracion/administracionProductos";
import AdminClientes from "./views/Drawer Views/Administracion/administracionClientes";
import AdminPedidos from "./views/Drawer Views/Administracion/administrarPedidos";
import Reportes from "./views/Drawer Views/Reportes/reportes";


function App() {
  // var axios = new Axios_API();
  const theme = createTheme({
    palette: {
      primary: {
        light: "#FCFBFB",
        main: "#E84855", // TODO:  Delivery: #E89005, Admin: #262626, Dueño: #08A89E
      },
      neutral: {
        light: "#D9D9D9",
        main: "#818181",
        // contrastText: '#fff',
      },
    },
    text: {
      primary: "#FCFBFB",
    },
    typography: {
      fontFamily: ["Poppins"].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Poppins'), local('Poppins-Regular'), url(${Poppins}) format('ttf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Skeleton />,
      children: [
        { index: true, element: <Navigate to="/Carta" replace /> },
        { path: "Carta", element: <Carta /> },

        { path: "Carrito", element: <Carrito /> },
        { path: "Mis Compras", element: <MisCompras /> },
        { path: "Editar Perfil", element: <EditarPerfil /> },

        { path: "Pedidos", element: <Pedidos /> },

        { path: "Administrar Usuarios", element: <AdminUsuarios /> },
        { path: "Administrar Productos", element: <AdminProductos /> },
        { path: "Administrar Clientes", element: <AdminClientes /> },
        { path: "Administrar Pedidos", element: <AdminPedidos /> },

        { path: "Reportes", element: <Reportes /> },



        // { path: "Carta", element: <Carta /> },
      ]
    //     {
    //       path: "Trabajadores",
    //       element: <Trabajadores />,
    //     },
    //     {path: "/Trabajadores/Nuevo Trabajador", element: <NuevoTrabajador /> },
    //     { path: "Clientes", element: <Clientes /> },
    //     { path: "Empresa", element: <Empresa /> },
    //     { path: "Mi Perfil", element: <MiPerfil /> },
    //     { path: "*", element: null },
    //   ],
    // },
    // {
    //   path: "/auth/ingreso",
    //   element: <SignIn />,
    },
  ]);

  return (
    
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
