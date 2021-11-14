interface IPeriodosService {
    getAll(req: any): Promise<any>,
    create(req: any): Promise<string>,
    checkValidation(req: any): Promise<void>
}

export default IPeriodosService;