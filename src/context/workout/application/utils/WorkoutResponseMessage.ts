import { Response } from 'express'
import {
  RESPONSE_CODES,
  WORKOUT_MESSAGES
} from '@shared/application/constants/index'
import { ResponseMessage } from '@shared/application/utils/index'

export default class WorkoutResponseMessage extends ResponseMessage {
  constructor(res: Response) {
    super(res)
  }

  errorWorkoutNotExist(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.CLIENT_SIDE.NOT_FOUND,
      WORKOUT_MESSAGES.NOT_EXIST
    )
  }

  errorDeletingWorkout(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      WORKOUT_MESSAGES.ERROR_DELETING
    )
  }

  errorUpdatingWorkout(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      WORKOUT_MESSAGES.ERROR_UPDATING
    )
  }

  errorCheckingWorkoutExist(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      WORKOUT_MESSAGES.ERROR_CHECK_EXIST
    )
  }

  errorSavingWorkout(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      WORKOUT_MESSAGES.ERROR_SAVING
    )
  }

  errorWorkoutAlreadyRegistered(): Response {
    return super.error(
      RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
      WORKOUT_MESSAGES.ALREADY_REGISTERED
    )
  }
}
