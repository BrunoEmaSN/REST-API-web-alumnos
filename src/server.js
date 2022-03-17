"use strict";
const HttpException = require('./utils/HttpException.utils');
const errorMiddleware = require('./middleware/error.middleware');
const AlumnoRouter = require('./routes/Alumno.route.js');
const AulaRouter = require('./routes/Aula.route');
const CalificacionRouter = require('./routes/Calificacion.route');
const ClaseRouter = require('./routes/Clase.route');
const CursoRouter = require('./routes/Curso.route');
const DocenteRouter = require('./routes/Docente.route');
const MateriaRouter = require('./routes/Materia.route');
const MesaExamenRouter = require('./routes/MesaExamen.route');
const PeriodoRouter = require('./routes/Periodo.route');
const SancionRouter = require('./routes/Sancion.route');
const TutorRouter = require('./routes/Tutor.route');
const UserRouter = require('./routes/User.route');
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
app.use(cors());
app.options("*", cors());
const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);
app.use(`/api/web/alumnos`, AlumnoRouter);
app.use(`/api/web/aulas`, AulaRouter);
app.use(`/api/web/calificaciones`, CalificacionRouter);
app.use(`/api/web/clases`, ClaseRouter);
app.use(`/api/web/cursos`, CursoRouter);
app.use(`/api/web/docentes`, DocenteRouter);
app.use(`/api/web/materias`, MateriaRouter);
app.use(`/api/web/mesasExamenes`, MesaExamenRouter);
app.use(`/api/web/periodos`, PeriodoRouter);
app.use(`/api/web/sanciones`, SancionRouter);
app.use(`/api/web/tutores`, TutorRouter);
app.use(`/api/web/users`, UserRouter);
app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found', null);
    next(err);
});
app.use(errorMiddleware);
app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
module.exports = app;
