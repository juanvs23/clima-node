const axios=require('axios'),
      {climaAPI}=require('../Apis').module


const clientInformation=async (data)=>{
    let {latitud,longitud}=data;

let datos =axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&lang=sp&appid=${climaAPI}`)
return datos
   
}

exports.module={
    clientInformation
}