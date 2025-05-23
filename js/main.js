let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    let lista = document.getElementById("carrito");
    let totalSpan = document.getElementById("total");
    lista.innerHTML = "";
    carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio}`;
        lista.appendChild(li);
    });
    totalSpan.textContent = total;
}