-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "sushi_schema"."carro" (
    "id_carro" int4 NOT NULL,
    "id_usuario" int4 NOT NULL,
    "id_producto" int4 NOT NULL,
    "date" date,
    CONSTRAINT "id_producto" FOREIGN KEY ("id_producto") REFERENCES "sushi_schema"."productos"("id_producto"),
    CONSTRAINT "id_usuario" FOREIGN KEY ("id_usuario") REFERENCES "sushi_schema"."usuarios"("id_usuario"),
    PRIMARY KEY ("id_carro")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "sushi_schema"."cliente_usuario" (
    "id" int4 NOT NULL,
    "id_usuario" int4 NOT NULL,
    "id_cliente" int4 NOT NULL,
    CONSTRAINT "usuario_id" FOREIGN KEY ("id_usuario") REFERENCES "sushi_schema"."usuarios"("id_usuario"),
    CONSTRAINT "cliente_id" FOREIGN KEY ("id_cliente") REFERENCES "sushi_schema"."clientes"("id_cliente"),
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "sushi_schema"."clientes" (
    "nombre" varchar NOT NULL,
    "direccion" varchar NOT NULL,
    "comuna" varchar,
    "provincia" varchar,
    "region" varchar,
    "fecha_nacimiento" date,
    "sexo" varchar,
    "correo" varchar NOT NULL,
    "telefono" varchar NOT NULL,
    "rut" varchar,
    "id_cliente" int4 NOT NULL,
    PRIMARY KEY ("id_cliente")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "sushi_schema"."estados_pedidos" (
    "nombre" varchar NOT NULL,
    "id" int4 NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "sushi_schema"."pedido" (
    "id_orden" int4 NOT NULL,
    "id_carrito" int4,
    "id_estado" int4 NOT NULL,
    "id_usuario" int4 NOT NULL,
    CONSTRAINT "id_usuario" FOREIGN KEY ("id_usuario") REFERENCES "sushi_schema"."usuarios"("id_usuario"),
    CONSTRAINT "id_estado" FOREIGN KEY ("id_estado") REFERENCES "sushi_schema"."estados_pedidos"("id"),
    CONSTRAINT "id_carrito" FOREIGN KEY ("id_carrito") REFERENCES "sushi_schema"."carro"("id_carro"),
    PRIMARY KEY ("id_orden")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "sushi_schema"."producto_tipo" (
    "id_producto" int4 NOT NULL,
    "id_tipo_producto" int4 NOT NULL,
    "id" int4 NOT NULL,
    CONSTRAINT "id_tipo_producto" FOREIGN KEY ("id_tipo_producto") REFERENCES "sushi_schema"."tipo_producto"("id"),
    CONSTRAINT "id_producto" FOREIGN KEY ("id_producto") REFERENCES "sushi_schema"."productos"("id_producto"),
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "sushi_schema"."productos" (
    "id_producto" int4 NOT NULL,
    "nombre" varchar NOT NULL,
    "foto" varchar,
    "disponibilidad" bool NOT NULL,
    "precio" int4 NOT NULL,
    "ingredientes" varchar NOT NULL,
    "descuento" int4,
    PRIMARY KEY ("id_producto")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "sushi_schema"."tipo_producto" (
    "id" int4 NOT NULL,
    "nombre_tipo" varchar NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "sushi_schema"."usuarios" (
    "username" varchar NOT NULL,
    "password" varchar NOT NULL,
    "role" varchar NOT NULL,
    "id_usuario" int4 NOT NULL,
    PRIMARY KEY ("id_usuario")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "sushi_schema"."ventas" (
    "id" int4 NOT NULL,
    "id_orden" int4 NOT NULL,
    "precio" int4 NOT NULL,
    "fecha" date NOT NULL,
    CONSTRAINT "id_orden" FOREIGN KEY ("id_orden") REFERENCES "sushi_schema"."pedido"("id_orden"),
    PRIMARY KEY ("id")
);

















INSERT INTO "sushi_schema"."usuarios" ("username", "password", "role", "id_usuario") VALUES
('pbelenc', 'lala', '1', 1);
INSERT INTO "sushi_schema"."usuarios" ("username", "password", "role", "id_usuario") VALUES
('cataz', 'cata1.', '2', 2);



