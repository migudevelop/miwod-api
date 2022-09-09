import { UserRepository, LoginEntity } from '@user/domain/index'
import UserCase from '@shared/application/UserCase.interface'

export default class LoginUser implements UserCase {
  private readonly userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public async execute(userParams: LoginEntity): Promise<any> {
    const { email } = userParams
    const user = await this.userRepository.findUserByEmail(email)
    return user
  }
}
