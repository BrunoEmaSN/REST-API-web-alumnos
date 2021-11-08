CALL add_aula(
	"Aula 1", #descripcion
    20        #capacidad
);

CALL add_curso(
	1,        #aula_id
    "P",      #nivel
    "Mañana", #turno
    1,        #grado_ano
    "A"       #division
);

CALL add_alumno(
	2,                 #documento
	"DNI",             #tipo_documento
	"Joseph",          #nombre
	"Joestar",         #apellido
	"1920/09/12",      #fecha_nacimiento
	"Masculino",       #sexo
	"Inglaterra",      #lugar_nacimiento
	"123456789012345", #telefono_fijo
	"123456789012345", #telefono_movil
	"New York",        #domicilio
	1,                 #numero
	null,              #piso
	null,              #departamento
    1,                 #curso_id
    "2021-03-01",      #fecha_agregado
    true,              #partida_nacimiento
    true,              #fotocopia_dni
    true,              #fotocopia_cuil
    true,              #foto_4x4
    true,              #contrato
    null,              #observaciones
    "Regular"          #condicion
);

CALL add_docente(
	3,                        #documento
	"DNI",                    #tipo_documento
	"Jotaro",                 #nombre
	"Kujo",                   #apellido
	"1986/07/20",             #fecha_nacimiento
	"Masculino",              #sexo
	"Japon",                  #lugar_nacimiento
	"123456789012345",        #telefono_fijo
	"123456789012345",        #telefono_movil
	"Tokyo",                  #domicilio
	1,                        #numero
	null,                     #departamento
	null,                     #piso
    "2021/10/22",             #fecha_agregado
    "sede 1",                 #sede
    "Profesor Maritimo",      #titulo
    20420848081,              #cuit
    0,                        #subencionado
    1,                        #contratado
    0,                        #monotributista
    "le gustan los delfines"  #observaciones
);

CALL add_docente(
	4,                            #documento
	"DNI",                        #tipo_documento
	"Josuke",                     #nombre
	"Higashikata",                #apellido
	"1999/07/20",                 #fecha_nacimiento
	"Masculino",                  #sexo
	"Japon",                      #lugar_nacimiento
	"123456789012345",            #telefono_fijo
	"123456789012345",            #telefono_movil
	"Morio",                      #domicilio
	1,                            #numero
	null,                         #departamento
	null,                         #piso
    "2021/10/22",                 #fecha_agregado
    "sede 1",                     #sede
    "Profesor Maritimo",          #titulo
    20420848082,                  #cuit
    0,                            #subencionado
    1,                            #contratado
    0,                            #monotributista
    "no hablas mal de su peinado" #observaciones
);

CALL add_docente(
	5,                           #documento
	"DNI",                       #tipo_documento
	"Giorno",                    #nombre
	"Giovana",                   #apellido
	"2000/08/20",                #fecha_nacimiento
	"Masculino",                 #sexo
	"Italia",                    #lugar_nacimiento
	"123456789012345",           #telefono_fijo
	"123456789012345",           #telefono_movil
	"Roma",                      #domicilio
	1,                           #numero
	null,                        #departamento
	null,                        #piso
    "2021/10/22",                #fecha_agregado
    "sede 1",                    #sede
    "Profesor Maritimo",         #titulo
    20420848083,                 #cuit
    0,                           #subencionado
    1,                           #contratado
    0,                           #monotributista
    "detesta repetir las cosas"  #observaciones
);

CALL add_docente(
	6,                      #documento
	"DNI",                  #tipo_documento
	"Jolyne",               #nombre
	"Kujo",                 #apellido
	"2000/09/20",           #fecha_nacimiento
	"Masculino",            #sexo
	"Estado Unidos",        #lugar_nacimiento
	"123456789012345",      #telefono_fijo
	"123456789012345",      #telefono_movil
	"California",           #domicilio
	1,                      #numero
	null,                   #departamento
	null,                   #piso
    "2021/10/22",           #fecha_agregado
    "sede 1",               #sede
    "Profesora Maritima",   #titulo
    20420848084,            #cuit
    0,                      #subencionado
    1,                      #contratado
    0,                      #monotributista
    "se peleo con su novio" #observaciones
);

CALL add_materia(
	"Ciencias Maritimas", #descripcion
    "Anual",              #regimen
    "Plan Prueba"         #plan_estudio
);

CALL add_calificacion(
	2,                    #alumno_id
    3,                    #docente_id
    1,                    #materia_id
    'Anual',              #regimen
    '1',                  #etapa
    '10',                 #nota
    'examen de derivadas' #descripcion
);

CALL add_sancion(
	2,                                    #alumno_id
    3,                                    #docente_id
    'Grave',                              #tipo_sancion
    'ver a su maestra cambiando de ropa', #descripcion
    '2021/10/22'                          #fecha
);

CALL add_periodo(
	"2021/11/01",                      #fecha_inicio
    "2021/12/20",                      #fecha_fin
    "Mesa Noviembre - Diciembre 2021", #descripcion
    "Mesa"                             #tipo
);

CALL add_periodo(
	"2021/03/01",         #fecha_inicio
    "2022/02/28",         #fecha_fin
    "Ciclo Lectivo 2021", #descripcion
    "Ciclo Lectivo"       #tipo
);

CALL add_clase(
	3,       #docente_id
    1,       #materia_id
    1,       #curso_id
    2,       #periodo_id
    "Lunes", #dias
    "7:30",  #horario_inicio
    "9:10"   #horario_fin
);

CALL add_clase(
	3,         #docente_id
    1,         #materia_id
    1,         #curso_id
    2,         #periodo_id
    "Viernes", #dias
    "7:30",    #horario_inicio
    "9:10"     #horario_fin
);

CALL add_mesa_examen_maestro(
	1,                                #periodo_id
	"mesa Noviembre - Diciembre 2021" #descripcion
);

CALL add_mesa_examen_novedad(
	1,            #maestro_id
	1,            #materia_id
	"2021/11/01", #fecha
	"Primer",     #llamado
	"Josuke",     #examinador1
	"Jolyne",     #examinador2
	"Jotaro"      #examinador3
);

CALL add_mesa_examen_novedad(
	1,            #maestro_id
    1,            #materia_id
    "2021/12/20", #fecha
    "Segundo",    #llamado
    "Josuke",     #examinador1
    "Jolyne",     #examinador2
    "Jotaro"      #examinador3
);