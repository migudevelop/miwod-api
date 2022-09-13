export interface ExerciseEntity {
  _id?: String | undefined
  name: string
  shortName?: string | undefined
}

export interface ExerciseIdEntityParams {
  params: { exerciseId: string }
}
