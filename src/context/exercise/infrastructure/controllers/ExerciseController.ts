import { Request, Response } from 'express'
import ExerciseUseCase from '@exercise/application/ExerciseUseCase'
import { ExerciseEntity, ExerciseIdEntityParams } from '@exercise/domain/index'
import { ExerciseResponseMessage } from '@exercise/application/utils/index'
import { ResponseOrNullEntity } from '@shared/domain'

export default class UserController {
  private readonly exerciseUseCase: ExerciseUseCase

  constructor(exerciseUseCase: ExerciseUseCase) {
    this.exerciseUseCase = exerciseUseCase
  }

  createUser = async (
    { body }: { body: ExerciseEntity },
    res: Response
  ): Promise<ExerciseEntity | ResponseOrNullEntity> => {
    const responseMessage = new ExerciseResponseMessage(res)
    return await this.exerciseUseCase.createExercise(body, responseMessage)
  }

  getUser = async (
    { params }: ExerciseIdEntityParams,
    res: Response
  ): Promise<ExerciseEntity | ResponseOrNullEntity> => {
    const responseMessage = new ExerciseResponseMessage(res)
    return await this.exerciseUseCase.getExercise(params, responseMessage)
  }

  listUsers = async (
    _req: Request,
    res: Response
  ): Promise<ExerciseEntity[] | ResponseOrNullEntity> => {
    const responseMessage = new ExerciseResponseMessage(res)
    return await this.exerciseUseCase.listExercises(responseMessage)
  }
}
