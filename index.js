
const SALIR = 6

const ArrayDeProductos = [];
const ArrayCarrito = [];
let codigoUnico = 1
class producto {
     constructor(codigo, precio, nombre, tamaño, marca) {
          this.codigo = codigo
          this.precio = precio;
          this.nombre = nombre;
          this.tamaño = tamaño;
          this.marca = marca;
     }
}


const jabonRopaVerde = new producto(codigoUnico++, 300, "jabon ropa verde", "1ltr", "prod suelto");
ArrayDeProductos.push(jabonRopaVerde)
const jabonRopaAzul = new producto(codigoUnico++, 300, "jabon ropa Azul", "1ltr", " prod suelto");
ArrayDeProductos.push(jabonRopaAzul)
const jabonRopaVerde1 = new producto(codigoUnico++, 1500, "jabon ropa verde", "5ltr", "prod suelto");
ArrayDeProductos.push(jabonRopaVerde1)
const jabonRopaAzul1 = new producto(codigoUnico++, 1500, "jabon ropa Azul", "5ltr", " prod suelto");
ArrayDeProductos.push(jabonRopaAzul1)
const desodorantePiso1 = new producto(codigoUnico++, 50, "Desodorante de piso", "1ltr", " prod suelto");
ArrayDeProductos.push(desodorantePiso1)
const suavizanteRopaBlanco = new producto(codigoUnico++, 200, "Suavizante de ropa blanco", "1ltr", "prod suelto");
ArrayDeProductos.push(suavizanteRopaBlanco)
console.log  (producto)








const solicitarProductoPor = (nombre) => {

     const filtrado = ArrayDeProductos.filter((el) => el.nombre === nombre);
     let mensajeAMostrar = '';
     filtrado.forEach((el) => {
          mensajeAMostrar += "\n Codigo " + el.codigo + "\n Producto: " + el.nombre + " " + "\n Cantidad" + " " + el.tamaño + "\n Precio: " + " " + el.precio
     });
     const codigo = parseInt(prompt(mensajeAMostrar + "\n" + "Ingrese producto para agregar al carrito"));
     const productoEcontrado = ArrayDeProductos.find(el => el.codigo === codigo);
     ArrayCarrito.push(productoEcontrado);
}
const verCarrito = () => {
     let mensajeAMostrar = 'Lista de Carrito \n';
     ArrayCarrito.forEach((el) =>{
             mensajeAMostrar += "\n" + "Producto: " + el.nombre + " " + "\nPrecio: " + el.precio 
     });
     const total = ArrayCarrito.reduce((acumulador,element) => acumulador + element.precio,0)
     mensajeAMostrar += "\n El total es: " + total
     
     

     if ( total >=3000){ 
          let descuento2=(total*10)/100
          let total1= total-descuento2           
          mensajeAMostrar += "\n Descuento" +" "+ descuento2 +"\n Total final" +" "+ total1
           }else {
           alert ( "ud lleva gastado $" +" "+ total)}
    
     alert(mensajeAMostrar);}


let nombreDeUsuario = prompt("ingrese su nombre");
let apellidoDelUsuario = prompt("ingrese su apellido");

     
     alert("bienvenido a la plataforma " + nombreDeUsuario + " " + apellidoDelUsuario);
         

let numero = parseInt(prompt("ingrese su edad"));

if (numero >= 18) {

     let opcion = parseInt(prompt(" elije la opcion deseada,  \n 1-jabon Ropa Azul 1, \n 2 jabon Ropa Verde 1 ,\n 3 suavizante ropa 1, \n 4 desosorante de piso 1 ,\n 5 Ver carrito,\n 6 salir "))
     while (opcion != SALIR) {
          switch (opcion) {

               case 1:

                    solicitarProductoPor("jabon ropa Azul");

                    break;
               case 2:
                    solicitarProductoPor("jabon ropa verde");
                    break;

               case 3:
                    solicitarProductoPor("Suavizante de ropa blanco");
                    break;
               case 4:
                    solicitarProductoPor("Desodorante de piso");
                    break;
               case 5:
                    verCarrito()
                    break;

               case 5:
                    break;
               default:
                    alert("no esta ingresando un numero correcto");
                    break;
          }

     

     opcion = parseInt(prompt(" elije la opcion deseada,  \n 1-jabon Ropa Azul 1, \n 2 jabon Ropa Verde 1 ,\n 3 suavizante ropa 1, \n 4 desosorante de piso 1 ,\n 5 Ver Carrito\n 6  salir"))
     }
}
          
else { 
     alert("Ud tiene que esperar a cumplir 18 años para poder comprar")
}
 



alert("Gracias por su visita")


