// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
    })
})()

function validarDatos() {
    if(formConsultas.nombre.value ==0){
        alert("Complete el nombre mínimo 3 caracteres")
        formConsultas.nombre.value ="";
        formConsultas.nombre.focus();
        return false;
    }
    else  if(formConsultas.apellido.value ==0){
    alert("Complete el apellido mínimo 3 caracteres")
    formConsultas.apellido.value ="";
    formConsultas.apellido.focus();
    return false;
    }
    else  if(formConsultas.email.value ==0){
    alert("Complete el mail mínimo 3 caracteres")
    formConsultas.email.value ="";
    formConsultas.email.focus();
    return false;
    }
    else  if(formConsultas.consulta.value ==0){
        alert("Complete la cosulta mínimo 5 palabras")
        formConsultas.consulta.value ="";
        formConsultas.consulta.focus();
        return false;
    }
    else{
        alert("Felicitaciones hemos recibido tu consulta");
    }
}
/*boton bienvenida*/
function mOver(obj) {
    obj.innerHTML = "Hola"
}
function mOut(obj) {
    obj.innerHTML = "Bienvenidos"
}
