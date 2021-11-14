interface IAlumnnosMateriasService{
    getByAlumno(a: any): Promise<any>
    create(a: any): Promise<string>,
    update(a: any): Promise<any>,
    delete(a: any): Promise<string>,
    checkValidation(a: Request): void
}

export default IAlumnnosMateriasService;