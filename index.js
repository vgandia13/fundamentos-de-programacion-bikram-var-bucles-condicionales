// ITERACIONES PAIR PROGRAMMING

// VARIABLES

// 1.- Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;

// 2.- Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true;
let booleano2 = false;

// 3.- Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14;

// 4.- Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = 2 * PI;

// BOOLEANOS

// 5.- Crear variable booleanoAnd cuyo valor sea la comparacion booleana booleano1 and booleano2
const booleanoAnd = booleano1 && booleano2;

// 6.- Crear variable booleanoNot cuyo valor sea la comparacion booleana no booleano1
const booleanoNot = !booleano1;

// 7.- Crear variable booleanoMix0 cuyo valor sea la comparacion booleana
// (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2))
const booleanoMix0 =
  (booleano1 || booleano2) && (booleano1 || (!booleano2 && !booleano1));

// OPERADORES

// 8.- Crear variable incrementarDesp con valor 2 y asigna su valor con postincremento a resultadoDesp
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

// 9.- Crear variable incrementarAntes con valor 2 y asigna su valor con preincremento a resultadoAntes
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

// BUCLES

// 10.- Crear variable contarHasta10_2 con valor 0 e incrementar su valor con un bucle for
// hasta que se verifique que contarHasta10_2 === 10
let contarHasta10_2 = 0;
for (let i = 0; i < 10; i++) {
  contarHasta10_2 += 1;
}

// 11.- Crear las variables postI y postJ con valor 0 a continuacion cree un bucle que itere 11 veces.
// En cada iteracion se debera sumar al valor de postI el valor de postJ++
let postI = 0,
  postJ = 0;
for (let k = 0; k < 11; k++) {
  postI += postJ++;
}

// 12.- Crear la variable sumaPares con valor 0 a continuacion crea un bucle que itere 10 veces (i < 10)
// si la iteracion es par se debera sumar a sumaPares el numero de la iteracion actual (i)
let sumaPares = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}

// ITERACIONES PROYECTO INDIVIDUAL

// VARIABLES

// 13.- Crear variable tipo let de nombre variableValorNumerico declarada con un valor numerico cualquiera
let variableValorNumerico = 5;

// 14.- Crear variable tipo const de nombre MiNombre declarada con valor tu nombre
const MiNombre = "Victor";

// 15.- Crear variable tipo const de nombre MiNumeroFav declarada con valor numerico
const MiNumeroFav = 9;

// BOOLEANOS

// 16.- Crear variable booleanoOr cuyo valor sea la comparacion booleana booleano1 or booleano2
const booleanoOr = booleano1 || booleano2;

// 17.- Crear variable booleanoMix1 cuyo valor sea la comparacion booleana
// (booleano1 and (TAU/2 sea igual a PI)) or (variableValorNumerico mayor o igual que MiNumeroFav)
const booleanoMix1 =
  (booleano1 && TAU / 2 === PI) || variableValorNumerico >= MiNumeroFav;

// 18.- Crear variable seisNoEsNueve cuyo valor sea la comparacion booleana 6 no es estrictamente igual que 9
const seisNoEsNueve = 6 !== 9;

// 19.- Crear variable booleanoMix2 cuyo valor sea la comparacion booleana
// variableValorNumerico positivo (0 no incluido) o menor que -(MiNumeroFav * TAU)
const booleanoMix2 =
  variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU);

// OPERADORES

// 20.- Crear variable valorSuma cuyo valor sea la suma de MiNumeroFav y variableValorNumerico
const valorSuma = MiNumeroFav + variableValorNumerico;

// 21.- Crear variable valorResta cuyo valor sea la resta de MiNumeroFav y variableValorNumerico
const valorResta = MiNumeroFav - variableValorNumerico;

// 22.- Crear variable valorMultiplicacion cuyo valor sea la multiplicacion de MiNumeroFav por variableValorNumerico
const valorMultiplicacion = MiNumeroFav * variableValorNumerico;

// 23.- Crear variable valorDivision cuyo valor sea la division de MiNumeroFav entre 3
const valorDivision = MiNumeroFav / 3;

// BUCLES

// 24.- Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle while
// hasta que se verifique que contarHasta10 === 10
let contarHasta10 = 0;
while (true) {
  if (contarHasta10 === 10) {
    break;
  } else {
    contarHasta10 += 1;
  }
}

// 25.- Crear las variables preI y preJ con valor 0 a continuacion cree un bucle que itere 11 veces.
// En cada iteracion se debera sumar al valor de preI el valor de ++preJ
let preI = 0,
  preJ = 0;
for (let k = 0; k < 11; k++) {
  preI += ++preJ;
}

// 26.- Crear la variable sumaImpares con valor 0 a continuacion crea un bucle que itere 10 veces (i < 10)
// si la iteracion es impar se debera sumar a sumaImpares el numero de la iteracion actual (i)
let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    sumaImpares += i;
  }
}
