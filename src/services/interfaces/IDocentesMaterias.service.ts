interface IDocentesMateriasService{
    getByDocente(req: any): Promise<any>,
    create(req: any): Promise<string>,
    update(req: any): Promise<any>,
    delete(req: any): Promise<string>,
    checkValidation(req: Request): Promise<void>
}

export default IDocentesMateriasService;