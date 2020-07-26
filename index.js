const argv=require('yargs')
            .command('clima','el clima de tu ciudad',{
            ciudad:{
                demand:true,
                alias:'c',
                desc:'Direccion solicitada'
            },
            pais:{demand:true,
                alias:'p',
                desc:'Direccion solicitada'}
        })
        .argv,
        {clientInformation}=require('./request/clima').module,
        {obtenerUbicacion}=require('./request/lugar').module;



 let direccion = `${argv.ciudad}, ${argv.pais}`;

let datos =obtenerUbicacion(direccion)
        
datos.then(resp=>{
    
     if (!resp.error) {
        clientInformation(resp).then(resp=>{
            let {weather,main,wind}=resp.data
            console.log(`La temperatura en ${direccion} es de ${main.temp}ºC, con ${weather[0].description}`)
        })
    } else {
        console.log('Intente de nuevo')  
     }
   
})
.catch(err=>console.log(`La ciudad no existe`))