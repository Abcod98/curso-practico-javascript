function agregarNumero() {
    const inputNumero = document.getElementById("InputNumero");
    const valueNumero = inputNumero.value;
    const valor = Number(valueNumero);

    var newlista = lista1.push(valor);

    //ordenar lista
    function ordenar(a,b) { return a - b;}
    lista1.sort(ordenar);

    console.log(lista1);

    const listaP = document.getElementById("ListaP");
    listaP.innerText ="Los datos de la lista son: " + lista1;


    const mitadLista1 = parseInt(lista1.length / 2);

    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }


    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];

        const promedioElemento1y2 = calcularMediana([elemento1,
            elemento2,]);

        mediana = promedioElemento1y2;
    } else {
        mediana = lista1[mitadLista1];
    }

    return 0;
};

let mediana;

let lista1 = [];

function calcularMediana(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function resultadoMediana(){
    const resultadoP = document.getElementById("ResultadoP")
    resultadoP.innerText = "La mediana de los valores dados es: " + mediana;
}


