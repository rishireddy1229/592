
var express = require('express')
var app = express()
app.use(express.json())
const students = [{
    Name: 'sai',
    rollno: '99'
}]
app.get('/', (req, res) => {
    res.send('main page');
})
app.post("/create", (req, res) => {
    const a = req.body
    students.push(a);
    res.send(a);
})
app.get("/student/:rollno", (req, res) => {
    const rollno = req.params.rollno;
    const b = students.filter((student) => {
        return student.rollno === rollno
    })
    console.log(b)
    if (b) {
        res.send(b)
    }
    else {
        res.status(404).send('cannot find details')
    }
})
app.get("/students", (req, res) => {
    res.json(students);
})
app.put("/update/:rollno", (req, res) => {
    const rollno = req.params.rollno
    const data = req.body.name
    const a = students.findIndex((student) => {
        return student.rollno === rollno
    })
    if (a!=-1) {
        students[a] = {data,rollno}
        res.send("update succesfull")
    }
    else {
        res.status(404).send('not updated error')
    }
})
app.delete("/delete/:rollno", (req, res) => {
    const rollno = req.params.rollno
    const b = students.findIndex((student) => {
        return student.rollno === rollno
    })
    if (b != -1) {
        students.splice(b, 1)
        res.send("updated")
    }
    else {
        res.status(404).send("not found data")
    }
})
app.listen(3000, () => {
    console.log("connected")
})