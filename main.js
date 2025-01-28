//Registrar y Iniciar sesion
let registro = document.querySelector('#registro');
let login = document.querySelector('#Iniciar_sesion')

document.querySelector('#pag_registrar').addEventListener('click',()=>{
    registro.style.display = 'block'
    login.style.display = 'none'
})

// Patrón para validar formato del email

const verificaciones = {
    usuario: 6,
    emailPattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/
}

// Referencias a elementos de verificación

//iniciar sesion

const error = {
    verificacion: document.querySelector('#verificacion_password'),
    verificacionEmail: document.querySelector('#verificacion_email'),
    campos: document.querySelector('#campos'),
    label1: document.querySelector('#label1'),
    label2: document.querySelector('#label2')
}

//registrarse

const errorRegistro = {
    usuario: document.querySelector('#usuario'),
    verificacionPassword: document.querySelector('#password_verificacion'),
    verificacionEmail: document.querySelector('#email_registro_verificacion'),
    campos: document.querySelector('#campos_registro'),
}

// Iniciar Sesion

document.querySelector('#login').addEventListener('submit', (event) => {
    event.preventDefault(); // Para evitar que el formulario se envíe
    
    // Obtener el botón que fue clicado
    let submitButton = event.submitter;

    // Obtener valores de los input
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if (email === '' && password === '') {
        error.campos.style.display = 'block';
    } else {
        error.campos.style.display = 'none';
        if (password.length < verificaciones.usuario) {
            error.verificacion.style.display = 'block';
            error.label2.style.color = 'red';
        } else {
            error.verificacion.style.display = 'none';
            error.label2.style.color = '';
            if (verificaciones.emailPattern.test(email)) {
                error.verificacionEmail.style.display = 'none';
                error.label1.style.color = '';

                if (submitButton.id === 'login') {
                    // Realizar la acción de iniciar sesión y enviar el formulario
                    console.log('Iniciar sesión');
                    document.querySelector('form').submit();
                } else if (submitButton.id === 'registrar') {
                    // Realizar la acción de registro sin enviar el formulario
                    console.log('Registrarse');
                }
            } else {
                error.verificacionEmail.style.display = 'block';
                error.label1.style.color = 'red';
            }
        }
    }
});

// Registrarse

document.querySelector('#registrate').addEventListener('click',(event)=>{
    event.preventDefault()

    // Obtener valores de los input
    let usuario = document.querySelector('#username').value;
    let email = document.querySelector('#email_registro').value;
    let password = document.querySelector('#password_registro').value;
    let passwordConfirmacion = document.querySelector('#password_confirmacion').value;
    let formulario = document.querySelector('#registrarse');

    //label

    let label1 = document.querySelector('#label3');
    let label2 = document.querySelector('#label4');
    let label3 = document.querySelector('#label5');
    let label4 = document.querySelector('#label6');

    if (usuario === '' && email === '' && password === '' && passwordConfirmacion === ''){
        errorRegistro.campos.style.display = 'block';
    }else {
        errorRegistro.campos.style.display = 'none';

        if(usuario.length < verificaciones.usuario){
            errorRegistro.usuario.style.display = 'block';
            label1.style.color = 'red';
        }else{
            errorRegistro.usuario.style.display = 'none'
            label1.style.color = '';

            if(verificaciones.emailPattern.test(email)){
                errorRegistro.verificacionEmail.style.display = 'none';
                label2.style.color = '';
                if(password.length < verificaciones.usuario){
                    errorRegistro.usuario.style.display = 'block';
                    label3.style.color = 'red';
                }else{
                     errorRegistro.usuario.style.display = 'none'
                     label3.style.color = '';
                     if(password !== passwordConfirmacion){
                        errorRegistro.verificacionPassword.style.display = 'block';
                        label4.style.color = 'red';
                     }else{
                        errorRegistro.verificacionPassword.style.display = 'none';
                        label4.style.color = '';

                        formulario.submit();
                     }
                }
            }else{
                errorRegistro.verificacionEmail.style.display = 'block';
                label2.style.color = 'red';
            }
        }
    }
})
