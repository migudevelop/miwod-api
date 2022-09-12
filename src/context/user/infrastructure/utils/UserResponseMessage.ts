import { Response } from 'express'
import { RESPONSE_CODES, USER_MESSAGES } from '@shared/constants/index'
import { ResponseMessage } from '@shared/infrastructure/utils/index'

export default class UserResponseMessage extends ResponseMessage {
  constructor(res: Response) {
    super(res)
  }

  userNotExist(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.CLIENT_SIDE.NOT_FOUND,
      USER_MESSAGES.USER_NOT_EXIST
    )
  }

  errorDeletingUser(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      USER_MESSAGES.ERROR_DELETING_USER
    )
  }

  errorUpdatingUser(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      USER_MESSAGES.ERROR_UPDATING_USER
    )
  }

  errorCheckingUserExist(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      USER_MESSAGES.ERROR_CHECK_USER_EXIST
    )
  }

  errorSavingUser(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      USER_MESSAGES.ERROR_SAVING_USER
    )
  }

  errorUserAlreadyRegistered(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      USER_MESSAGES.USER_ALREADY_REGISTERED
    )
  }

  errorIncorretCredentials(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.CLIENT_SIDE.UNAUTHORIZED,
      USER_MESSAGES.INCORRECT_CREDENTIALS
    )
  }

  errorIdentifyUser(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      USER_MESSAGES.ERROR_IDENTIFY
    )
  }
}
