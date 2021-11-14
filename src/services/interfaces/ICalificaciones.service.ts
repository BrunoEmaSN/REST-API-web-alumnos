import IEntityService from "./Entity/IEntity.service";

interface ICalificacionesService extends IEntityService{
    getById(req:any): Promise<any>,
    update(req: any): Promise<any>
}

export default ICalificacionesService;