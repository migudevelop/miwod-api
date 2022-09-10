import { UserRepository, UserEntity } from '@user/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { RESPONSE_CODES, USER_MESSAGES } from '@shared/constants/index'
import { ResponseMessage } from '@shared/infrastructure/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class ListUsers implements UserCase {
  private readonly userRepository: UserRepository
  private readonly responseMessage: ResponseMessage

  constructor(
    userRepository: UserRepository,
    responseMessage: ResponseMessage
  ) {
    this.userRepository = userRepository
    this.responseMessage = responseMessage
  }

  public async execute(): Promise<UserEntity[] | ResponseOrNullEntity> {
    try {
      return await this.userRepository.listUsers()
    } catch (error) {
      return this.responseMessage.error(
        RESPONSE_CODES.ERRORS.CLIENT_SIDE.NOT_FOUND,
        USER_MESSAGES.USER_NOT_EXIST
      )
    }
  }
}
