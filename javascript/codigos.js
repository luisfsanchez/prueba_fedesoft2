 
var i=0; 
for (i=0;i<=5;i++) { 
document.write("El número es " + i);
document.write("<br />"); 
}


function calculaPrecioTotal(precio) {
	alert(precio);
  var impuestos = 1.16;
  var gastosEnvio = 10;
  var precioTotal = ( precio * impuestos ) + gastosEnvio;
alert(precioTotal);
}
 //calculaPrecioTotal(23.34);
 
 
var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
var letras = cadena.split("");
var resultado = "";
 
for(i in letras) {
  if(letras[i] == 'a') {
    break;
  }
  else {
    resultado += letras[i];
  }
}
alert(resultado);
