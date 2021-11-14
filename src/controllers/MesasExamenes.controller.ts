import IMesasExamenesService from "../services/interfaces/IMesasExamenes.service";
import MesasExamenesService from "../services/MesasExamenesService";

class MesasExamenesController {
    private _mesasExamenesService: IMesasExamenesService;
    constructor(mesasExamenesService: IMesasExamenesService){
        this._mesasExamenesService = mesasExamenesService;
    }

    getAll = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._mesasExamenesService.getAll());
    }

    getById = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._mesasExamenesService.getById(req));
    }

    create = async (
        req: { body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; },
        next: any
    ) => {
        res.status(201).send(await this._mesasExamenesService.create(req));
    }

    update = async (
        req: { params: { id: any; }; body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { send: (arg0: { message: string; info: any; }) => void; },
        next: any
    ) => {
        res.send(await this._mesasExamenesService.update(req));
    }

    delete = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: string) => void; },
        next: any
    ) => {
        res.send(await this._mesasExamenesService.delete(req));
    }
}

export default new MesasExamenesController(MesasExamenesService);