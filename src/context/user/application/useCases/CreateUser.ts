import { UserRepository, UserEntity, UserValue } from '@user/domain/index'
import UserCase from '@shared/application/UserCase.interface'
import { PasswordSecurity } from '@user/application/utils/index'
import { UserResponseMessage } from '@user/application/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class CreateUser implements UserCase {
  private readonly userRepository: UserRepository
  private readonly userResponseMessage: UserResponseMessage

  constructor(
    userRepository: UserRepository,
    UserResponseMessage: UserResponseMessage
  ) {
    this.userRepository = userRepository
    this.userResponseMessage = UserResponseMessage
  }

  public async execute({
    name,
    surname,
    email,
    password
  }: UserEntity): Promise<UserEntity | ResponseOrNullEntity> {
    const passwordSecurity = new PasswordSecurity()
    let user
    try {
      user = await this.userRepository.findUserByEmail(email)
    } catch (error) {
      return this.userResponseMessage.errorCheckingUserExist()
    }
    if (user) {
      return this.userResponseMessage.errorUserAlreadyRegistered()
    }
    const hash: string = await passwordSecurity.encript(password)
    const newUserValue = new UserValue({ name, surname, email, password: hash })
    try {
      const newUser = await this.userRepository.createUser(newUserValue)
      return this.userResponseMessage.success({ user: newUser })
    } catch (error) {
      return this.userResponseMessage.errorSavingUser()
    }
  }
}
