const lista1 = [];
var moda;
function agregarNumero(){
// Traemos los numeros escritos en el input del HTML
    const inputNumero = document.getElementById("InputNumero");
    const valueNumero = inputNumero.value;
    const valor = Number(valueNumero);

    var newlista = lista1.push(valor);

    console.log(lista1);
    const listaP = document.getElementById("ListaP");
    listaP.innerText ="Los datos de la lista son: " + lista1;
    
// Empezamos con nuestras funciones para calcular la moda
    const lista1Count = {};
    
    lista1.map(
        function (elemento) {
            if(lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );
    
    const lista1Array = Object.entries(lista1Count).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1]
        }
    );
    
    moda = lista1Array[lista1Array.length - 1];
}


// Muestra la moda en la pagina web
function resultadoModa(){
    const resultadoP = document.getElementById("ResultadoP")
    resultadoP.innerText = "La mediana de los valores dados es: " + moda;
}
