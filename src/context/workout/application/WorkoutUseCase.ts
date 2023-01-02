import { WorkoutRepository, WorkoutEntity } from '@workout/domain/index'
import { CreateWorkout } from './useCases/index'
import { ResponseMessage } from '@shared/application/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class WorkoutUseCase {
  private readonly workoutRepository: WorkoutRepository

  constructor(workoutRepository: WorkoutRepository) {
    this.workoutRepository = workoutRepository
  }

  async createWorkout(
    params: WorkoutRepository,
    responseMessage: ResponseMessage
  ): Promise<WorkoutEntity | ResponseOrNullEntity> {
    return await new CreateWorkout(
      this.workoutRepository,
      responseMessage
    ).execute(params)
  }
}
