import { Request } from 'express'

export enum Role {
  Admin = 'admin',
  Viewer = 'viewer',
  Editor = 'editor'
}

export type Roles = Role.Admin | Role.Viewer | Role.Editor

export interface UserEntity {
  _id?: String | undefined
  name: string
  surname: string
  email: string
  password: string
  createAt: Date
  role?: Roles
}
export interface IEPayloadJwt extends UserEntity {
  exp?: number | string
}

export interface IERequest extends Request {
  user?: UserEntity | undefined
}

export type LoginEntity = Pick<UserEntity, 'email' | 'password'>
