import { UserRepository, UserEntity } from '@user/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { RESPONSE_CODES, USER_MESSAGES } from '@shared/constants/index'
import { ResponseMessage } from '@shared/infrastructure/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class GetUser implements UserCase {
  private readonly userRepository: UserRepository
  private readonly responseMessage: ResponseMessage

  constructor(
    userRepository: UserRepository,
    responseMessage: ResponseMessage
  ) {
    this.userRepository = userRepository
    this.responseMessage = responseMessage
  }

  public async execute(id: string): Promise<UserEntity | ResponseOrNullEntity> {
    try {
      return await this.userRepository.findUserById(id)
    } catch (error) {
      return this.responseMessage.error(
        RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
        USER_MESSAGES.ERROR_CHECK_USER_EXIST
      )
    }
  }
}
