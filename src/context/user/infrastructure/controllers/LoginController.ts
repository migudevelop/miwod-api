import { Response } from 'express'
import { LoginUser } from '@user/application/index'
import { LoginEntity } from '@user/domain/index'

export default class LoginController {
  private readonly loginUseCase: LoginUser

  constructor(loginUseCase: LoginUser) {
    this.loginUseCase = loginUseCase
  }

  login = async (
    { body }: { body: LoginEntity },
    res: Response
  ): Promise<Response> => {
    const user = await this.loginUseCase.execute(body)
    return res.status(200).send({ user })
  }
}
