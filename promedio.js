let lista = [];

function agregarNumero(){
    const inputNumero = document.getElementById("InputNumero");
    const valueNumero = inputNumero.value;
    const valor = Number(valueNumero);
    
    var newlista = lista.push(valor);
//console.log(lista)
    return 0;
};



function calcularMediaAritmetica() {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    // sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    const resultadoP = document.getElementById("ResultadoP")
    resultadoP.innerText = "El promedio de los valores dados es: " + promedioLista;
//console.log(promedioLista)
    return promedioLista
}

