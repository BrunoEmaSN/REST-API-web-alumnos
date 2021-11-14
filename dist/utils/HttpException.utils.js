"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpException extends Error {
    constructor(status, message, data) {
        super(message);
        this._status = status;
        this._message = message;
        this._data = data;
    }
}
exports.default = HttpException;
//# sourceMappingURL=HttpException.utils.js.map