export class ApiError extends Error {
    constructor(errorCode = 500, message) {
        super(message);
        this.errorCode = errorCode;
        Error.captureStackTrace(this, ApiError);
    }
}