import CalificacionesService from "../services/Calificaciones.service";
import ICalificacionesService from "../services/interfaces/ICalificaciones.service";

class CalificacionesController {
    private _calificacionesService: ICalificacionesService;
    constructor(calificacionesService:ICalificacionesService){
        this._calificacionesService = calificacionesService;
    }

    getAll = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._calificacionesService.getAll());
    }

    getById = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._calificacionesService.getById(req));
    }

    update = async (
        req: { params: { id: any; }; body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { send: (arg0: { message: string; info: any; }) => void; },
        next: any
    ) => {
        res.send(await this._calificacionesService.update(req));
    }
}

export default new CalificacionesController(CalificacionesService);