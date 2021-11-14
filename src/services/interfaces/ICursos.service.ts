import IEntityService from "./Entity/IEntity.service";

interface ICursosService extends IEntityService{
    getById(req: any): Promise<any>,
    create(req: any): Promise<string>,
    update(req: any): Promise<any>,
    delete(req: any): Promise<string>
}

export default ICursosService;