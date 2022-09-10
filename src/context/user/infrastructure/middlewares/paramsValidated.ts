import { Response, NextFunction } from 'express'
import { LoginEntityParams, UserEntity } from '@user/domain/index'
import { ResponseMessage } from '@shared/infrastructure/utils/index'
import { Validations } from '@user/infrastructure/utils/index'

export const loginValidated = (
  { body }: { body: LoginEntityParams },
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | undefined => {
  const responseMessage = new ResponseMessage(res)
  const validations = new Validations()
  if (!validations.validateUserLoginParams(body)) {
    return responseMessage.incorretDataValidation()
  }
  next()
}

export const createUserValidated = (
  { body }: { body: UserEntity },
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | undefined => {
  const responseMessage = new ResponseMessage(res)
  const validations = new Validations()
  if (!validations.validateCreateUserParams(body)) {
    return responseMessage.incorretDataValidation()
  }
  next()
}

export const updateUserValidated = (
  { body }: { body: UserEntity },
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | undefined => {
  const responseMessage = new ResponseMessage(res)
  const validations = new Validations()
  if (!validations.validateUpdateUserParams(body)) {
    return responseMessage.incorretDataValidation()
  }
  next()
}
