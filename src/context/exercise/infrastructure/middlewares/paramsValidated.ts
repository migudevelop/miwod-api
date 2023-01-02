import { Response, NextFunction } from 'express'
import { ExerciseEntity } from '@exercise/domain/index'
import { ResponseMessage } from '@shared/application/utils/index'
import { Validations } from '@exercise/infrastructure/utils/index'

export const createValidated = (
  { body }: { body: ExerciseEntity },
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | undefined => {
  const responseMessage = new ResponseMessage(res)
  const validations = new Validations()
  if (!validations.validateCreateParams(body)) {
    return responseMessage.incorretDataValidation()
  }
  next()
}
