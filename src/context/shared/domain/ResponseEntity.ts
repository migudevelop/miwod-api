import { Response } from 'express'

export type ResponseOrNullEntity = Response<any, Record<string, any>> | null
