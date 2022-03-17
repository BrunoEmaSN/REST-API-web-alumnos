interface IAlumnosTutoresService{
    getByAlumno(a: any): Promise<any>
    create(a: any): Promise<string>,
    update(req: { req: { params: { id: any; }; body: ArrayLike<unknown> | { [s: string]: unknown; }; }; res: { send: (arg0: { message: string; info: any; }) => void; }; next: any; }): string | PromiseLike<string>;
    delete(a: any): Promise<string>,
    checkValidation(a: Request): void
}

export default IAlumnosTutoresService;