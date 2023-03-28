// console.log('listado de personas')
const personas = [
    new Persona('Juan','Perez'),
    new Persona('Maria','Rivera'),
    new Persona('Kevin','Prada')
]

function mostrarPersonas (){
    console.log('mostrar personas.....')

    let texto = ''
    for(persona of personas){
        console.log(persona)
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML = texto

}

