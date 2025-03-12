import express, { Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'
import pageRouter from './/routes/page.routes'
import dotenv from 'dotenv'
dotenv.config()

// Create server
const app = express()

// Middleware
app.use(cookieParser(process.env.KEY)) // Use cookies
app.use(express.json()) // Allow JSON
app.use(express.urlencoded({ extended: true })) // Allow POST submission
app.set('view engine', 'ejs') // Set view engine to EJS
app.set('views', path.join(__dirname, '../src/views')) // EJS templates location

// Routes
app.use('/', pageRouter)

// 404 Fallback
app.use((req: Request, res: Response) => {
  res.status(404).render('404')
})

// Start server
const PORT = process.env.PORT || 3700
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}...`)
})