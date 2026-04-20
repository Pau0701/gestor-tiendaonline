function renderizar(){
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = "";
  
  Productos.forEach((producto) =>{
    const card = document.createElement("div");
    card.classList.add('card');
    
    card.innerHTML = `
    
    <div class = "card-body">
    <p class = "card-nombre">${producto.nombre}</p>
    
    <img class= "card-img" 
    src= "${producto.imagen}"
    description">${producto.descripcion}</p>
    
    <p class="card-precio">$${producto.precio.toLocaleString('es-CO')}</p>
    </div>
    
    `
    galeria.appendChild(card);
  });
}
renderizar();
//imprimir un dato en particular de los objetos.


//nomArrar.forEach

/*
productos.forEach((producto) => {
  console.log(`nombre del producto: ${producto.nombre}`);
  console.log("---");  // Separador visual en consola
});
*/