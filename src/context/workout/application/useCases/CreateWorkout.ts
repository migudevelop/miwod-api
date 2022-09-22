import {
  WorkoutRepository,
  WorkoutEntity,
  WorkoutValue,
  WorkoutBodyEntityParams
} from '@workout/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { WorkoutResponseMessage } from '@workout/infrastructure/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class CreateExercise implements UserCase {
  private readonly workoutRepository: WorkoutRepository
  private readonly workoutResponseMessage: WorkoutResponseMessage

  constructor(
    workoutRepository: WorkoutRepository,
    workoutResponseMessage: WorkoutResponseMessage
  ) {
    this.workoutRepository = workoutRepository
    this.workoutResponseMessage = workoutResponseMessage
  }

  public async execute(
    params: WorkoutBodyEntityParams
  ): Promise<WorkoutEntity | ResponseOrNullEntity> {
    const newExerciseValue = new WorkoutValue({
      ...params?.body
    })
    try {
      const newExercise = await this.workoutRepository.createWorkout(
        newExerciseValue
      )
      return this.workoutResponseMessage.success({ user: newExercise })
    } catch (error) {
      return this.workoutResponseMessage.errorSavingWorkout()
    }
  }
}
