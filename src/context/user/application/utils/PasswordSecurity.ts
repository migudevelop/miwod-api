import bcrypt from 'bcryptjs'
export default class PasswordSecurity {
  private readonly SALT: number = 10

  encript(password: string): string {
    return bcrypt.hash(password, bcrypt.genSaltSync(this.SALT))
  }

  comparePasswords(password: string, currentPassword: string): boolean {
    return bcrypt.compare(password, currentPassword)
  }
}
