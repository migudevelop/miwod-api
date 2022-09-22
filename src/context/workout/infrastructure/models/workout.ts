import { Schema, model, Types } from 'mongoose'
import { WorkoutEntity } from '@workout/domain/index'

const DEFAULT_STRING_CONFIG = { type: String, required: true, min: 6, max: 255 }
const SIMPLE_USER_OBJECT = {
  userId: { type: Types.ObjectId, required: true },
  name: DEFAULT_STRING_CONFIG
}
const WEIGHT_OBJECT = {
  rx: Number,
  scaled: Number,
  unitOfMeasurement: Number
}

const TRAINING_EXERCICE_OBJECT = {
  exerciseId: { type: Types.ObjectId, required: true },
  weight: WEIGHT_OBJECT,
  reps: Number,
  sets: Number,
  porcentg: Number
}

const TRAINING_OBJECT = {
  type: DEFAULT_STRING_CONFIG,
  rounds: Number,
  time: Number,
  exercises: [TRAINING_EXERCICE_OBJECT],
  comment: DEFAULT_STRING_CONFIG
}

const DATE_OBJECT = {
  type: Date,
  required: true,
  default: Date.now
}

const WorkoutSchema = new Schema<WorkoutEntity>({
  name: DEFAULT_STRING_CONFIG,
  warmup: TRAINING_OBJECT,
  strength: TRAINING_OBJECT,
  wod: TRAINING_OBJECT,
  accessories: TRAINING_OBJECT,
  createdBy: SIMPLE_USER_OBJECT,
  createdAt: DATE_OBJECT,
  lastUpdatedBy: SIMPLE_USER_OBJECT,
  lastUpdatedAt: DATE_OBJECT
})

const Workout = model<WorkoutEntity>('Workout', WorkoutSchema)

export default Workout
