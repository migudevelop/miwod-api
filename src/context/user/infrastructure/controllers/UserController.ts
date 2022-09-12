import { Request, Response } from 'express'
import UserUseCase from '@user/application/UserUseCase'
import { UserIdEntityParams, UserEntity } from '@user/domain/index'
import { UserResponseMessage } from '@user/infrastructure/utils/index'
import { ResponseOrNullEntity } from '@shared/domain'

export default class UserController {
  private readonly userUseCase: UserUseCase

  constructor(userUseCase: UserUseCase) {
    this.userUseCase = userUseCase
  }

  createUser = async (
    { body }: { body: UserEntity },
    res: Response
  ): Promise<UserEntity | ResponseOrNullEntity> => {
    const responseMessage = new UserResponseMessage(res)
    return await this.userUseCase.createUser(body, responseMessage)
  }

  deleteUser = async (
    { params }: UserIdEntityParams,
    res: Response
  ): Promise<UserEntity | ResponseOrNullEntity> => {
    const responseMessage = new UserResponseMessage(res)
    return await this.userUseCase.deleteUser(params, responseMessage)
  }

  getUser = async (
    { params }: UserIdEntityParams,
    res: Response
  ): Promise<UserEntity | ResponseOrNullEntity> => {
    const responseMessage = new UserResponseMessage(res)
    return await this.userUseCase.getUser(params, responseMessage)
  }

  listUsers = async (
    _req: Request,
    res: Response
  ): Promise<UserEntity[] | ResponseOrNullEntity> => {
    const responseMessage = new UserResponseMessage(res)
    return await this.userUseCase.listUsers(responseMessage)
  }
}
