import { ExerciseRepository, ExerciseEntity } from '@exercise/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { ExerciseResponseMessage } from '@exercise/application/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class GetExercise implements UserCase {
  private readonly exerciseRepository: ExerciseRepository
  private readonly exerciseResponseMessage: ExerciseResponseMessage

  constructor(
    userRepository: ExerciseRepository,
    exerciseResponseMessage: ExerciseResponseMessage
  ) {
    this.exerciseRepository = userRepository
    this.exerciseResponseMessage = exerciseResponseMessage
  }

  public async execute(
    id: string
  ): Promise<ExerciseEntity | ResponseOrNullEntity> {
    let exercise
    try {
      exercise = await this.exerciseRepository.findExerciseById(id)
    } catch (error) {
      return this.exerciseResponseMessage.errorCheckingExerciseExist()
    }
    if (!exercise) {
      return this.exerciseResponseMessage.errorCheckingExerciseExist()
    }
    return this.exerciseResponseMessage.success({ exercise })
  }
}
