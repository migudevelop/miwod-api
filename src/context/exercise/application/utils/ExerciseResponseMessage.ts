import { Response } from 'express'
import {
  RESPONSE_CODES,
  EXERCISE_MESSAGES
} from '@shared/application/constants/index'
import { ResponseMessage } from '@shared/application/utils/index'

export default class ExerciseResponseMessage extends ResponseMessage {
  constructor(res: Response) {
    super(res)
  }

  errorExerciseNotExist(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.CLIENT_SIDE.NOT_FOUND,
      EXERCISE_MESSAGES.NOT_EXIST
    )
  }

  errorDeletingExercise(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      EXERCISE_MESSAGES.ERROR_DELETING
    )
  }

  errorUpdatingExercise(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      EXERCISE_MESSAGES.ERROR_UPDATING
    )
  }

  errorCheckingExerciseExist(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      EXERCISE_MESSAGES.ERROR_CHECK_EXIST
    )
  }

  errorSavingExercise(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      EXERCISE_MESSAGES.ERROR_SAVING
    )
  }

  errorExerciseAlreadyRegistered(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      EXERCISE_MESSAGES.ALREADY_REGISTERED
    )
  }
}
