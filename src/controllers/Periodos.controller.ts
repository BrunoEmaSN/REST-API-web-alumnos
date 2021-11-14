import IPeriodosService from "../services/interfaces/IPeriodos.service";
import PeriodosService from "../services/Periodos.service";

class PeriodosController {
    private _periodosService: IPeriodosService;
    constructor(periodosService: IPeriodosService){
        this._periodosService = periodosService;
    }

    getAll = async (
        req: { body: { type: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._periodosService.getAll(req));
    }

    create = async (
        req: { body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; },
        next: any
    ) => {
        res.status(201).send(await this._periodosService.create(req));
    }
}

export default new PeriodosController(PeriodosService);