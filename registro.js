
// Definir un diccionario para almacenar los registros de usuarios
var registrosUsuarios = {};

function registrarUsuario() {
    // Obtener los valores del formulario
    var usuario = document.getElementById('Usuario').value;
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var Direccion = document.getElementById('direccion').value;
    var contrasenna = document.getElementById('contrasena').value;

    // Validar que los campos no estén vacíos
    if (usuario === '' || nombre === '' || apellidos === '' || correo === '' || Direccion === '' || contrasenna === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (usuario.length < 5) {
        alert('El usuario debe tener al menos 5 caracteres')
        return;
    }

    if (nombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres')
        return;
    }

    if (correo.indexOf('@') === -1) {
        alert('El correo debe contener el símbolo "@" ')
        return;
    }

    if (contrasenna.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres')
        return;
    }

    // Almacenar el registro del usuario en el diccionario
    registrosUsuarios[usuario] = {
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        direccion: Direccion,
        contrasena: contrasenna
    };

    // Puedes realizar acciones adicionales aquí, como enviar los datos a un servidor.

    // Mostrar mensaje de éxito
    alert('Registro exitoso. ¡Bienvenido, ' + nombre + '! Te has registrado como ' + usuario + '.');
    window.location.href = 'InicioSesion.html';
}

function Login() {
    // Obtener los valores del formulario de inicio de sesión
    var Usuario = document.getElementById('Usuario').value;
    var contrasenna = document.getElementById('contrasena').value;

    // Validar que los campos no estén vacíos
    if (Usuario === '' || contrasenna === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Verificar si el usuario existe en el diccionario
    if (registrosUsuarios.hasOwnProperty(Usuario)) {
        // Verificar si la contraseña coincide
        if (registrosUsuarios[Usuario].contrasena === contrasenna) {
            // Contraseña correcta, mostrar mensaje de éxito
            alert('¡Enhorabuena! Has iniciado sesión como ' + Usuario);
            // También puedes redirigir al usuario a una página específica después del inicio de sesión.
            window.location.href = 'index.html';  // Reemplaza 'index.html' con tu página de destino.
        } else {
            // Contraseña incorrecta
            alert('Contraseña incorrecta. Por favor, inténtalo de nuevo.');
        }
    } else {
        // Usuario no encontrado
        alert('Usuario no encontrado. Por favor, regístrate o verifica tus credenciales.');
    }
}
