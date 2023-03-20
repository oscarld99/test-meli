import { host, ResponseStatus } from 'config/server'


const baseURL = host

interface IMultiProps {
    [x: string]: any
}

const headers = (headers?: IMultiProps): any => ({
    'Content-Type': 'application/json',
    encrypted: true,
    ...headers
})

export interface ResponseWS<T> {
    status: number
    data: T
}

export enum MESSAGES_HTTP {
    NETWORK_ERROR = 'NO TIENES INTERNET',
    DEFAULT_ERROR = 'ERROR TECNICO'
}

interface ErrorResponseHttpType {
    status: number
    data: any
}

export class ErrorResponseHttp extends Error {
    constructor(readonly message: string, readonly error: ErrorResponseHttpType) {
        super(message)
    }
}

export const SuccessResponseStatus = [ResponseStatus.OK, ResponseStatus.CREATED]
export const ErrorResponseStatus = [
    ResponseStatus.BAD_REQUEST,
    ResponseStatus.NOT_FOUND,
    ResponseStatus.INTERNAL_ERROR,
    ResponseStatus.UNAUTHORIZED,
    ResponseStatus.FORBIDDEN
]

const get = async <T>(url: string, aditionalHeaders?: IMultiProps): Promise<ResponseWS<T>> => {
    try {
        const response = await fetch([`${baseURL}`, url].join('/'), {
            method: 'GET',
            headers: headers(aditionalHeaders)
        })
        const resp = await response.json()
        const data = {
            status: response.status,
            data: resp
        }

        if (!SuccessResponseStatus.includes(response.status)) throw new ErrorResponseHttp('HTTP GET', data)
        return resp as ResponseWS<T>
    } catch (error: any) {
        const resp = {
            status: 500,
            data: { mensajeError: MESSAGES_HTTP.DEFAULT_ERROR }
        }
        if (String(error).includes('Failed to fetch')) {
            resp.data.mensajeError = MESSAGES_HTTP.DEFAULT_ERROR
            throw new ErrorResponseHttp('GET', resp)
        }
        if (ErrorResponseStatus.includes(error.error.status)) {
            throw new ErrorResponseHttp('GET', error.error)
        }
        throw new ErrorResponseHttp('GET', resp)
    }
}

const client = {
    get
}

export default client
