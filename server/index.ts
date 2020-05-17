import express from 'express'
import path from 'path'

const app = express()

app.use('/', express.static(path.join('build')))

const PORT = process.env.PORT || '3030'

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})