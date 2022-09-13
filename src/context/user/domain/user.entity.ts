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
  createAt?: Date
  role?: Roles
}
export interface IEPayloadJwt extends UserEntity {
  exp?: number | string
}

export interface UserRequestEntity extends Request {
  user?: UserEntity | undefined
}

export type LoginEntityParams = Pick<UserEntity, 'email' | 'password'>

export interface UserIdEntityParams {
  params: { userId: string }
}
