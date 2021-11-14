import IEntityService from "./Entity/IEntity.service";

interface IUsersService extends IEntityService{
    getCurrentUser(req: any): Promise<any>,
    create(req: any): Promise<string>,
    update(req: any): Promise<any>,
    delete(req: any): Promise<string>,
    login(req: any): Promise<any>
}

export default IUsersService;