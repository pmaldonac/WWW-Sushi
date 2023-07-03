import { regiones } from "./regionesChile";

const romanTable = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  VI: 6,
  VII: 7,
  VIII: 8,
  IX: 9,
  X: 10,
  XI: 11,
  XII: 12,
  XIII: 13,
  XIV: 14,
  XV: 15,
  XVI: 16,
  XVII: 17,
  XVIII: 18,
  XIX: 19,
  XX: 20,
};

export const listaSexo = [
  { id: "Femenino", value: "Femenino" },
  { id: "Masculino", value: "Masculino" },
  { id: "Otro", value: "Otro" },
];

export const listaEstadoPedido = [
  { id: "Preparando", value: "Preparando" },
  { id: "En Camino", value: "En Camino" },
  { id: "Entregado", value: "Entregado" },
  { id: "Cancelado", value: "Cancelado" },
];

export const listaCargos = [
  { id: "delivery", value: "Delivery" },
  { id: "delivery", value: "Cajero" },
];

export const listaRegiones = regiones
  .map((region) => {
    return {
      id: region.region_number,
      value: `Región ${
        region.region_number === "XIII" ? "Metropolitana" : region.region_number
      }`,
    };
  })
  .sort((a, b) =>
    romanTable[a.id] > romanTable[b.id]
      ? 1
      : romanTable[b.id] > romanTable[a.id]
      ? -1
      : 0
  );

export const listaComunas = [
  { region: "", comunas: [{ id: "", value: "" }] },
].concat(
  regiones.map((region) => {
    var comunas = [];
    region.provincias.map((provincia) => {
      comunas = comunas.concat(
        provincia.comunas.map((comuna) => {
          return {
            id: comuna.name,
            value: comuna.name,
          };
        })
      );
    });
    return {
      region: region.region_number,
      comunas: comunas.sort((a, b) =>
        a.value > b.value ? 1 : b.value > a.value ? -1 : 0
      ),
    };
  })
);

export const headCellsPedidos = [
  {
    id: "id",
    label: "Número de orden",
  },
  {
    id: "descripcion",
    label: "Descripción",
  },
  {
    id: "total",
    label: "Total",
  },
  {
    id: "estado",
    label: "Estado",
  },
  {
    id: "acciones",
    label: "",
  },
];

export const headCellsOrdenes = [
  {
    id: "expand",
    label: "",
  },
  {
    id: "id",
    label: "Orden",
  },
  {
    id: "cliente",
    label: "Nombre cliente",
  },
  {
    id: "telefono",
    label: "Teléfono",
  },
  {
    id: "direccion",
    label: "Dirección",
  },
  {
    id: "estado",
    label: "Estado",
  },
];

export const headCellsOrdenesAdmin = [
  {
    id: "expand",
    label: "",
  },
  {
    id: "id",
    label: "Orden",
  },
  {
    id: "cliente",
    label: "Nombre cliente",
  },
  {
    id: "telefono",
    label: "Teléfono",
  },
  {
    id: "direccion",
    label: "Dirección",
  },
  {
    id: "estado",
    label: "Estado",
  },
  {
    id: "delete",
    label: "",
  },
];


export const headCellsUsuarios = [
  {
    id: "nombre",
    label: "Nombre",
  },
  {
    id: "apellido",
    label: "Apellido",
  },
  {
    id: "rut",
    label: "RUT",
  },
  {
    id: "sexo",
    label: "Sexo",
  },
  {
    id: "correo",
    label: "Correo electrónico",
  },
  {
    id: "telefono",
    label: "Teléfono",
  },
  {
    id: "cargo",
    label: "Cargo",
  },
  {
    id: "delete",
    label: "",
  },
];

export const headCellsClientes = [
  {
    id: "nombre",
    label: "Nombre",
  },
  {
    id: "apellido",
    label: "Apellido",
  },
  {
    id: "rut",
    label: "RUT",
  },
  {
    id: "sexo",
    label: "Sexo",
  },
  {
    id: "correo",
    label: "Correo electrónico",
  },
  {
    id: "telefono",
    label: "Teléfono",
  },
  {
    id: "direccion",
    label: "Dirección",
  },
  {
    id: "delete",
    label: "",
  },
];

export const headCellsProductos = [
  {
    id: "id",
    label: "Código",
  },
  {
    id: "nombre",
    label: "Nombre",
  },
  {
    id: "descripcion",
    label: "Descripción",
  },
  {
    id: "precio",
    label: "Precio",
  },
  {
    id: "descuento",
    label: "Descuento",
  },
  {
    id: "habilitado",
    label: "Habilitado",
  },
  {
    id: "acciones",
    label: "",
  },
];
