import { Response } from 'express'
import UserUseCase from '@user/application/UserUseCase'
import { LoginEntityParams } from '@user/domain/index'
import { Jwt, ResponseMessage } from '@shared/infrastructure/utils/index'

export default class LoginController {
  private readonly userUseCase: UserUseCase

  constructor(userUseCase: UserUseCase) {
    this.userUseCase = userUseCase
  }

  login = async (
    { body }: { body: LoginEntityParams },
    res: Response
  ): Promise<Response> => {
    const responseMessage = new ResponseMessage(res)
    const jwt = new Jwt()
    const user = await this.userUseCase.login(body, responseMessage)
    return res.status(200).send({ user, token: jwt.createToken(user) })
  }
}
