import { WorkoutEntity, Training } from './workout.entity'
import { SimpleUserDataEntity } from '@user/domain/index'

export default class ExerciseValue implements WorkoutEntity {
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

  constructor({
    name,
    warmup,
    strength,
    wod,
    accessories,
    createdBy,
    createdAt,
    lastUpdatedBy,
    lastUpdatedAt
  }: WorkoutEntity) {
    this.name = name
    this.warmup = warmup
    this.strength = strength
    this.wod = wod
    this.accessories = accessories
    this.createdBy = createdBy
    this.createdAt = createdAt
    this.lastUpdatedBy = lastUpdatedBy
    this.lastUpdatedAt = lastUpdatedAt
  }
}
