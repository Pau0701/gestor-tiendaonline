function renderizar() {
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = "";

  Productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img class="card-img" src="${producto.imagen}" alt="${producto.nombre}">

      <div class="card-body">
        <p class="card-nombre">${producto.nombre}</p>
        <p class="card-descripcion">${producto.descripcion}</p>
        <p class="card-precio">$${producto.precio.toLocaleString('es-CO')}</p>
      </div>
    `;

    galeria.appendChild(card);
  });
}

renderizar();
