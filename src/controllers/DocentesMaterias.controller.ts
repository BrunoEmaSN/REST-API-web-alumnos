import DocentesMateriasService from "../services/DocentesMaterias.service";
import IDocentesMateriasService from "../services/interfaces/IDocentesMaterias.service";

class DocentesMateriasController {
    private _docentesMateriasService: IDocentesMateriasService;
    constructor(docentesMateriasService: IDocentesMateriasService){
        this._docentesMateriasService = docentesMateriasService;
    }

    getByDocente = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._docentesMateriasService.getByDocente(req));
    }

    create = async (
        req: { body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; },
        next: any
    ) => {
        res.status(201).send(await this._docentesMateriasService.create(req));
    }

    update = async (
        req: { params: { id: any; }; body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { send: (arg0: { message: string; info: any; }) => void; },
        next: any
    ) => {
        res.send(await this._docentesMateriasService.update(req));
    }

    delete = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: string) => void; },
        next: any
    ) => {
        res.send(await this._docentesMateriasService.delete(req));
    }
}

export default new DocentesMateriasController(DocentesMateriasService);