import { connect } from 'mongoose'
import Server from '@app/Server'
import dotenv from 'dotenv'

dotenv.config()

export default class MongoConexion {
  private readonly dbURL: string
  private readonly dbName: string
  private readonly server: Server

  constructor(server: Server) {
    this.dbURL = process?.env?.DB_URL ?? ''
    this.dbName = process?.env?.DB_NAME ?? ''
    this.server = server
  }

  async conectDB(): Promise<any> {
    return await connect(`${this.dbURL}/${this.dbName}`)
      .then(() => {
        this.server.listen()
      })
      .catch((err) => console.log(err))
  }
}
