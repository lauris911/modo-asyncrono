//dependencia a XMLHttpRequest
const http = require('xmlhttprequest').XMLHttpRequest

const url = "https://pokeapi.co/api/v2/type"
//Funcion para conectarnos a un API publica

function get_data(endpoint , exito , fallo){

    let promise =new Promise (function (resolve , rejected){
   //1.crear el objeto de conexion
   const h = new http()
   //2.abrir una conexion a la API
   h.open('GET' , endpoint)
   //3.enviar la request definida 
   h.send()
   //4.una vez recibida la response tratar la info
   h.onload = function(){
    if(h.status === 200){
        resolve(h.responseText)
    }else{
        rejected(h.status)
    }
   
        }
    })
 return promise
}
const exito= data=>{
    const tipos = JSON.parse(data).results
    //recorrer el arreglo de tipos
    tipos.forEach(function (element) {
        console.log(element)
        console.log(`--------------------`)
    });
}

const fallo = status =>{
   console.log(status)
}
 
 const f = async function(){
try{

    let response = await get_data(url)
    exito(response)
}catch (status){
    fallo(status)
}
 }

 f()
  
