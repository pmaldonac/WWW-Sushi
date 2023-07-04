import React, { useState, useMemo, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Card,
} from "@mui/material";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { sushis } from "../../../controller/testData";
import { littleSizeFunc } from "../../../controller/windowSize";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Reportes() {
  const [cardExpanded, setCardExpanded] = useState(null);
  const littleSize = littleSizeFunc();

  const handleExpandCard = (e, index) => {
    if (cardExpanded === index) {
      setCardExpanded(null);
    } else {
      setCardExpanded(index);
    }
  };

  /* CSS */
  const contenido = {
    height: "fit-content",
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: littleSize ? "center" : "flex-start",
    alignItems: "center",
    gap: littleSize ? "11px 11px" : "33px 50px",
  };
  const graficoCard = {
    height: "40vh",
    width: "40vw",
    background: "#FCFCFC",
    padding: "22px"
  };
  const vendidosCard = {
    height: "40vh",
    width: "20vw",
    background: "#FCFCFC",
    padding: "22px"
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "VENTAS",
      },
    },
  };

  const labels = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Ventas 2022",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Ventas 2023",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Box sx={contenido}>
      <Card sx={graficoCard}>
        <Line options={options} data={data} />
      </Card>
      <Card sx={vendidosCard}>
        <Typography>Roll 1</Typography>
        <Typography>Roll 2</Typography>
        <Typography>Roll 3</Typography>
      </Card>

    </Box>
  );
}
