import AlumnosService from "../services/Alumnos.service";
import IAlumnosService from "../services/interfaces/IAlumnos.service";

class AlumnosController{
    private _alumnosService: IAlumnosService;
    constructor(IAlumnosService: IAlumnosService){
        this._alumnosService = IAlumnosService;
    }
    
    getAll = async (req: any, res: { send: (arg0: unknown) => void; }, next: any) => {
        res.send(await this._alumnosService.getAll());
    }

    getById = async (req: { params: { id: any; }; }, res: { send: (arg0: unknown) => void; }, next: any) => {
        res.send(await this._alumnosService.getById(req));
    }


    getByCurso = async (req: { params: { curso_id: any; }; }, res: { send: (arg0: unknown) => void; }, next: any) => {
        res.send(await this._alumnosService.getByCurso(req));
    }

    create = async (req: { body: ArrayLike<unknown> | { [s: string]: unknown; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }, next: any) => {
       res.status(201).send(await this._alumnosService.create(req));
    }

    update = async (req: { params: { id: any; }; body: ArrayLike<unknown> | { [s: string]: unknown; }; }, res: { send: (arg0: { message: string; info: any; }) => void; }, next: any) => {
        res.send(await this._alumnosService.update(req));
    }

    delete = async (req: { params: { id: any; }; }, res: { send: (arg0: string) => void; }, next: any) => {
        res.send(await this._alumnosService.delete(req));
    }
}

export default new AlumnosController(AlumnosService);