const jabonRopaVerde1 = 300
const jabonRopaAzul1 = 300
const desodorantePiso1 = 50
const suavizanteRopa1 = 200
const SALIR=5

let nombreDeUsuario = prompt("ingrese su nombre");
let apellidoDelUsuario = prompt("ingrese su apellido");

alert ("bienvenido a la plataforma "+ nombreDeUsuario +" " + apellidoDelUsuario)

let numero=parseInt(prompt("ingrese su edad"))

if ( numero >=18 ){ 
let opcion = parseInt(prompt(" elije la opcion deseada,  \n 1-jabon Ropa Azul 1, \n 2 jabon Ropa Verde 1 ,\n 3 suavizante ropa 1, \n 4 desosorante de piso 1 ,\n 5 salir "))
while(opcion != SALIR) {
switch (opcion){
 
     case 1:
alert ("su costo es de $"+ jabonRopaAzul1);
let cant1 =parseInt(prompt("ingrese la cantidad"));
let resultado1=  jabonRopaAzul1 * cant1
resultado1 = parseInt(resultado1)
if ( cant1 >=5){ 
let descuento1=(resultado1*10)/100
 resultado1= resultado1-descuento1
alert ("Ud lleva gastado $"+ resultado1) 
alert("Ud a ahorrado $" + descuento1)  
 }else {
 alert ( "ud lleva gastado $" +" "+ resultado1 )    
 }
  
break ;
     case 2:
alert ("su costo es de $"+ jabonRopaVerde1);
let cant2 =parseInt(prompt("ingrese la cantidad"));
let resultado2=  jabonRopaVerde1 * cant2
resultado2 = parseInt(resultado2)
if ( cant2 >=5){ 
    let descuento2=(resultado2*10)/100
     resultado2= resultado2-descuento2
    alert ("Ud lleva gastado $"+ resultado2) 
    alert("Ud a ahorrado $" + descuento2)  
     }else {
     alert ( "ud lleva gastado $" +" "+ resultado2 )  
break;
 }
    case 3:
alert( "su costo es de $ "+ suavizanteRopa1);
let cant3 =parseInt(prompt("ingrese la cantidad"));
let resultado3=  suavizanteRopa1 * cant3
resultado3 = parseInt(resultado3)
if ( cant3 >=5){ 
    let descuento3=(resultado3*10)/100
     resultado3= resultado3-descuento3
    alert ("Ud lleva gastado $"+ resultado3) 
    alert("Ud a ahorrado $" + descuento3)  
     }else {
     alert ( "ud lleva gastado $" +" "+ resultado3 )  
break;
 }
     case 4:
alert("su costo es de $"+ desodorantePiso1);
let cant4 =parseInt(prompt("ingrese la cantidad"));
let resultado4=  desodorantePiso1 * cant4
resultado4 = parseInt(resultado4)
if ( cant4 >=5){ 
    let descuento4=(resultado4*10)/100
     resultado4= resultado4-descuento4
    alert ("Ud lleva gastado $"+ resultado4) 
    alert("Ud a ahorrado $" + descuento4)  
     }else {
     alert ( "ud lleva gastado $" +" "+ resultado4 )  
break;
 }
     case 5:
break ;
default:
alert ("no esta ingresando un numero correcto");
break;


}

opcion = parseInt(prompt(" elije la opcion deseada,  \n 1-jabon Ropa Azul 1, \n 2 jabon Ropa Verde 1 ,\n 3 suavizante ropa 1, \n 4 desosorante de piso 1 ,\n 5  salir"))
}
}else{ 
    alert("Ud tiene que esperar a cumplir 18 años para poder comprar")
}

alert ("Gracias por su visita")



