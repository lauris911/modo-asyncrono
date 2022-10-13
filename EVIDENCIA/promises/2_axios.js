
const http = require('xmlhttprequest').XMLHttpRequest
const needle = require('needle')

const url = "https://data.police.uk/api/forces"

needle('get' , url )
.then(response => response.body)
.then(body =>{
    body.forEach(function (tipo) {
        console.log(`Nombre: ${tipo.name}`)
    })
}).catch ((error) => {
    console.log(Error (`Error : $error`))
   })

