import AlumnosMateriasService from "../services/AlumnosMaterias.service";
import IAlumnosMateriasService from "../services/interfaces/IAlumnosMaterias.service";

class AlumnosMateriasController{
    private _alumnosMateriasService: IAlumnosMateriasService;
    constructor(alumnosMateriasService: IAlumnosMateriasService){
        this._alumnosMateriasService = alumnosMateriasService;
    }

    getByAlumno = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._alumnosMateriasService.getByAlumno(req))
    }

    create = async (
        req: { body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; },
        next: any
    ) => {
        res.status(201).send(await this._alumnosMateriasService.create(req));
    }

    update = async (
        req: { params: { id: any; }; body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { send: (arg0: { message: string; info: any; }) => void; },
        next: any
    ) => {
        res.send(await this._alumnosMateriasService.update(req));
    }

    delete = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: string) => void; },
        next: any
    ) => {
        res.send(await this._alumnosMateriasService.delete(req));
    }
}

export default new AlumnosMateriasController(AlumnosMateriasService);