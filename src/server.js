import App from './app'
import 'dotenv/config'

App.listen(process.env.APP_PORT ? process.env.APP_PORT : 3333)