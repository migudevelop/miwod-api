import { Response } from 'express'
import { RESPONSE_CODES, COMMON_MESSAGES } from '@shared/constants/index'

export default class ResponseMessage {
  private readonly res: Response
  constructor(res: Response) {
    this.res = res
  }

  get(): Response {
    return this.res
  }

  success(responseData: any = {}): Response {
    return this.res
      .status(RESPONSE_CODES.SUCCESS)
      .send({ success: true, ...responseData })
  }

  error(errorCode: number, errorMessage: string): Response {
    return this.res.status(errorCode).send({ message: errorMessage })
  }

  incorretDataValidation(): Response {
    return this.error(
      RESPONSE_CODES.ERRORS.CLIENT_SIDE.BAD_REQUEST,
      COMMON_MESSAGES.INCORRET_DATA_VALIDATION
    )
  }
}
