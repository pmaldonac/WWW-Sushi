# Fukusuke Sushi

## Backend
### Instalar dependencias
Para instalar dependencias del backend, vaya a la carpeta ``backend3`` y en la terminal ejecute cualquiera de estos comando:
```
$ npm install
```
```
$ yarn install
```

### Conexión base de datos
Crear archivo con extensión ``.env`` en el cual debe estar lo siguiente:
```
URI_BD = "mongodb://127.0.0.1:27017/sushi_www" 
URI_API = "http://localhost:8090" 
PORT_API = 8090

```
**Nota: Debe tener instalado MongoDB para su funcionamiento.**

> En caso de tener MacOS o Linux es probable que se tenga que iniciar MongoDB de forma manual. Para eso ejecutar:

> **MacOS:** ``brew services start mongodb-community``

> **Ubuntu:** ``sudo systemctl start mongod``. En caso de obtener un error, ejecutar: ``sudo systemctl daemon-reload``

### Levantar backend
En el mismo directorio, ejecutar cualquiera de estos dos comandos:

```
npm start
```
```
yarn start
```
Apollo-Server estará corriendo en el siguiente link http://localhost:8090/graphql 

## Frontend

Para instalar las dependencias necesarias en el frontend, vaya a la carpeta ``react-app``y ejecute cualquiera de estos comandos:
```
$ npm install
```
```
$ yarn install
```

Luego, para levantar el frontend basta con ejecutar cualquiera de estos comandos:
```
npm start
```
```
yarn start
```


## Diagrama de despliegue
Propósito de los componentes correspondientes al [diagrama de despliegue](./Hito1/docs/diagrama-despliegue.png):

- **React.js:** utilizada para crear la interfaz de usuario con la cual el cliente accederá a la aplicación de venta de Sushi.

- **AWS Cognito:** servicio utilizado para otorgar autenticación, autorización y administración de usuarios al sistema web. 

- **AWS Elastic Load Balance:** servicio utilziado para distribuir el tráfico entrante de usuarios a la aplicación a través de instancias, containers, etc. Permitirá evitar el colapso del sistema debido a múltiples usuarios que estén utilizando la aplicación.

- **CDM (Connect Device Managment):** permite gestionar y asegurar la calidad de los equipos en los cuales está levantado el sistema.

- **APIS (Mensajería, Pago, Despacho):** servicios utilizados para otorgar a la aplicación la capacidad de mandar mensajes, realizar los pagos necesarios y organizar los despachos correspondientes a cada cliente. 

- **Node.js:** herramienta que permitirá construir y sostener el backend de la aplicación, estableviendo y gestionando múltiples conexiones a la base de datos al mismo tiempo.

- **MongoDB:** base de datos no relacional para el sistema. En ella se guardará los datos necesarios para el correcto funcionamiento de la aplicación.

- **GraphQL:** Lenguaje de consultas para el sistema. Utilizado en backend para solicitar datos.

