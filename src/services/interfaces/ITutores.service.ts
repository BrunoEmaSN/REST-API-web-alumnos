import IEntityService from "./Entity/IEntity.service";

interface ITutoresService extends IEntityService{
    getById(req: any): Promise<any>,
    getAllWithPareja(): Promise<any>,
    getByIdWithPareja(req: any): Promise<any>,
    create(req: any): Promise<string>,
    update(req: any): Promise<any>,
    delete(req: any): Promise<string>,
    addPareja(req: any): Promise<string>,
    removePareja(req: any): Promise<string>
}

export default ITutoresService;