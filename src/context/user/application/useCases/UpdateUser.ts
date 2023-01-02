import { UserRepository, UserEntity } from '@user/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { UserResponseMessage } from '@user/application/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class UpdateUser implements UserCase {
  private readonly userRepository: UserRepository
  private readonly userResponseMessage: UserResponseMessage

  constructor(
    userRepository: UserRepository,
    UserResponseMessage: UserResponseMessage
  ) {
    this.userRepository = userRepository
    this.userResponseMessage = UserResponseMessage
  }

  public async execute(
    userParams: UserEntity
  ): Promise<UserEntity | ResponseOrNullEntity> {
    try {
      const userUpdated = await this.userRepository.updateUser(userParams)
      return this.userResponseMessage.success({ user: userUpdated })
    } catch (error) {
      return this.userResponseMessage.errorUpdatingUser()
    }
  }
}
