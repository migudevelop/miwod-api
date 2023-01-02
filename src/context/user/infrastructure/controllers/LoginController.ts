import { Response } from 'express'
import UserUseCase from '@user/application/UserUseCase'
import { LoginEntityParams, UserEntity } from '@user/domain/index'
import { Jwt } from '@shared/application/utils/index'
import { UserResponseMessage } from '@user/application/utils/index'

export default class LoginController {
  private readonly userUseCase: UserUseCase

  constructor(userUseCase: UserUseCase) {
    this.userUseCase = userUseCase
  }

  login = async (
    { body }: { body: LoginEntityParams },
    res: Response
  ): Promise<UserEntity> => {
    const responseMessage = new UserResponseMessage(res)
    const jwt = new Jwt()
    return await this.userUseCase.login(body, responseMessage, jwt)
  }
}
