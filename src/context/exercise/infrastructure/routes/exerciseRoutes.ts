import { ExerciseController } from '@exercise/infrastructure/controllers/index'
import ExerciseUseCase from '@exercise/application/ExerciseUseCase'
import { MongoRepository } from '@exercise/infrastructure/repository/index'
import { authenticated } from '@shared/infrastructure/middlewares/index'
import { createValidated } from '@exercise/infrastructure/middlewares/index'
import { Router as expresRouter } from 'express'
const router = expresRouter()

const exerciseRepo = new MongoRepository()

const exerciseUseCase = new ExerciseUseCase(exerciseRepo)

const exerciseCtrl = new ExerciseController(exerciseUseCase)

router.post('/exercise/create', createValidated, exerciseCtrl.createUser)
router.get('/exercise/:exerciseId', authenticated, exerciseCtrl.getUser)
router.get('/exercises', authenticated, exerciseCtrl.listUsers)

export default router
