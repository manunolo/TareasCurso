function saludo(nombre)
{
    alert("Bienvenido " + nombre);
}
var nombreIngresado = '';

while(nombreIngresado == '')
{
    nombreIngresado= prompt("Ingrese su nombre");
}

saludo(nombreIngresado);

