import validator from 'validator'
import { ExerciseEntity, ExerciseTypes } from '@exercise/domain/index'
const { isEmpty } = validator

export default class Validations {
  public validateCreateParams({
    name = '',
    shortName = '',
    type = ExerciseTypes.Common
  }: ExerciseEntity): boolean {
    try {
      const validateName: boolean = !isEmpty(name)
      const validateShortName: boolean = !isEmpty(shortName)
      const validateType: boolean =
        !isEmpty(type) && Object.values(ExerciseTypes).includes(type)
      return validateName && validateShortName && validateType
    } catch (error) {
      return false
    }
  }
}
