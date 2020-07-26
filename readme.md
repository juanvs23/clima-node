sistema de indicador del clima en tu ciudad

comandos:
node clima <parametro> <parametro>
el clima de tu ciudad

Opciones:
  --help        Muestra ayuda                                         [booleano]
  --version     Muestra número de versión                             [booleano]
  --ciudad, -c  Direccion solicitada                                 [requerido]
  --pais, -p    Direccion solicitada                                 [requerido]


  Requiere npm install
  crear archivo "configApis.js"
copiar el siguiente contenido en el:
<code>
  const lugarAPI=APIkey de https://opencagedata.com,
climaAPI='APIkey de https://openweathermap.org/'



exports.module={
    lugarAPI,
    climaAPI
}
</code>