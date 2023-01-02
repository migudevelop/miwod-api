import { ExerciseEntity, ExerciseType } from './exercise.entity'

export default class ExerciseValue implements ExerciseEntity {
  _id?: String | undefined
  name: string
  shortName?: string
  type: ExerciseType

  constructor({ name, shortName, type }: ExerciseEntity) {
    this.name = name
    this.shortName = shortName
    this.type = type
  }
}
