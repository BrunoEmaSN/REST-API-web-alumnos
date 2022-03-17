import AlumnosTutoresService from "../services/AlumnosTutores.service";
import IAlumnosTutoresService from "../services/interfaces/IAlumnosTutores.service";

class AlumnosTutoresController{
    private _alumnosTutoresService: IAlumnosTutoresService;
    constructor(alumnosTutoresService: IAlumnosTutoresService){
        this._alumnosTutoresService = alumnosTutoresService;
    }
    getByAlumno = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._alumnosTutoresService.getByAlumno(req));
    }

    create = async (
        req: { body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; },
        next: any
    )=> {
        res.status(201).send(await this._alumnosTutoresService.create(req));
    }

    update = async (
        req: { req: { params: { id: any; }; body: ArrayLike<unknown> | { [s: string]: unknown; }; }, res: { send: (arg0: { message: string; info: any; }) => void; }, next: any},
        res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; },
        next: any
    )=> {
        res.status(201).send(await this._alumnosTutoresService.update(req));
    }

    delete = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: string) => void; },
        next: any
    ) => {
        res.send(await this._alumnosTutoresService.delete(req));
    }

}

export default new AlumnosTutoresController(AlumnosTutoresService);