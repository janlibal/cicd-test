//import app from "./app"
import express, {Request, Response, NextFunction} from 'express'

const app = express()



//const PORT: Number = 8080
const port = 8080

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: 'success',
        message: 'Hello world',
    })
}) 

//app.listen(PORT, (): void => console.log(`running on port ${PORT}`))
app.listen(process.env.PORT || port, () => {
    console.log(`Server started on port: ${port}`)
})

