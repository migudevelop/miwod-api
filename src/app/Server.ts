import express, { Router, Express } from 'express'

export default class Server {
  private readonly API_URL_NAME: string = '/api'
  private readonly port: string
  private readonly app: Express

  constructor() {
    this.port = process?.env?.PORT ?? '3005'
    this.app = express()
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.json())
    // Configure headers and CORS
    this.app.use((_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header(
        'Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
      )
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
      )
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
      next()
    })
  }

  get(): Express {
    return this.app
  }

  addRoute(newRoute: Router): void {
    this.app.use(this.API_URL_NAME, newRoute)
  }

  listen(): any {
    return this.app.listen(this.port, () =>
      console.log(`Conected in port: ${this.port}`)
    )
  }
}
