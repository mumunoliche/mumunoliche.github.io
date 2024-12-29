const form = document.getElementById('ticketForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío inmediato para agregar lógica
    const formData = new FormData(form);

    // Envía el formulario usando Fetch
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            console.log('Formulario enviado correctamente');
            alert('Formulario enviado exitosamente.');
            form.reset();
        } else {
            console.log('Hubo un problema al enviar el formulario');
            alert('Ocurrió un error. Intenta nuevamente.');
        }
    }).catch(error => {
        console.error('Error al enviar el formulario:', error);
        alert('Error al enviar el formulario. Por favor, inténtalo más tarde.');
    });
});
