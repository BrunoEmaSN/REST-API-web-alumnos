import IUsersService from "./interfaces/IUsers.service";
import HttpException from "../utils/HttpException.utils";
import UserModel from "../models/User.model";
import { validationResult } from "express-validator";
const bcryptjs = require('bcryptjs');
const jwt      = require('jsonwebtoken');
const dotenv   = require('dotenv');
dotenv.config();

class UsersService implements IUsersService {
    getAll = async (): Promise<any> => {
        const userList = await UserModel.getAll();
        if(!userList.length){
            throw new HttpException(404, 'Users not found', null);
        }

        let result = userList.map((user: { [x: string]: any; password: any; }) => {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        });

        return result;
    }

    getCurrentUser = async (req: any): Promise<any> => {
        const { password, ...userWithoutPassword } = req.currentUser;

        return userWithoutPassword;
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);

        await this.hashPassword(req);

        const result = await UserModel.create(req.body);

        if(!result){
            throw new HttpException(500, 'Something went wrong', null);
        }

        return 'User was created';
    }

    update = async (req: any): Promise<any> =>{
        this.checkValidation(req);

        await this.hashPassword(req);

        const { confirm_password, ...restOfUpdate } = req.body;

        const result = await UserModel.update(restOfUpdate, req.params.id);

        if(!result){
            throw new HttpException(404, 'Something went wrong', null);
        }

        const { affectedRows, info } = result;

        const message =  !affectedRows ? 'User not found' :
            affectedRows ? 'User update successfuly' : 'Update faild';

        return {message, info};
    }

    delete = async (req: any): Promise<string> => {
        const result = await UserModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'User not found', null);
        }
        
        return 'User has been deleted';
    }

    login = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const { username, password: pass } = req.body;
        const user = await UserModel.find({username});
        if(!user){
            throw new HttpException(401, 'Unable to login', null);
        }

        const isMatch = await bcryptjs.compare(pass, user.password);
        if(!isMatch){
            throw new HttpException(401, 'Incorrect password', null);
        }

        const secretKey = process.env.SECRET_JWT || '';
        const token     = jwt.sign({user_id: user.id.toString()}, secretKey, {
            expiresIn: '24h'
        });

        const {password, ...userWithoutPassword} = user;

        return {...userWithoutPassword, token};
    }

    checkValidation = async (req: any): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }

    hashPassword = async (req: any): Promise<void> => {
        if(req.body.password){
            req.body.password = await bcryptjs.hash(req.body.password, 8);
        }
    }
}

export default new UsersService();