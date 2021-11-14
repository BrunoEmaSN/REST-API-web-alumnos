import IEntityService from "./Entity/IEntity.service";

interface ISancionesService extends IEntityService{
    getById(req: any): Promise<any>,
    update(req: any): Promise<any>
}

export default ISancionesService;