
const carro= new Carrito();
const carrito= document.getElementById('carrito');
const productos= document.getElementById('lista-productos');
const listaProductos= document.querySelector('#lista-carrito tbody');
const vaciaCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBTN = document.getElementById('procesar-pedido');


cargarEventos();

function cargarEventos(){
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    vaciaCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    procesarPedidoBTN.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}