import { LoginController } from '@user/infrastructure/controllers/index'
import { LoginUser } from '@user/application/index'
import { MongoRepository } from '@user/infrastructure/repository/index'
import { loginValidated } from '@user/infrastructure/middlewares/index'
import { Router as expresRouter } from 'express'
const router = expresRouter()

const userRepo = new MongoRepository()

const loginUseCase = new LoginUser(userRepo)

const loginCtrl = new LoginController(loginUseCase)

router.post('/login', loginValidated, loginCtrl.login)

export default router
