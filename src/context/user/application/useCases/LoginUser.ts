import { Jwt } from '@shared/infrastructure/utils/index'
import { UserRepository, LoginEntityParams } from '@user/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { PasswordSecurity } from '@user/application/utils/index'
import { UserResponseMessage } from '@user/infrastructure/utils/index'

export default class LoginUser implements UserCase {
  private readonly userRepository: UserRepository
  private readonly userResponseMessage: UserResponseMessage
  private readonly jwt: Jwt

  constructor(
    userRepository: UserRepository,
    userResponseMessage: UserResponseMessage,
    jwt: Jwt
  ) {
    this.userRepository = userRepository
    this.userResponseMessage = userResponseMessage
    this.jwt = jwt
  }

  public async execute(userParams: LoginEntityParams): Promise<any> {
    const { email, password } = userParams
    const passwordSecurity = new PasswordSecurity()
    let user
    try {
      user = await this.userRepository.findUserByEmail(email)
    } catch (error) {
      return this.userResponseMessage.errorCheckingUserExist()
    }

    if (!user) {
      return this.userResponseMessage.userNotExist()
    }

    const isEqualPasswords = await passwordSecurity.comparePasswords(
      password,
      user.password
    )
    if (!isEqualPasswords) {
      return this.userResponseMessage.errorIncorretCredentials()
    }
    return this.userResponseMessage.success({
      user,
      token: this.jwt.createToken(user)
    })
  }
}
