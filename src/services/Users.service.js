"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_utils_1 = __importDefault(require("../utils/HttpException.utils"));
const User_model_1 = __importDefault(require("../models/User.model"));
const express_validator_1 = require("express-validator");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
class UsersService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const userList = yield User_model_1.default.getAll();
            if (!userList.length) {
                throw new HttpException_utils_1.default(404, 'Users not found', null);
            }
            let result = userList.map((user) => {
                const { password } = user, userWithoutPassword = __rest(user, ["password"]);
                return userWithoutPassword;
            });
            return result;
        });
        this.getCurrentUser = (req) => __awaiter(this, void 0, void 0, function* () {
            const _a = req.currentUser, { password } = _a, userWithoutPassword = __rest(_a, ["password"]);
            return userWithoutPassword;
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            yield this.hashPassword(req);
            const result = yield User_model_1.default.create(req.body);
            if (!result) {
                throw new HttpException_utils_1.default(500, 'Something went wrong', null);
            }
            return 'User was created';
        });
        this.update = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            yield this.hashPassword(req);
            const _b = req.body, { confirm_password } = _b, restOfUpdate = __rest(_b, ["confirm_password"]);
            const result = yield User_model_1.default.update(restOfUpdate, req.params.id);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Something went wrong', null);
            }
            const { affectedRows, info } = result;
            const message = !affectedRows ? 'User not found' :
                affectedRows ? 'User update successfuly' : 'Update faild';
            return { message, info };
        });
        this.delete = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield User_model_1.default.delete(req.params.id);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'User not found', null);
            }
            return 'User has been deleted';
        });
        this.login = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const { username, password: pass } = req.body;
            const user = yield User_model_1.default.find({ username });
            if (!user) {
                throw new HttpException_utils_1.default(401, 'Unable to login', null);
            }
            const isMatch = yield bcryptjs.compare(pass, user.password);
            if (!isMatch) {
                throw new HttpException_utils_1.default(401, 'Incorrect password', null);
            }
            const secretKey = process.env.SECRET_JWT || '';
            const token = jwt.sign({ user_id: user.id.toString() }, secretKey, {
                expiresIn: '24h'
            });
            const { password } = user, userWithoutPassword = __rest(user, ["password"]);
            return Object.assign(Object.assign({}, userWithoutPassword), { token });
        });
        this.checkValidation = (req) => __awaiter(this, void 0, void 0, function* () {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                throw new HttpException_utils_1.default(400, 'Validation faild', errors);
            }
        });
        this.hashPassword = (req) => __awaiter(this, void 0, void 0, function* () {
            if (req.body.password) {
                req.body.password = yield bcryptjs.hash(req.body.password, 8);
            }
        });
    }
}
exports.default = new UsersService();
