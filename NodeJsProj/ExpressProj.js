const express = require('express')
const app = express()

const students = []

// function student(id, firstname, lastname, email, classid) {
//     this.id = id;
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.emai = email;
//     this.class =  classid;
// }



app.get("/students", function(req, res){
    res.send(students)
})

app.get('/', function(req, res){
    res.send(console.log('GET GOT GOTTEN'))
})

app.listen(3000, () => console.log('listening on port 3000'))