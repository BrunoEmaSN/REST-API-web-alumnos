import IEntityService from "./Entity/IEntity.service";

interface IMesasExamenesService extends IEntityService{
    getById(req: any): Promise<any>,
    create(req: any): Promise<string>
    update(req: any): Promise<any>,
    delete(req: any): Promise<string>,
    addNovedad(req: any): Promise<string>,
    removeNovedad(req: any): Promise<string>
}

export default IMesasExamenesService;