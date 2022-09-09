import { UserEntity } from '@user/domain/index'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
export default class Jwt {
  private readonly configKey: string

  constructor() {
    this.configKey = process?.env?.TOKEN_SECRET ?? ''
  }

  createToken({ _id, name, surname, email, role }: UserEntity): string {
    const payload = {
      _id,
      name,
      surname,
      email,
      role
    }
    return jwt.sign(payload, this.configKey, { expiresIn: '7d' })
  }

  decodeToken(token: string): any {
    return jwt.verify(token, this.configKey)
  }
}
