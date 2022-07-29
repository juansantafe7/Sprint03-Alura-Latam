import { productoServices } from '../servicios/productos-servicios.js'

const nuevoProducto = (name,imageUrl,price,description) => {

    const card = document.createElement("div");

    const contenido = `
    
        
    <div>
    
        <img src="${imageUrl}" alt="">
        <h3>${name}</h3>
        <span>${price}</span>
        <p>${description}</p>

    </div>

    
    ` ;

    card.innerHTML = contenido;
    
    card.classList.add('card');

    return card;

};

const productos = document.querySelector('[data-productos]');

const render = async () => {

    try {

        const listaProductos = await productoServices.listaProductos();

        listaProductos.forEach(elemento => {

            productos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.description))
            
        });

       }

       catch(erro){

        console.log(erro);
    }

}

render()