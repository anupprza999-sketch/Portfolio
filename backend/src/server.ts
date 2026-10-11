import express from 'express'
import cors from 'cors'
import { env } from './config/env.js'
import apiRouter from './routes/index.js'
import { errorHandler } from './middleware/errorHandler.js'

const app = express()
const port = env.PORT

app.use(cors({ origin: env.FRONTEND_ORIGIN }))
app.use(express.json())

app.use('/api', apiRouter)
app.use(errorHandler)

export default app

if (env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`)
  })
}

