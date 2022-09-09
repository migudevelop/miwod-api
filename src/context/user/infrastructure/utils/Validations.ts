import validator from 'validator'
import { UserEntity, LoginEntity } from '@user/domain/index'
const { isEmpty, isEmail } = validator

export default class Validations {
  public validateUserLoginParams({
    email = '',
    password = ''
  }: LoginEntity): boolean {
    try {
      const validateEmail: boolean = !isEmpty(email) && isEmail(email)
      const validatePassword: boolean = !isEmpty(password)
      return validateEmail || validatePassword
    } catch (error) {
      return false
    }
  }

  public validateCreateUserParams({
    name = '',
    surname = '',
    email = '',
    password = ''
  }: UserEntity): boolean {
    try {
      const validateName: boolean = !isEmpty(name)
      const validateSurname: boolean = !isEmpty(surname)
      const validateEmail: boolean = !isEmpty(email) && isEmail(email)
      const validatePassword: boolean = !isEmpty(password)
      return (
        validateName && validateSurname && validateEmail && validatePassword
      )
    } catch (error) {
      return false
    }
  }

  public validateUpdateUserParams({
    name = '',
    surname = '',
    email = ''
  }: UserEntity): boolean {
    try {
      const validateName: boolean = !isEmpty(name)
      const validateSurname: boolean = !isEmpty(surname)
      const validateEmail: boolean = !isEmpty(email) && isEmail(email)
      return validateName && validateSurname && validateEmail
    } catch (error) {
      return false
    }
  }
}
