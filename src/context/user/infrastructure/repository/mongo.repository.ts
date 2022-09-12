import { UserRepository, UserEntity } from '@user/domain/index'
import { User } from '@user/infrastructure/models/index'

export default class MongoRepository implements UserRepository {
  async findUserById(_id: string): Promise<any> {
    return await User.findOne({ _id })
  }

  async findAndDelete(_id: string): Promise<any> {
    return await User.deleteOne({ _id })
  }

  async findUserByEmail(email: string): Promise<any> {
    return await User.findOne({ email: email.toLowerCase() })
  }

  async createUser(userIn: UserEntity): Promise<any> {
    return await User.create(userIn)
  }

  async updateUser(userIn: UserEntity): Promise<any> {
    return await User.findOneAndUpdate({ email: userIn?.email }, userIn, {
      new: true
    })
  }

  async listUsers(): Promise<any> {
    return await User.find()
  }
}
