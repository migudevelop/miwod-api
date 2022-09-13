import {
  ExerciseRepository,
  ExerciseEntity,
  ExerciseValue
} from '@exercise/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { ExerciseResponseMessage } from '@exercise/infrastructure/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class CreateExercise implements UserCase {
  private readonly exerciseRepository: ExerciseRepository
  private readonly exerciseResponseMessage: ExerciseResponseMessage

  constructor(
    userRepository: ExerciseRepository,
    exerciseResponseMessage: ExerciseResponseMessage
  ) {
    this.exerciseRepository = userRepository
    this.exerciseResponseMessage = exerciseResponseMessage
  }

  public async execute({
    name,
    shortName
  }: ExerciseEntity): Promise<ExerciseEntity | ResponseOrNullEntity> {
    const newExerciseValue = new ExerciseValue({
      name,
      shortName
    })
    try {
      const newExercise = await this.exerciseRepository.createExercise(
        newExerciseValue
      )
      return this.exerciseResponseMessage.success({ user: newExercise })
    } catch (error) {
      return this.exerciseResponseMessage.errorSavingExercise()
    }
  }
}
