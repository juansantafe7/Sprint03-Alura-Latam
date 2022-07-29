const listaProductos = () => fetch("http://localhost:3000/productos-puntoi").then(respuesta => respuesta.json());


export const productoServices = {

    listaProductos,

}

