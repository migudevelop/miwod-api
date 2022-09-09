import { UserRepository, UserValue, UserEntity } from '@user/domain/index'
import UserCase from '@shared/application/UserCase.interface'
export default class CreateUser implements UserCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(userParams: UserEntity): Promise<any> {
    const userValue = new UserValue(userParams)
    const userCreated = await this.userRepository.createUser(userValue)
    return userCreated
  }
}
