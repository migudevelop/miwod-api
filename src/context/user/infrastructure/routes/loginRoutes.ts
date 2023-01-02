import UserUseCase from '@user/application/UserUseCase'
import { LoginController } from '@user/infrastructure/controllers/index'
import { MongoRepository } from '@user/infrastructure/repository/index'
import { loginValidated } from '@user/infrastructure/middlewares/index'
import { Router as expresRouter } from 'express'
const router = expresRouter()

const userRepo = new MongoRepository()

const loginUseCase = new UserUseCase(userRepo)

const loginCtrl = new LoginController(loginUseCase)

router.post('/login', loginValidated, loginCtrl.login)

export default router
