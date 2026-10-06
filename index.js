let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = 2 * PI;
const booleanoAnd = booleano1 && booleano2;
const booleanoNot = !booleano1;
const booleanoMix0 =
  (booleano1 || booleano2) && (booleano1 || (!booleano2 && !booleano1));
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;
let contarHasta10_2 = 0;
for (let i = 0; i < 10; i++) {
  contarHasta10_2 += 1;
}
let postI = 0,
  postJ = 0;
for (let k = 0; k < 11; k++) {
  postI += postJ++;
}
let sumaPares = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}
let variableValorNumerico = 5;
const MiNombre = "Victor";
const MiNumeroFav = 9;
const booleanoOr = booleano1 || booleano2;
const booleanoMix1 =
  (booleano1 && TAU / 2 === PI) || variableValorNumerico >= MiNumeroFav;
const seisNoEsNueve = 6 !== 9;
const booleanoMix2 =
  variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU);
const valorSuma = MiNumeroFav + variableValorNumerico;
const valorResta = MiNumeroFav - variableValorNumerico;
const valorMultiplicacion = MiNumeroFav * variableValorNumerico;
const valorDivision = MiNumeroFav / 3;
let contarHasta10 = 0;
while (true) {
  if (contarHasta10 === 10) {
    break;
  } else {
    contarHasta10 += 1;
  }
}
let preI = 0,
  preJ = 0;
for (let k = 0; k < 11; k++) {
  preI += ++preJ;
}
let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    sumaImpares += i;
  }
}
