import { ExerciseRepository, ExerciseEntity } from '@exercise/domain/index'
import { CreateExercise, GetExercise, ListExercises } from './useCases/index'
import { ExerciseResponseMessage } from '@exercise/application/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class ExerciseUseCases {
  private readonly exerciseRepository: ExerciseRepository

  constructor(exerciseRepository: ExerciseRepository) {
    this.exerciseRepository = exerciseRepository
  }

  async createExercise(
    params: ExerciseEntity,
    responseMessage: ExerciseResponseMessage
  ): Promise<ExerciseEntity | ResponseOrNullEntity> {
    return await new CreateExercise(
      this.exerciseRepository,
      responseMessage
    ).execute(params)
  }

  async getExercise(
    { exerciseId }: { exerciseId: string },
    responseMessage: ExerciseResponseMessage
  ): Promise<ExerciseEntity | ResponseOrNullEntity> {
    return await new GetExercise(
      this.exerciseRepository,
      responseMessage
    ).execute(exerciseId)
  }

  async listExercises(
    responseMessage: ExerciseResponseMessage
  ): Promise<ExerciseEntity[] | ResponseOrNullEntity> {
    return await new ListExercises(
      this.exerciseRepository,
      responseMessage
    ).execute()
  }
}
