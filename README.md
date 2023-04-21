# Fukusuke Sushi

Propósito de los componentes correspondientes al [diagrama de despliegue](./docs/diagrama-despliegue.png):

- **React.js:** utilizada para crear la interfaz de usuario con la cual el cliente accederá a la aplicación de venta de Sushi.

- **AWS Cognito:** servicio utilizado para otorgar autenticación, autorización y administración de usuarios al sistema web. 

- **AWS Elastic Load Balance:** servicio utilziado para distribuir el tráfico entrante de usuarios a la aplicación a través de instancias, containers, etc. Permitirá evitar el colapso del sistema debido a múltiples usuarios que estén utilizando la aplicación.

- **CDM (Connect Device Managment):** permite gestionar y asegurar la calidad de los equipos en los cuales está levantado el sistema.

- **APIS (Mensajería, Pago, Despacho):** servicios utilizados para otorgar a la aplicación la capacidad de mandar mensajes, realizar los pagos necesarios y organizar los despachos correspondientes a cada cliente. 

- **Node.js:** herramienta que permitirá construir y sostener el backend de la aplicación, estableviendo y gestionando múltiples conexiones a la base de datos al mismo tiempo.

- **PostgreSQL:** base de datos relacional para el sistema. En ella se guardará los datos necesarios para el correcto funcionamiento de la aplicación.
