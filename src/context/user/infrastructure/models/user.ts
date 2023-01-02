import { Schema, model } from 'mongoose'
import { UserEntity } from '@user/domain/index'

const DEFAULT_STRING_CONFIG = { type: String, required: true, min: 6, max: 255 }

const UserSchema = new Schema<UserEntity>({
  name: DEFAULT_STRING_CONFIG,
  surname: DEFAULT_STRING_CONFIG,
  email: DEFAULT_STRING_CONFIG,
  password: { type: String, required: true, minlength: 6 },
  createAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  role: { type: String, required: true, default: 'admin' }
})

UserSchema.methods.toJSON = function () {
  const obj = this.toObject()
  delete obj.password
  return obj
}

const User = model<UserEntity>('User', UserSchema)

export default User
