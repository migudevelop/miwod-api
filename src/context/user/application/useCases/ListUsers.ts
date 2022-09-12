import { UserRepository, UserEntity } from '@user/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { UserResponseMessage } from '@user/infrastructure/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class ListUsers implements UserCase {
  private readonly userRepository: UserRepository
  private readonly userResponseMessage: UserResponseMessage

  constructor(
    userRepository: UserRepository,
    userResponseMessage: UserResponseMessage
  ) {
    this.userRepository = userRepository
    this.userResponseMessage = userResponseMessage
  }

  public async execute(): Promise<UserEntity[] | ResponseOrNullEntity> {
    try {
      const users = await this.userRepository.listUsers()
      return this.userResponseMessage.success({ users })
    } catch (error) {
      return this.userResponseMessage.userNotExist()
    }
  }
}
