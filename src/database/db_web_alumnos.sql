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
    departamento 		VARCHAR(75),
    piso 				INT UNSIGNED,
    PRIMARY KEY(documento)
);

CREATE TABLE IF NOT EXISTS users 
( 
     id         	INT(11) UNSIGNED, 
     username   	VARCHAR(25) UNIQUE NOT NULL, 
     password   	CHAR(60) NOT NULL,
     rol			ENUM('Admin', 'Alumno', 'Docente'),
     PRIMARY KEY(id),
     FOREIGN KEY (id)
		REFERENCES datos_personales(documento)
);

CREATE TABLE IF NOT EXISTS aulas
(
	id 				INT(2) UNSIGNED NOT NULL AUTO_INCREMENT,
    descripcion 	VARCHAR(50),
    capacidad 		INT(2),
    estado			BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS cursos
(
	id 			INT(2) UNSIGNED NOT NULL AUTO_INCREMENT,
	aula_id 	INT(2) UNSIGNED NOT NULL,
    nivel 		CHAR(1) NOT NULL,
    turno 		ENUM('Mañana', 'Tarde', 'Noche') NOT NULL,
    grado_ano 	INT(1) UNSIGNED NOT NULL,
    division 	CHAR(1),
    estado		BOOLEAN NOT NULL,
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
    cuit 				BIGINT UNSIGNED NOT NULL,
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
    estado					BOOLEAN NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id)
		REFERENCES datos_personales(documento)
);

CREATE TABLE IF NOT EXISTS alumno_tutor
(
    id 			INT UNSIGNED NOT NULL AUTO_INCREMENT,
    alumno_id 	INT(11) UNSIGNED NOT NULL,
    tutor_id 	INT(11) UNSIGNED NOT NULL,
    parentesco 	VARCHAR(20) NOT NULL,
    PRIMARY KEY(id),
    INDEX i_alumno_id(alumno_id),
    INDEX i_tutor_id(tutor_id),
    FOREIGN KEY(alumno_id)
      REFERENCES alumnos(id),
    FOREIGN KEY(tutor_id)
      REFERENCES tutores(id)
);

CREATE TABLE IF NOT EXISTS pareja
(
	id 					INT(11) UNSIGNED NOT NULL,
    nombre 				VARCHAR(50) NOT NULL,
    apellido 			VARCHAR(50) NOT NULL,
    dni 				INT(8) UNSIGNED NOT NULL,
    telefono_fijo 		VARCHAR(15),
    telefono_movil 		VARCHAR(15),
    estado				BOOLEAN NOT NULL,
    PRIMARY KEY(id),
    UNIQUE uq_dni(dni),
    FOREIGN KEY(id)
		REFERENCES tutores(id)
);

