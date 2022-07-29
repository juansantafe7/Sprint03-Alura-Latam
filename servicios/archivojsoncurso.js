//backticks
const crearNuevaLinea = (name, imageUrl, price, description) => {
    const linea = document.createElement("div");
    const contenido = `

    <div>
    
        <img src="${imageUrl}" alt="">
        <h3>${name}</h3>
        <span>${price}</span>
        <p>${description}</p>

    </div>

    `;
    linea.innerHTML = contenido;
    return linea;
  };
  
  const table = document.querySelector("[data-productos]");
  
  //Abrir http (método,url)
  
  // CRUD   - Métodos HTTP
  // Create - POST
  // Read   - GET
  // Update - PUT/PATCH
  // Delete - DELETE
  
  const listaClientes = () => fetch('http://localhost:3000/productos-puntoi').then(respuesta => respuesta.json())


  listaClientes()
    .then((data) => {
      data.forEach((perfil) => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
      });
    })
    .catch((error) => alert("Ocurrió un error"));
  
   console.log(data);
  
  