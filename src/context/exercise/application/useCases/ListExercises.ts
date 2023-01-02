import { ExerciseRepository, ExerciseEntity } from '@exercise/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { ExerciseResponseMessage } from '@exercise/application/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class ListExercises implements UserCase {
  private readonly exerciseRepository: ExerciseRepository
  private readonly exerciseResponseMessage: ExerciseResponseMessage

  constructor(
    userRepository: ExerciseRepository,
    exerciseResponseMessage: ExerciseResponseMessage
  ) {
    this.exerciseRepository = userRepository
    this.exerciseResponseMessage = exerciseResponseMessage
  }

  public async execute(): Promise<ExerciseEntity[] | ResponseOrNullEntity> {
    try {
      const exercises = await this.exerciseRepository.listExercises()
      return this.exerciseResponseMessage.success({ exercises })
    } catch (error) {
      return this.exerciseResponseMessage.errorExerciseNotExist()
    }
  }
}
