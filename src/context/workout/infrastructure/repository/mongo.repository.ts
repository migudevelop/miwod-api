import { WorkoutEntity, WorkoutRepository } from '@workout/domain/index'
import { Workout } from '@workout/infrastructure/models/index'

export default class MongoRepository implements WorkoutRepository {
  async findWorkoutById(_id: string): Promise<any> {
    return await Workout.findOne({ _id })
  }

  async findAndDelete(_id: string): Promise<any> {
    return await Workout.deleteOne({ _id })
  }

  async createWorkout(workoutIn: WorkoutEntity): Promise<any> {
    return await Workout.create(workoutIn)
  }

  async updateWorkout(workoutIn: WorkoutEntity): Promise<any> {
    return await Workout.findOneAndUpdate(
      { workoutIn: workoutIn?._id },
      workoutIn,
      {
        new: true
      }
    )
  }

  async listWorkouts(): Promise<any> {
    return await Workout.find()
  }
}
