$(document).ready(function () {
  let total = 0;
  function calcularTotal() {
    articulosCarrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
      return total;
    });
  }

  function mostrarTotal() {      
    const mostrarPrecio=document.querySelector('.mostrar-precio')
    mostrarPrecio.textContent = `${total}`
  }
  function resultado() {
    total = 0;
    calcularTotal();
    mostrarTotal();    
  }

  $("#btnTotal").on("click",function(){
    resultado()
  });
  
  $("#vaciar-carrito").on("click",function(){
    resultado()
  });
});
