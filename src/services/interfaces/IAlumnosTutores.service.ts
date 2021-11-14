interface IAlumnosTutoresService{
    getByAlumno(a: any): Promise<any>
    create(a: any): Promise<string>,
    delete(a: any): Promise<string>,
    checkValidation(a: Request): void
}

export default IAlumnosTutoresService;