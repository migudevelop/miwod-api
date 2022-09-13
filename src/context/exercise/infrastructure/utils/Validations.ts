import validator from 'validator'
import { ExerciseEntity } from '@exercise/domain/index'
const { isEmpty } = validator

export default class Validations {
  public validateCreateParams({
    name = '',
    shortName = ''
  }: ExerciseEntity): boolean {
    try {
      const validateName: boolean = !isEmpty(name)
      const validateShortName: boolean = !isEmpty(shortName)
      return validateName && validateShortName
    } catch (error) {
      return false
    }
  }
}
