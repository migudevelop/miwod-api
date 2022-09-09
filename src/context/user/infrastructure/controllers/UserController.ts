import { Request, Response } from 'express'
import { ListUsers } from '@user/application/index'

export default class UserController {
  private readonly userUseCase: ListUsers
  constructor(userUseCase: ListUsers) {
    this.userUseCase = userUseCase
  }

  listUsers = async (_req: Request, res: Response): Promise<Response> => {
    const users = await this.userUseCase.execute()
    return res.status(200).send({ users })
  }
}
