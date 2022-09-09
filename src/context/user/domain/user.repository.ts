import { UserEntity } from './user.entity'

export default interface UserRepository {
  findUserById: (id: string) => Promise<UserEntity | null>
  findUserByEmail: (email: string) => Promise<UserEntity | null>
  createUser: (userParams: UserEntity) => Promise<UserEntity | null>
  listUsers: () => Promise<UserEntity[] | null>
}
