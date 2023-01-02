import { Schema, model } from 'mongoose'
import { ExerciseEntity, ExerciseTypes } from '@exercise/domain/index'

const DEFAULT_STRING_CONFIG = { type: String, required: true, min: 6, max: 255 }

const ExerciseSchema = new Schema<ExerciseEntity>({
  name: DEFAULT_STRING_CONFIG,
  shortName: { type: String, required: true, min: 0, max: 6 },
  type: { ...DEFAULT_STRING_CONFIG, default: ExerciseTypes.Common }
})

const Exercise = model<ExerciseEntity>('Exercise', ExerciseSchema)

export default Exercise
