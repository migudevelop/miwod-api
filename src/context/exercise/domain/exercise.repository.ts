import { DeleteResponseObject } from '@shared/domain'
import { ExerciseEntity } from './exercise.entity'

export default interface ExerciseRepository {
  findExerciseById: (id: string) => Promise<ExerciseEntity | null>
  findAndDelete: (id: string) => Promise<DeleteResponseObject>
  createExercise: (
    exerciseParams: ExerciseEntity
  ) => Promise<ExerciseEntity | null>
  updateExercise: (
    exerciseParams: ExerciseEntity
  ) => Promise<ExerciseEntity | null>
  listExercises: () => Promise<ExerciseEntity[] | null>
}
