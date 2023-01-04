
const compra = new Carrito();
const listaCompra= document.querySelector('#lista-compra tbody');
const carrito1= document.getElementById('carrito1');
const procesarCompraBtn = document.getElementById('procesar-compra');
const numeroTarjeta = document.getElementById('cc-number');
const nombreTarjeta = document.getElementById('cc-name');
const expirar = document.getElementById('cc-expiration');
const cvv = document.getElementById('cc-cvv');




cargarEventos();

function cargarEventos(){

    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    carrito1.addEventListener('click', (e)=>{compra.eliminarProducto(e)});

    compra.calcularTotal();

    procesarCompraBtn.addEventListener('click',procesarCompra);

}

function procesarCompra(e){
    e.preventDefault();

    if (compra.obtenerProductosLocalStorage().length === 0){
        window.alert("No hay producto seleccionados");
        window.location = "cart.html";
    }else if (numeroTarjeta.value === ''|| nombreTarjeta.value === ''|| expirar.value === ''|| cvv.value === ''){
        window.alert("Ingresen todos los datos requeridos");
        window.location = "cart.html";
    }else {
        const cargandoGif = document.getElementById('#cargando');
        cargandoGif.style.display = 'block';

        const enviado= document.createElement('img');
        enviado.src= 'images/mail.gif';
        enviado.style.display ='block';
        enviado.width ='150';
        setTimeout(()=>{
            cargandoGif.style.display ='none';
            document.querySelector('#loaders').appendChild(enviado);
        }, 3000);
    }
}