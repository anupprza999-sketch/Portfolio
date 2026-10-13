import express from 'express'
import cors from 'cors'
import { env } from './config/env.js'
import apiRouter from './routes/index.js'
import { errorHandler } from './middleware/errorHandler.js'

const app = express()
const port = env.PORT

import path from 'path'

app.use(express.static(path.resolve(__dirname, '../../frontend/dist')));
app.use(express.json())

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../frontend/dist/index.html'))
})

export default app

if (env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`)
  })
}

