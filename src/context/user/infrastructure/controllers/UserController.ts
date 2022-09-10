import { Request, Response } from 'express'
import UserUseCase from '@user/application/UserUseCase'
import { UserIdEntityParams } from '@user/domain/index'
import { ResponseMessage } from '@shared/infrastructure/utils/index'

export default class UserController {
  private readonly userUseCase: UserUseCase
  private
  constructor(userUseCase: UserUseCase) {
    this.userUseCase = userUseCase
  }

  getUser = async (
    { params }: UserIdEntityParams,
    res: Response
  ): Promise<Response> => {
    const responseMessage = new ResponseMessage(res)
    const users = await this.userUseCase.getUser(params, responseMessage)
    return res.status(200).send({ users })
  }

  listUsers = async (_req: Request, res: Response): Promise<Response> => {
    const responseMessage = new ResponseMessage(res)
    const users = await this.userUseCase.listUsers(responseMessage)
    return res.status(200).send({ users })
  }
}
