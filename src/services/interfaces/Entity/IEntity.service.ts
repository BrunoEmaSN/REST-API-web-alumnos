interface IEntityService{
    getAll(): Promise<Array<any>>,
    checkValidation(req: Request): Promise<void>
}

export default IEntityService;