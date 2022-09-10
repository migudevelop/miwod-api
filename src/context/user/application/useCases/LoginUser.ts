import { UserRepository, LoginEntityParams } from '@user/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { RESPONSE_CODES, USER_MESSAGES } from '@shared/constants/index'
import { ResponseMessage } from '@shared/infrastructure/utils/index'
import { PasswordSecurity } from '@user/application/utils/index'
export default class LoginUser implements UserCase {
  private readonly userRepository: UserRepository
  private readonly responseMessage: ResponseMessage

  constructor(
    userRepository: UserRepository,
    responseMessage: ResponseMessage
  ) {
    this.userRepository = userRepository
    this.responseMessage = responseMessage
  }

  public async execute(userParams: LoginEntityParams): Promise<any> {
    const { email, password } = userParams
    const passwordSecurity = new PasswordSecurity()
    let user
    try {
      user = await this.userRepository.findUserByEmail(email)
    } catch (error) {
      return this.responseMessage.error(
        RESPONSE_CODES.ERRORS.SERVER_SIDE.INTERNAL_SERVER_ERROR,
        USER_MESSAGES.ERROR_CHECK_USER_EXIST
      )
    }
    const isEqualPasswords = await passwordSecurity.comparePasswords(
      password,
      user.password
    )
    if (!isEqualPasswords) {
      return this.responseMessage.error(
        RESPONSE_CODES.ERRORS.CLIENT_SIDE.UNAUTHORIZED,
        USER_MESSAGES.INCORRECT_CREDENTIALS
      )
    }
    return user
  }
}
