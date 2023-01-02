import MongoConexion from './db/MongoConexion'
import Server from './Server'
import { loginRoutes, userRoutes } from '@user/infrastructure/routes/index'
import { exerciseRoutes } from '@exercise/infrastructure/routes/index'

const server = new Server()
server.addRoute(loginRoutes)
server.addRoute(userRoutes)
server.addRoute(exerciseRoutes)

new MongoConexion(server).conectDB()
