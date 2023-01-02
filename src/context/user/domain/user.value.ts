import { UserEntity, Roles } from './user.entity'

export default class UserValue implements UserEntity {
  _id?: String | undefined
  name: string
  surname: string
  email: string
  password: string
  createAt?: Date
  role?: Roles

  constructor({
    name,
    surname,
    email,
    password = '',
    createAt = new Date(),
    role
  }: UserEntity) {
    this.name = name
    this.surname = surname
    this.email = email
    this.password = password
    this.createAt = createAt
    this.role = role
  }
}
