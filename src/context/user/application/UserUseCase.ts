import {
  UserRepository,
  UserEntity,
  LoginEntityParams
} from '@user/domain/index'
import {
  LoginUser,
  GetUser,
  ListUsers,
  CreateUser,
  DeleteUser
} from '@user/application/useCases/index'
import { UserResponseMessage } from '@user/infrastructure/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'
import { Jwt } from '@shared/infrastructure/utils'

export default class UserUseCases {
  private readonly userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async login(
    userParams: LoginEntityParams,
    responseMessage: UserResponseMessage,
    jwt: Jwt
  ): Promise<UserEntity> {
    return await new LoginUser(
      this.userRepository,
      responseMessage,
      jwt
    ).execute(userParams)
  }

  async createUser(
    userParams: UserEntity,
    responseMessage: UserResponseMessage
  ): Promise<UserEntity | ResponseOrNullEntity> {
    return await new CreateUser(this.userRepository, responseMessage).execute(
      userParams
    )
  }

  async deleteUser(
    { userId }: { userId: string },
    responseMessage: UserResponseMessage
  ): Promise<UserEntity | ResponseOrNullEntity> {
    return await new DeleteUser(this.userRepository, responseMessage).execute(
      userId
    )
  }

  async getUser(
    { userId }: { userId: string },
    responseMessage: UserResponseMessage
  ): Promise<UserEntity | ResponseOrNullEntity> {
    return await new GetUser(this.userRepository, responseMessage).execute(
      userId
    )
  }

  async listUsers(
    responseMessage: UserResponseMessage
  ): Promise<UserEntity[] | ResponseOrNullEntity> {
    return await new ListUsers(this.userRepository, responseMessage).execute()
  }
}
