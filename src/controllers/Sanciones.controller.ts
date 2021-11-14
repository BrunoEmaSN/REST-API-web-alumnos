import ISancionesService from "../services/interfaces/ISanciones.service";
import SancionesService from "../services/Sanciones.service";

class SancionesController {
    private _sancionesService: ISancionesService;
    constructor(sancionesService: ISancionesService){
        this._sancionesService = sancionesService;
    }

    getAll = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._sancionesService.getAll());
    }

    getById = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._sancionesService.getById(req));
    }

    update = async (
        req: { params: { id: any; }; body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { send: (arg0: { message: string; info: any; }) => void; },
        next: any
    ) => {
        res.send(await this._sancionesService.update(req));
    }
}

export default new SancionesController(SancionesService);