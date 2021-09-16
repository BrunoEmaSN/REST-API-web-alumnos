CREATE DATABASE IF NOT EXISTS db_web_alumnos;   
USE db_web_alumnos;

CREATE TABLE IF NOT EXISTS datos_personales
(
	documento			INT(11) UNSIGNED NOT NULL,
    tipo_documento 		ENUM('CUIL', 'DNI', 'LE', 'LC', 'O'),
    nombre 				VARCHAR(50) NOT NULL,
    apellido 			VARCHAR(50) NOT NULL,
    fecha_nacimiento 	DATE NOT NULL,
    sexo 				ENUM('Masculino', 'Femenino', 'Otros'),
    lugar_nacimiento 	VARCHAR(75) NOT NULL,
    telefono_fijo 		VARCHAR(15),
    telefono_movil 		VARCHAR(15),
    domicilio 			VARCHAR(100) NOT NULL,
    numero 				INT UNSIGNED NOT NULL,
    departamento 		VARCHAR(75) NOT NULL,
    piso 				INT UNSIGNED NOT NULL,
    PRIMARY KEY(documento)
);

CREATE TABLE IF NOT EXISTS admin 
( 
     id         	INT UNSIGNED AUTO_INCREMENT, 
     username   	VARCHAR(25) UNIQUE NOT NULL, 
     password   	CHAR(60) NOT NULL,
     PRIMARY KEY(id),
     FOREIGN KEY(id)
		REFERENCES datos_personales(documento)
);

CREATE TABLE IF NOT EXISTS aulas
(
	id 				INT(2) UNSIGNED NOT NULL AUTO_INCREMENT,
    descripcion 	VARCHAR(50),
    capacidad 		INT(2),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS cursos
(
	id 			INT(2) UNSIGNED NOT NULL AUTO_INCREMENT,
	aula_id 	INT(2) UNSIGNED NOT NULL,
    nivel 		CHAR(1),
    turno 		ENUM('Mañana', 'Tarde', 'Noche'),
    grado_ano 	INT(1) UNSIGNED NOT NULL,
    division 	CHAR(1),
    PRIMARY KEY(id),
    INDEX i_aula_id(aula_id),
    FOREIGN KEY (aula_id)
		REFERENCES aulas(id)
);

CREATE TABLE IF NOT EXISTS alumnos
(
	id 					INT(11) UNSIGNED NOT NULL,
    curso_id			INT(2) UNSIGNED NOT NULL,
    fecha_agregado 		DATE NOT NULL,
    partida_nacimiento 	BOOLEAN NOT NULL,
    fotocopia_dni 		BOOLEAN NOT NULL,
    fotocopia_cuil 		BOOLEAN NOT NULL,
    foto_4x4 			BOOLEAN NOT NULL,
    contrato 			BOOLEAN NOT NULL,
    observaciones 		VARCHAR(100),
    condicion 			ENUM('Regular', 'Promocional', 'Libre') NOT NULL,
    estado				BOOLEAN NOT NULL,
    PRIMARY KEY(id),
    INDEX i_curso_id(curso_id),
    FOREIGN KEY (id)
		REFERENCES datos_personales(documento),
    FOREIGN KEY (curso_id)
		REFERENCES cursos(id)
);

CREATE TABLE IF NOT EXISTS docentes
(
	id 					INT(11) UNSIGNED NOT NULL,
    fecha_agregado 		DATE NOT NULL,
    sede 				VARCHAR(50) NOT NULL,
    titulo 				VARCHAR(50) NOT NULL,
    cuit 				INT(11) NOT NULL,
    subencionado 		BOOLEAN NOT NULL,
    contratado 			BOOLEAN NOT NULL,
    monotributista 		BOOLEAN NOT NULL,
    observaciones 		VARCHAR(100),
    estado 				BOOLEAN NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id)
		REFERENCES datos_personales(documento)
);

CREATE TABLE IF NOT EXISTS tutores
(
	id 						INT(11) UNSIGNED NOT NULL,
    nivel_academico 		ENUM('Primaria', 'Secundaria', 'Terciario', 'Universitario') NOT NULL,
    situacion_academica 	ENUM('Incompleto', 'Completo', 'Cursando') NOT NULL,
    profesion 				VARCHAR(50) NOT NULL,
    ocupacion 				VARCHAR(50) NOT NULL,
    tiene_pareja 			BOOLEAN NOT NULL,
    telefono_laboral 		VARCHAR(15),
    PRIMARY KEY(id),
    FOREIGN KEY(id)
		REFERENCES datos_personales(documento)
);

CREATE TABLE IF NOT EXISTS pareja
(
	id 					INT(11) UNSIGNED NOT NULL,
    nombre 				VARCHAR(50) NOT NULL,
    apellido 			VARCHAR(50) NOT NULL,
    dni 				INT(8) UNSIGNED NOT NULL,
    telefono_fijo 		INT(15),
    telefono_movil 		INT(15),
    PRIMARY KEY(id),
    UNIQUE uq_dni(dni),
    FOREIGN KEY(id)
		REFERENCES tutores(id)
);

CREATE TABLE IF NOT EXISTS materias
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR(50) NOT NULL,
    regimen ENUM('Bimestral', 'Trimestral', 'Cuatrimestral', 'Anual'),
    plan_estudio VARCHAR(75),
    PRIMARY KEY(id)
);