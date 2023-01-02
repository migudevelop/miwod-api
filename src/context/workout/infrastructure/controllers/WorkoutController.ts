import { Response } from 'express'
import WorkoutUseCase from '@workout/application/WorkoutUseCase'
import { WorkoutBodyEntityParams, WorkoutEntity } from '@workout/domain/index'
import { WorkoutResponseMessage } from '@workout/infrastructure/utils/index'
import { ResponseOrNullEntity } from '@shared/domain'

export default class WorkoutController {
  private readonly workoutUseCase: WorkoutUseCase

  constructor(workoutUseCase: WorkoutUseCase) {
    this.workoutUseCase = workoutUseCase
  }

  createUser = async (
    req: WorkoutBodyEntityParams,
    res: Response
  ): Promise<WorkoutEntity | ResponseOrNullEntity> => {
    const responseMessage = new WorkoutResponseMessage(res)
    return await this.workoutUseCase.createWorkout(req, responseMessage)
  }
}
