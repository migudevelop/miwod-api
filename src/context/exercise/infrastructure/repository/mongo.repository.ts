import { ExerciseRepository, ExerciseEntity } from '@exercise/domain/index'
import { Exercise } from '@exercise/infrastructure/models/index'

export default class MongoRepository implements ExerciseRepository {
  async findExerciseById(_id: string): Promise<any> {
    return await Exercise.findOne({ _id })
  }

  async findAndDelete(_id: string): Promise<any> {
    return await Exercise.deleteOne({ _id })
  }

  async createExercise(exerciseIn: ExerciseEntity): Promise<any> {
    return await Exercise.create(exerciseIn)
  }

  async updateExercise(exerciseIn: ExerciseEntity): Promise<any> {
    return await Exercise.findOneAndUpdate(
      { exerciseIn: exerciseIn?._id },
      exerciseIn,
      {
        new: true
      }
    )
  }

  async listExercises(): Promise<any> {
    return await Exercise.find()
  }
}
