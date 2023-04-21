# Diagrama de despliegue

Propósito de los [componentes](./diagrama-despliegue.png):

- **React.js:** utilizada para crear la interfaz de usuario con la cual el cliente accederá a la aplicación de venta de Sushi.

- **AWS Cognito:** servicio utilizado para otorgar autenticación, autorización y administración de usuarios al sistema web. 

- **AWS Elastic Load Balance:** servicio utilziado para distribuir el tráfico entrante de usuarios a la aplicación a través de instancias, containers, etc. Permitirá evitar el colapso del sistema debido a múltiples usuarios que estén utilizando la aplicación.

- **CDM (Connect Device Managment):** 

- **APIS (Mensajería, Pago, Despacho):**

- **Node.js:**

- **PostgreSQL:** base de datos relacional para el sistema. En ella se guardará los datos necesarios para el correcto funcionamiento de la aplicación.
