import DocentesService from "../services/Docentes.service";
import IDocentesService from "../services/interfaces/IDocentes.service";

class DocentesController {
    private _docentesService: IDocentesService;
    constructor(docentesService: IDocentesService){
        this._docentesService = docentesService;
    }

    getAll = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._docentesService.getAll());
    }

    getById = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._docentesService.getById(req));
    }

    create = async (
        req: { body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; },
        next: any
    ) => {
        res.status(201).send(await this._docentesService.create(req));
    }

    update = async (
        req: { params: { id: any; }; body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { send: (arg0: { message: string; info: any; }) => void; },
        next: any
    ) => {
        res.send(await this._docentesService.update(req));
    }

    delete = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: string) => void; },
        next: any
    ) => {
        res.send(await this._docentesService.delete(req));
    }
}

export default new DocentesController(DocentesService);