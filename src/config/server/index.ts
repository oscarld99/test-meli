

export const versionApp = '1.0'
export const versionCode = '1.0.0'
export const aplicacion = process.env.REACT_APP_APPLICATION
export const host = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api` as string

export enum ResponseStatus {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    PAYLOAD_TOO_LARGE = 413,
    INTERNAL_ERROR = 500
}