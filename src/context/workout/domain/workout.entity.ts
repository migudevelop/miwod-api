import { UserEntity, SimpleUserDataEntity } from '@user/domain/index'

export interface WorkoutEntity {
  _id?: String | undefined
  name?: string
  warmup?: Training
  strength?: Training
  wod?: Training
  accessories?: Training
  createdBy?: SimpleUserDataEntity
  createdAt?: Date
  lastUpdatedBy: SimpleUserDataEntity
  lastUpdatedAt: Date
}

export enum TrainingTypes {
  AMRAP = 'AMRAP',
  EMOM = 'EMOM',
  ForTime = 'FT',
  Ladder = 'LADDER',
  Tabata = 'TABATA',
  Chipper = 'CHIPPER',
  Conditioning = 'CONDITIONING'
}

export type TrainingType =
  | TrainingTypes.AMRAP
  | TrainingTypes.EMOM
  | TrainingTypes.ForTime
  | TrainingTypes.Ladder
  | TrainingTypes.Tabata
  | TrainingTypes.Chipper
  | TrainingTypes.Conditioning

export interface Weight {
  rx?: number
  scaled?: number
  unitOfMeasurement: string
}

export interface TrainingExercice {
  exerciseId: string
  weight?: Weight
  reps?: number
  sets?: number
  porcentg?: number
}

export interface Training {
  type: TrainingType
  rounds?: number
  time?: number
  exercises: TrainingExercice[]
  comment?: string
}

export interface WorkoutIdEntityParams {
  params: { workoutId: string }
  user?: UserEntity
}

export interface WorkoutBodyEntityParams {
  body: WorkoutEntity
  user?: UserEntity
}
