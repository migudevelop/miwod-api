export interface ExerciseEntity {
  _id?: String | undefined
  name: string
  shortName?: string | undefined
  type: ExerciseType
}

export enum ExerciseTypes {
  Strength = 'STRENGTH',
  Gymnastic = 'GYMNASTIC',
  Common = 'COMMON'
}

export type ExerciseType =
  | ExerciseTypes.Common
  | ExerciseTypes.Gymnastic
  | ExerciseTypes.Strength

export interface ExerciseIdEntityParams {
  params: { exerciseId: string }
}
