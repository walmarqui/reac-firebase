//Repaso JavaScrip
//funciones
function saludar(){
    console.log('Hola')
}
saludar()

// funciones Arrow un solo console.log en una linea
// si fueran varia lineas llevaria {} despues de =>
const saludo = () => console.log('Hola desde una funcion Arrow')
saludo()

//Funciones Arrow con parametros
const saluda = (a,b,c) => {
    return a + ' ' + b + ' ' + c
}
console.log(saluda('Walter Marinez', 35, true))