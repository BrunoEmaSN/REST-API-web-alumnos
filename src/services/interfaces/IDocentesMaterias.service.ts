interface IDocentesMateriasService{
    getByDocente(req: any): Promise<any>,
    create(req: any): Promise<string>,
    delete(req: any): Promise<string>,
    checkValidation(req: Request): Promise<void>
}

export default IDocentesMateriasService;