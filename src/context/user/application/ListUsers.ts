import { UserRepository, UserEntity } from '@user/domain/index'
import UserCase from '@shared/application/UserCase.interface'

export default class LoginUser implements UserCase {
  private readonly userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public async execute(): Promise<UserEntity[] | null> {
    return await this.userRepository.listUsers()
  }
}
