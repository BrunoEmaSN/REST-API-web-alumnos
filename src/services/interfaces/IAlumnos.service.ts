import IEntityService from "./Entity/IEntity.service";

interface IAlumnosService extends IEntityService{
    getById(a: any): Promise<any>,
    getByCurso(a: any): Promise<any>,
    create(a: any): Promise<string>,
    update(a: any): Promise<any>,
    delete(a: any): Promise<string>,
}

export default IAlumnosService;