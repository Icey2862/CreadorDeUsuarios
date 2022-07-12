let user = document.getElementById("inputUsuario")
let mail = document.getElementById("inputCorreo")
let pass = document.getElementById("inputPassword")
let años = document.getElementById("inputEdad")
let nacion = document.getElementById("inputNacion")
let formulario = document.getElementById("form")
let submit = document.getElementById("submit")

let usuario = []


class Usuario{
    constructor(userName, email, password, edad, nacion){
        this.userName = userName
        this.email= email
        this.password = password
        this.edad = edad
        this.nacion= nacion
    }
}

submit.onclick = (event) => validarFormulario(event)

function validarFormulario(event){
    event.preventDefault()
    let userName = user.value
    let email = mail.value
    let password = pass.value
    let edad = años.value
    let nacionalidad = nacion.value
    let usuario = new Usuario(userName, email, password, edad, nacionalidad)
    console.log(usuario)
}


