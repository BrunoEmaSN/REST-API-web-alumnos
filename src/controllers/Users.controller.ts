import IUsersService from "../services/interfaces/IUsers.service";
import UsersService from "../services/Users.service";

class UsersController {
    private _usersService: IUsersService;
    constructor(usersService: IUsersService){
        this._usersService = usersService;
    }
    getAll = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._usersService.getAll());
    }

    getCurrentUser = async (
        req: { currentUser: any; },
        res: { send: (arg0: unknown) => void; },
        next: any
    ) => {
        res.send(await this._usersService.getCurrentUser(req));
    }

    create = async (
        req: { body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; },
        next: any
    ) => {
        res.status(201).send(await this._usersService.create(req));
    }

    update = async (
        req: { params: { id: any; }; body: ArrayLike<unknown> | { [s: string]: unknown; }; },
        res: { send: (arg0: { message: string; info: any; }) => void; },
        next: any
    ) =>{
        res.send(await this._usersService.update(req));
    }

    delete = async (
        req: { params: { id: any; }; },
        res: { send: (arg0: string) => void; },
        next: any
    ) => {
        res.send(await this._usersService.delete(req));
    }

    login = async (
        req: any,
        res: { send: (arg0: any) => void; },
        next: any
    ) => {
        res.send(await this._usersService.login(req));
    }
}

export default new UsersController(UsersService);