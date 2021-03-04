const persona = {
    nombre:'Walter',
    edad:37,
    casado:true,
    hijo:{
        nombrehijo:'Jean'
    }
}


const {nombre, edad} = persona
console.log(nombre)
console.log(edad)

const {nombrehijo} = persona.hijo
console.log(nombrehijo)