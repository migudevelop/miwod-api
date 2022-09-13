import { ExerciseEntity } from './exercise.entity'

export default class ExerciseValue implements ExerciseEntity {
  _id?: String | undefined
  name: string
  shortName?: string

  constructor({ name, shortName }: ExerciseEntity) {
    this.name = name
    this.shortName = shortName
  }
}
