import { DeleteResponseObject } from '@shared/domain'
import { WorkoutEntity } from './workout.entity'

export default interface WorkoutRepository {
  findWorkoutById: (id: string) => Promise<WorkoutEntity | null>
  findAndDelete: (id: string) => Promise<DeleteResponseObject>
  createWorkout: (params: WorkoutEntity) => Promise<WorkoutEntity | null>
  updateWorkout: (params: WorkoutEntity) => Promise<WorkoutEntity | null>
  listWorkouts: () => Promise<WorkoutEntity[] | null>
}
