const HttpException      = require('./utils/HttpException.utils');
const errorMiddleware    = require('./middleware/error.middleware');
const userRouter         = require('./routes/user.route');
const aulaRouter         = require('./routes/aula.route');
const calificacionRouter = require('./routes/calificacion.route');
const claseRouter        = require('./routes/clase.route');
const cursoRouter        = require('./routes/curso.route');
const alumnoRouter       = require('./routes/alumno.route');
const docenteRouter      = require('./routes/docente.route');
const materiaRouter      = require('./routes/materia.route');
const mesaExamenRouter   = require('./routes/mesaExamen.route');
const periodoRouter      = require('./routes/periodo.route');
const sancionRouter      = require('./routes/sancion.route');
const tutorRouter        = require('./routes/tutor.route');
const express            = require("express");
const cors               = require("cors");
const app                = express();
const dotenv             = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(cors());

app.options("*", cors());


const port = Number(process.env.PORT || 3331);

app.use(`/api/web/users`, userRouter);
app.use(`/api/web/aulas`, aulaRouter);
app.use(`/api/web/alumnos`, alumnoRouter);
app.use(`/api/web/calificaciones`, calificacionRouter);
app.use(`/api/web/clases`, claseRouter);
app.use(`/api/web/cursos`, cursoRouter);
app.use(`/api/web/docentes`, docenteRouter);
app.use(`/api/web/materias`, materiaRouter);
app.use(`/api/web/mesasExamenes`, mesaExamenRouter);
app.use(`/api/web/periodos`, periodoRouter);
app.use(`/api/web/sanciones`, sancionRouter);
app.use(`/api/web/tutores`, tutorRouter);

app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
});

app.use(errorMiddleware);

app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));

module.exports = app;
