class HttpException extends Error{
    _status: any;
    _data: any;
    _message: any;
    constructor(status: any, message: string | undefined, data: any){
        super(message);
        this._status     = status;
        this._message    = message;
        this._data       = data;
    }
}

export default HttpException;