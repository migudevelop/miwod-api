import { UserController } from '@user/infrastructure/controllers/index'
import UserUseCase from '@user/application/UserUseCase'
import { MongoRepository } from '@user/infrastructure/repository/index'
import { authenticated } from '@shared/infrastructure/middlewares/index'
import {
  createUserValidated,
  updateUserValidated
} from '@user/infrastructure/middlewares/index'
import { Router as expresRouter } from 'express'
const router = expresRouter()

const userRepo = new MongoRepository()

const userUseCase = new UserUseCase(userRepo)

const userCtrl = new UserController(userUseCase)

router.post('/users/create', createUserValidated, userCtrl.createUser)
router.put(
  '/users/update',
  authenticated,
  updateUserValidated,
  userCtrl.updateUser
)
router.get('/user/:userId', authenticated, userCtrl.getUser)
router.delete('/user/delete/:userId', authenticated, userCtrl.deleteUser)
router.get('/users', authenticated, userCtrl.listUsers)

export default router
