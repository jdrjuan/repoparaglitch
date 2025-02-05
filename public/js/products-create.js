
const form = document.querySelector('#products-create-form');

form.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(form);
    const jsonData = { };
    
    formData.forEach((value, key) => {
        jsonData[key] =  value;
    });
    // console.log(jsonData);

    // Se elimina, de momento, la propiedad mainPhoto
    // TODO: Agregar funcionalidad de envío de foto
    delete jsonData.mainPhoto;
    
    try {
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(jsonData)
        });
        const result = await response.json();
        // console.log(result);

        if (result.message !== 'ok') {
            throw new Error('El servidor no pudo dar de alta el producto');
        }
    
        form.reset();

        alert('🟢 Producto dado de alta con éxito');

    } catch (error) {
        console.error(`No se pudo procesar la solicitud. Detalles: ${error.message}`);
        alert('🔴 Se produjo un error al intentar crear el producto.\nEsperá unos minutos y volvé a intentarlo.');
    }

});
