import { Response, NextFunction } from 'express'
import moment from 'moment'
import { RESPONSE_CODES, COMMON_MESSAGES } from '@shared/constants/index'
import { ResponseMessage, Jwt } from '@shared/infrastructure/utils/index'

export const authenticated = (
  req: any,
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | undefined => {
  const authorized = req?.headers?.authorization ?? false
  const responseMessage = new ResponseMessage(res)
  const jwt = new Jwt()
  if (!authorized) {
    responseMessage.error(
      RESPONSE_CODES.ERRORS.CLIENT_SIDE.UNAUTHORIZED,
      COMMON_MESSAGES.UNAUTHORIZED_REQUEST
    )
  }
  const token = req?.headers?.authorization?.replace(/['"]+/g, '') ?? ''
  let payload: any = null
  try {
    payload = jwt.decodeToken(token)
    if (payload?.exp <= moment().unix()) {
      return res
        .status(RESPONSE_CODES.ERRORS.CLIENT_SIDE.UNAUTHORIZED)
        .send({ message: COMMON_MESSAGES.TOKEN_EXPIRED })
    }
  } catch (err) {
    return responseMessage.error(
      RESPONSE_CODES.ERRORS.CLIENT_SIDE.FORBIDDEN,
      COMMON_MESSAGES.NOT_VALID_TOKEN
    )
  }
  req.user = payload
  next()
}
