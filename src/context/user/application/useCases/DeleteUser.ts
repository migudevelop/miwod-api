import {
  UserRepository,
  UserEntity,
  DeleteResponseObject
} from '@user/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { UserResponseMessage } from '@user/infrastructure/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class DeleteUser implements UserCase {
  private readonly userRepository: UserRepository
  private readonly userResponseMessage: UserResponseMessage

  constructor(
    userRepository: UserRepository,
    userResponseMessage: UserResponseMessage
  ) {
    this.userRepository = userRepository
    this.userResponseMessage = userResponseMessage
  }

  public async execute(id: string): Promise<UserEntity | ResponseOrNullEntity> {
    try {
      const userDeleted: DeleteResponseObject =
        await this.userRepository.findAndDelete(id)
      const { deletedCount = 0 } = userDeleted
      if (deletedCount === 0) {
        return this.userResponseMessage.userNotExist()
      }
      return this.userResponseMessage.success({ deletedCount })
    } catch (error) {
      return this.userResponseMessage.errorDeletingUser()
    }
  }
}