CREATE TABLE IF NOT EXISTS materias
(
	id 				INT UNSIGNED NOT NULL AUTO_INCREMENT,
    descripcion 	VARCHAR(50) NOT NULL,
    regimen 		ENUM('Bimestral', 'Trimestral', 'Cuatrimestral', 'Anual'), 
    plan_estudio 	VARCHAR(75) NOT NULL,
    estado 			BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS alumno_materia
(
    id 			INT UNSIGNED NOT NULL AUTO_INCREMENT,
    alumno_id 	INT UNSIGNED NOT NULL,
    materia_id 	INT UNSIGNED NOT NULL,
    estado 		ENUM('Regular', 'Promocional', 'Libre'),
    PRIMARY KEY(id),
    INDEX i_alumno_id(alumno_id),
    INDEX i_materia_id(materia_id),
    FOREIGN KEY(alumno_id)
      REFERENCES alumnos(id),
    FOREIGN KEY(materia_id)
      REFERENCES materias(id)
);

CREATE TABLE IF NOT EXISTS docente_materia
(
    id 			INT UNSIGNED NOT NULL AUTO_INCREMENT,
    docente_id 	INT UNSIGNED NOT NULL,
    materia_id 	INT UNSIGNED NOT NULL,
    PRIMARY KEY(id),
    INDEX i_docente_id(docente_id),
    INDEX i_materia_id(materia_id),
    FOREIGN KEY(docente_id)
      REFERENCES docentes(id),
    FOREIGN KEY(materia_id)
      REFERENCES materias(id)
);

CREATE TABLE IF NOT EXISTS calificaciones
(
      id 			INT UNSIGNED NOT NULL AUTO_INCREMENT,
      alumno_id 	INT(11) UNSIGNED NOT NULL,
      docente_id 	INT(11) UNSIGNED NOT NULL,
      materia_id 	INT UNSIGNED NOT NULL,
      regimen 		ENUM('Bimestral', 'Trimestral', 'Cuatrimestral', 'Anual'),
      etapa 		CHAR(1),
      nota 			CHAR(2),
      descripcion 	VARCHAR(100) NOT NULL,
      PRIMARY KEY(id),
      INDEX i_alumno_id(alumno_id),
      INDEX i_docente_id(docente_id),
      INDEX i_materia_id(materia_id),
      FOREIGN KEY(alumno_id)
        REFERENCES alumnos(id),
      FOREIGN KEY(docente_id)
        REFERENCES docentes(id),
      FOREIGN KEY(materia_id)
        REFERENCES materias(id)
);

CREATE TABLE IF NOT EXISTS sanciones
(
    id 				INT UNSIGNED NOT NULL AUTO_INCREMENT,
    alumno_id 		INT UNSIGNED NOT NULL,
    docente_id 		INT UNSIGNED NOT NULL,
    tipo_sancion 	ENUM('Leve', 'Moderada', 'Grave') NOT NULL,
    descripcion 	VARCHAR(100) NOT NULL,
    fecha 			DATE NOT NULL,
    PRIMARY KEY(id),
    INDEX i_alumno_id(alumno_id),
    INDEX i_docente_id(docente_id),
    FOREIGN KEY(alumno_id)
      REFERENCES alumnos(id),
    FOREIGN KEY(docente_id)
      REFERENCES docentes(id)
);

CREATE TABLE IF NOT EXISTS periodos
(
    id 				INT UNSIGNED NOT NULL AUTO_INCREMENT,
    fecha_inicio 	DATE NOT NULL,
    fecha_fin 		DATE NOT NULL,
    descripcion 	VARCHAR(100) NOT NULL,
    tipo			ENUM('Ciclo Lectivo', 'Mesa'),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS mesa_examen_maestro
(
    id 			INT UNSIGNED NOT NULL AUTO_INCREMENT,
    periodo_id 	INT UNSIGNED NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    estado		BOOLEAN NOT NULL,
    PRIMARY KEY(id),
    INDEX i_periodo_id(periodo_id),
    FOREIGN KEY(periodo_id)
      REFERENCES periodos(id)
);

CREATE TABLE IF NOT EXISTS mesa_examen_novedad
(
    id 				INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    maestro_id 		INT UNSIGNED NOT NULL,
    materia_id 		INT UNSIGNED NOT NULL,
    fecha 			DATE,
    llamado 		ENUM('Primer', 'Segundo'),
    examinador1 	VARCHAR(100) NOT NULL,
    examinador2 	VARCHAR(100) NOT NULL,
    examinador3 	VARCHAR(100) NOT NULL,
    INDEX i_maestro_id(maestro_id),
    INDEX i_materia_id(materia_id),
    FOREIGN KEY(maestro_id)
      REFERENCES mesa_examen_maestro(id),
    FOREIGN KEY(materia_id)
      REFERENCES materias(id)
);

CREATE TABLE IF NOT EXISTS alumno_mesa
(
    id 			INT UNSIGNED NOT NULL AUTO_INCREMENT,
    alumno_id 	INT UNSIGNED NOT NULL,
    mesa_id 	INT UNSIGNED NOT NULL,
    PRIMARY KEY(id),
    INDEX i_alumno_id(alumno_id),
    INDEX i_mesa_id(mesa_id),
    FOREIGN KEY(alumno_id)
      REFERENCES alumnos(id),
    FOREIGN KEY(mesa_id)
      REFERENCES mesa_examen_novedad(id)
);

CREATE TABLE IF NOT EXISTS clases
(
    id 			    INT UNSIGNED NOT NULL AUTO_INCREMENT,
    docente_id      INT(11) UNSIGNED NOT NULL,
    materia_id      INT UNSIGNED NOT NULL,
    periodo_id      INT UNSIGNED NOT NULL,
    curso_id        INT UNSIGNED NOT NULL,
    dias    	    ENUM('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado') NOT NULL,
    horario_inicio 	TIME NOT NULL,
    horario_fin     TIME NOT NULL,
    estado		    BOOLEAN NOT NULL,
    PRIMARY KEY(id),
    INDEX i_docente_id(docente_id),
    INDEX i_materia_id(materia_id),
    INDEX i_periodo_id(periodo_id),
    INDEX i_curso_id(curso_id),
    FOREIGN KEY(docente_id)
      REFERENCES docentes(id),
    FOREIGN KEY(materia_id)
      REFERENCES materias(id),
    FOREIGN KEY(periodo_id)
      REFERENCES periodos(id),
    FOREIGN KEY(curso_id)
      REFERENCES cursos(id)
);

CREATE TABLE IF NOT EXISTS asistencias
(
    id 			INT UNSIGNED NOT NULL AUTO_INCREMENT,
    alumno_id 	INT(11) UNSIGNED NOT NULL,
    clase_id 	INT UNSIGNED NOT NULL,
    estado 		ENUM('Presente', 'Ausente', 'Retraso'),
    PRIMARY KEY(id),
    INDEX i_alumno_id(alumno_id),
    INDEX i_clase_id(clase_id),
    FOREIGN KEY(alumno_id)
      REFERENCES alumnos(id),
    FOREIGN KEY(clase_id)
      REFERENCES clases(id)
);