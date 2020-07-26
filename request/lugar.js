const axios=require('axios'),
      {lugarAPI}=require('../configApis').module

const obtenerUbicacion= async (direccion)=>{

    
    let urlDirection=encodeURI(direccion).replace(',','%2C')
    //console.log(urlDirection)
    let resp = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${urlDirection}&key=${lugarAPI}&language=es&pretty=1`)
    if(resp.status!==200){
       throw new Error('Error No hay conexion', resp.status)
       return {error:true}
   }
   if(resp.data.total_results===0){
       console.log(`No hay resultados ${direccion}`)
       return {error:true}
    }
    

let {geometry:{lat,lng},formatted}=resp.data.results[0]
//console.log(lat,lng) 

        return {formatted, latitud:lat,longitud:lng}
    
}  


exports.module={
    obtenerUbicacion
}