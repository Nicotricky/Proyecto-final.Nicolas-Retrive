const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#carrito-body");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaProductos = document.querySelector("#lista-productos");

let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  listaProductos.addEventListener("click", agregarProducto);
  
  //elimina cursos del carrito
  contenedorCarrito.addEventListener('click',eliminarProducto);

  vaciarCarritoBtn.addEventListener('click',()=>{
      articulosCarrito =[];//se recetea el arreglo

      limpiarHTML();//limpia HTML
      clearLocalStorage()
})
}


//funcion para btn que selecciona el producto
function agregarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const ProductoSeleccionado = e.target.parentElement.parentElement;
    leerDatosProducto(ProductoSeleccionado);
  }
}

//elimina un producto del carrito
function eliminarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("eliminar-item")) {
    const productoId = e.target.getAttribute("data-id");

    //eliminar articulo del arreglo
    articulosCarrito = articulosCarrito.filter(
      (producto) => producto.id !== productoId
    );
    carritoHTML();
  }
  
  
}

//lee los datos del producto seleccionado, lo conviete en un objeto y lo agrega a un array
function leerDatosProducto(producto) {
  const dataProducto = {
    imagen: producto.querySelector("img").src,
    nombre: producto.querySelector("h5").textContent,
    precio: parseInt(producto.querySelector(".precio span").textContent),
    id: producto.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //revisar si el elemento agregado ya existe en el carrito
  const existe = articulosCarrito.some(
    (producto) => producto.id === dataProducto.id
  );
  if (existe) {
    //actualizar cantidad
    const producto = articulosCarrito.map((producto) => {
      if (producto.id === dataProducto.id) {
        producto.cantidad++;
        return producto; // retorna objeto actualizado
      } else {
        return producto; // retorna objeto sin actualizar
      }
    });
    articulosCarrito = [...producto];
  } else {
    //agrega elementos al carrito
    articulosCarrito = [...articulosCarrito, dataProducto];
  }
  setLocalStorage()
  
  carritoHTML();
}

// muestra el carrito de compras en el html
function carritoHTML() {
  // limpia el html
  limpiarHTML();

  //recorre el carrito y genera el html
  articulosCarrito.map((producto) => {
    const { imagen, nombre, precio, cantidad, id } = producto;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
        <img src ="${imagen}" width=100>
        </td>
        <td> ${nombre} </td>
        <td> $ ${precio} </td>
        <td> ${cantidad} </td>
        <td>
             <a href="#" class="eliminar-item" data-id="${id}"> X </a>             
        </td>
        
        `;
    //agrega el html del carrito al tbody
    contenedorCarrito.appendChild(row);
  });
}



function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }  
}

function setLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify([...articulosCarrito]) )
}
function removeLocalStorage(){
  localStorage.removeItem('carrito')
}
function clearLocalStorage(){
  localStorage.clear()
}