let divProduct = document.querySelector("#product-view");

async function obtenerProductos(result) {
    //https://docs.google.com/spreadsheets/d/1ox9wskDhmQCC--jcWSNbNKR-Oc3zTR5ufEayvUM88bM/
    try {
        const idSheet = "1ox9wskDhmQCC--jcWSNbNKR-Oc3zTR5ufEayvUM88bM";
        let productos = await getSheet(idSheet, "hoja");
        let cardProductos = "";

        productos.forEach(producto => {
            let id = producto.id;
            let nombre = producto.nombre;
            let precio = producto.precio;
            let imagen = producto.imagen;
            let descuento = producto.descuento;
            let tipo = producto.tipo;
            let descripcion = producto.descripcion;
            let etiquetas = producto.etiquetas;
            
            if (result == id) {
                // console.log(id, nombre, precio, imagen, descuento, tipo, descripcion, etiquetas);
                // divProduct.innerHTML = "";
                divProduct.innerHTML = `
                <div class="row">
                    <div class="col-12 col-md-8">
                        <img src="./public/${imagen}" width="900" height="900" alt="" class="product-view__image">
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="d-flex flex-column py-5">
                            <p class="product-view__title mb-3">${nombre}</p>
                            <p class="product-view__description mb-3">${descripcion}</p>
                            <p class="product-view__price">$${precio}</p>
                            <a href="#" class="btn product-view__addCart my-3">Add to cart <ion-icon name="cart-outline" class="ms-2"></ion-icon></a>
                        </div>
                    </div>
                </div>
                `
            } else {
                // divProduct.innerHTML = `<h1>Producto no encontrado</h1>`
            }
        });
    } catch (e) {
        console.error(`Error al obtener data del sheet: ${e}`);
    }
}

