import { UserRepository, UserEntity } from '@user/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { UserResponseMessage } from '@user/infrastructure/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class GetUser implements UserCase {
  private readonly userRepository: UserRepository
  private readonly userResponseMessage: UserResponseMessage

  constructor(
    userRepository: UserRepository,
    UserResponseMessage: UserResponseMessage
  ) {
    this.userRepository = userRepository
    this.userResponseMessage = UserResponseMessage
  }

  public async execute(id: string): Promise<UserEntity | ResponseOrNullEntity> {
    let user
    try {
      user = await this.userRepository.findUserById(id)
    } catch (error) {
      return this.userResponseMessage.errorCheckingUserExist()
    }
    if (!user) {
      return this.userResponseMessage.errorCheckingUserExist()
    }
    return this.userResponseMessage.success({ user })
  }
}
