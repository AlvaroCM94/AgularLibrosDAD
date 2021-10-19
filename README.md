# AgularLibrosDAD
# Comprobar la rama master
https://github.com/AlvaroCM94/AgularLibrosDAD/tree/master

#Backend
https://github.com/AlvaroCM94/AgularLibrosDAD/tree/master/backend
Hecho con spring y servidor mysql, puerto 8080
Nombre de la bse de datos ( books ).
npm install
npm start

#Frontend
https://github.com/AlvaroCM94/AgularLibrosDAD/tree/master/frontend
Hecho con Angular, puerto 4200
npm install
ng serve o iniciar el proyecto en eclipse e inciciar el servidor con spring


#Base de datos
https://github.com/AlvaroCM94/AgularLibrosDAD/blob/master/books.sql

JWT_SECRET=V3RY#1MP0RT@NT$3CR3T#

MYSQL_DATABASE=books
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_ROOT_PASSWORD=

DB_HOST=localhost

NODE_ENV=development

CREATE TABLE `empleado` (
  `nombre` varchar(50) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `descripcion` text NOT NULL
)

INSERT INTO `empleado` (`nombre`, `imagen`, `descripcion`) VALUES
('Lola', 'assets/images/imgEmpleados/administrativa.png', 'Administrativa'),
('Alvaro', 'assets/images/imgEmpleados/CEO.png', 'CEO'),
('Ana', 'assets/images/imgEmpleados/empleada.png', 'Programadora senior'),
('Juan', 'assets/images/imgEmpleados/empleado.png', 'Analista');


CREATE TABLE `imagen` (
  `nombre` varchar(255) NOT NULL,
  `ruta` varchar(255) NOT NULL
)

CREATE TABLE `libro` (
  `id` int(50) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `autor` varchar(255) NOT NULL,
  `disponibilidad` tinyint(1) NOT NULL,
  `descripcion` text NOT NULL
)

ALTER TABLE `libro`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `libro`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

INSERT INTO `libro` (`id`, `nombre`, `autor`, `disponibilidad`, `descripcion`) VALUES
(1, 'Don Quijote de la Mancha', 'Miguel de Cervantes', 1, 'Don Quijote de la Mancha es una novela escrita por el español Miguel de Cervantes Saavedra'),
(3, 'Juego de tronos', 'George R.R. Martin', 1, 'Primer libro de la saga cancion de hielo y fuego'),
(4, 'Silmarillion', 'J.R.R. Tolkien', 1, 'El Silmarillion es una recopilación de obras de J. R. R. Tolkien');


