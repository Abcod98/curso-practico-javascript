// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El parametro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log ("El area del cuadrado es: " + areaCuadrado + "cm^2")
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//    "Los lados del triangulo miden: "
//    + ladoTriangulo1
//    + "cm, "
//    + ladoTriangulo2
//    + "cm, "
//    + baseTriangulo
//    + "cm"  
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del ciruculo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
//console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


// Aqui interactuamos con el HTML

// Funciones Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Funciones Triangulo
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputLado1");
    const valueLado1 = inputLado1.value;
    const valor1 = Number(valueLado1);

    const inputLado2 = document.getElementById("InputLado2");
    const valueLado2 = inputLado2.value;
    const valor2 = Number(valueLado2);

    const inputBase = document.getElementById("InputBase");
    const valueBase = inputBase.value;
    const valor3 = Number(valueBase);

    const perimetro = perimetroTriangulo(valor1, valor2, valor3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBaseArea = document.getElementById("InputBaseArea");
    const valueBaseArea = inputBaseArea.value;
    const valor1 = Number(valueBaseArea);

    const inputAltura = document.getElementById("InputAltura");
    const valueAltura = inputAltura.value;
    const valor2 = Number(valueAltura);

    const area = areaTriangulo(valor1, valor2);
    alert(area);
}

// Funciones Circulo

function calcularPerimetroCirculo(){
    const inputCirculo = document.getElementById("InputCirculo");
    const valueCirculo = inputCirculo.value;
    const valor1 = Number(valueCirculo);

    const perimetro = perimetroCirculo(valor1);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const inputCirculo = document.getElementById("InputCirculo");
    const valueCirculo = inputCirculo.value;
    const valor1 = Number(valueCirculo);

    const area = areaCirculo(valor1);
    alert(area);
}