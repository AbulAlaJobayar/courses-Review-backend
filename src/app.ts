import cors from'cors'
import express, { Application, Request, Response } from 'express'
import notFound from './app/middleware/notFound'
import globalErrorHandler from './app/middleware/globalErrorHandlear'
import globalRoutes from './app/routes'
const app:Application = express()

app.use(express.json())
app.use(cors())

app.use('/api',globalRoutes)
app.get('/', (req:Request, res:Response) => {
  res.json({
    status:'success',
    message:'Course Review server running'
  })
})

app.use(notFound)
app.use(globalErrorHandler)


export default app
