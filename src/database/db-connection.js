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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class DB {
    constructor() {
        this.checkConnection = () => {
            this.db.getConnection((err, connection) => {
                if (err) {
                    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                        console.error('Database connection was closed.');
                    }
                    if (err.code === 'ER_CON_COUNT_ERROR') {
                        console.error('Database has too many connections.');
                    }
                    if (err.code === 'ECONNREFUSED') {
                        console.error('Database connection was refused');
                    }
                }
                if (connection) {
                    connection.release();
                }
                return;
            });
        };
        this.query = (sql, values) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const callback = (error, result) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(result);
                };
                this.db.execute(sql, values, callback);
            }).catch(err => {
                const mysqlErrorList = Object.keys(HttpStatusCodes);
                err.status = mysqlErrorList.includes(err.code) ? HttpStatusCodes[err.code] : err.status;
                throw err;
            });
        });
        this.db = mysql2_1.default.createPool({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || '',
            database: process.env.DB_NAME || 'test'
        });
        this.checkConnection();
    }
}
const HttpStatusCodes = Object.freeze({
    ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 442,
    ER_DUP_ENTRY: 409
});
module.exports = new DB().query;
