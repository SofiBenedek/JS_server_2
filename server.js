import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello, ez a szerver válasza.")
})

app.get('/hello', (req, res) => {
    res.send("<h1>Hello, ez a szerver válasza.</h1>")
})

app.get('/:parameter' , (req, res) => {
    const param = req.params.parameter
    console.log(param)
    res.json({sajatkey: param}) //vagy .send(param) 
})
app.post('/', (req,res) => {
    // const name = req.body.name
    // const age = req.body.age
    const{name, age, email } = req.body
    console.log(`Name: ${name} age: ${age} email: ${email}`)
    //res.json({age, name})
    res.json({message: "OK"})
})

app.listen(3000, () => {
    console.log('Server runs')
});