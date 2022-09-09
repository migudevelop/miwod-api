import { UserController } from '@user/infrastructure/controllers/index'
import { ListUsers } from '@user/application/index'
import { MongoRepository } from '@user/infrastructure/repository/index'
import { authenticated } from '@shared/infrastructure/middlewares/index'
import { Router as expresRouter } from 'express'
const router = expresRouter()

const userRepo = new MongoRepository()

const listUserUseCase = new ListUsers(userRepo)

const userCtrl = new UserController(listUserUseCase)

// router.post('/users/create', userCtrl.create)
// router.put('/users/update', authenticated, userCtrl.update)
// router.get('/user/:userId', authenticated, userCtrl.getUser)
// router.delete('/user/delete/:userId', authenticated, userCtrl.delete)
router.get('/users', authenticated, userCtrl.listUsers)

export default router
