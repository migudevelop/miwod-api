import { DeleteResponseObject } from '@shared/domain'
import { UserEntity } from './user.entity'

export default interface UserRepository {
  findUserById: (id: string) => Promise<UserEntity | null>
  findAndDelete: (id: string) => Promise<DeleteResponseObject>
  findUserByEmail: (email: string) => Promise<UserEntity | null>
  createUser: (userParams: UserEntity) => Promise<UserEntity | null>
  updateUser: (userParams: UserEntity) => Promise<UserEntity | null>
  listUsers: () => Promise<UserEntity[] | null>
}
