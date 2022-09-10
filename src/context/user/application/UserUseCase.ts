import {
  UserRepository,
  UserEntity,
  LoginEntityParams
} from '@user/domain/index'
import { LoginUser, GetUser, ListUsers } from '@user/application/useCases/index'
import { ResponseMessage } from '@shared/infrastructure/utils/index'
import { ResponseOrNullEntity } from '@shared/domain/index'

export default class UserUseCases {
  private readonly userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async login(
    userParams: LoginEntityParams,
    responseMessage: ResponseMessage
  ): Promise<UserEntity> {
    return await new LoginUser(this.userRepository, responseMessage).execute(
      userParams
    )
  }

  async getUser(
    { userId }: { userId: string },
    responseMessage: ResponseMessage
  ): Promise<UserEntity | ResponseOrNullEntity> {
    return await new GetUser(this.userRepository, responseMessage).execute(
      userId
    )
  }

  async listUsers(
    responseMessage: ResponseMessage
  ): Promise<UserEntity[] | ResponseOrNullEntity> {
    return await new ListUsers(this.userRepository, responseMessage).execute()
  }
}
