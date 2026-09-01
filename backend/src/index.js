import dotenv from 'dotenv'
dotenv.config()

const { app } = await import('./app.js')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`app is listening on PORT ${PORT}`)
});