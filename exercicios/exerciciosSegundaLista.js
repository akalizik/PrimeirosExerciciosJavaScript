/*
Questão 1

function adicionar (num1, num2){
    return num1 + num2
}

const resultado = adicionar(7, 9);
console.log(resultado);
*/

/*
Questão 2

function subtrair (num1, num2){
    return num1 - num2
}

const resultado = adicionar(9, 7);
console.log(resultado);
*/


/*
Questão 3

let produto = (num1, num2) => {
    return num1 * num2
}

const resultado = produto(77, 99);
console.log(resultado);
*/

/*
Questão 4

function ehPar (num1){
    
    if( num1 % 2 == 0 ){
        return true;
    } else { 
    return false;
    } 
}

const resultado = ehPar();
console.log(resultado);
*/

/*
Questão 5

function calcularMedia(nums) {
    let soma = 0;

for(let aka = 0 ; aka < nums.length ; aka++) {
    soma += nums[aka]
}
return soma / nums.length;

}

console.log(calcularMedia([1, 2, 3, 4, 5]));
*/

/*
Questão 6

const toUpperCase = string => string.toUpperCase();

console.log(toUpperCase("cancum"));
*/

/*
Questão 7

function filtrarNumeros(numsArray, num){
    let result = [];

    for( let aka = 0 ; aka < numsArray.length ; aka++) {
        if (numsArray[aka] > num) {
            result.push(numsArray[aka])
        }
    }
    return result;
}

let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 5;
console.log(filtrarNumeros(numsArray, num)); // [6, 7, 8, 9]
*/

/*
Questão 8
function contarOcorrencias(array, valor){

    let repetido = 0;

    for( let aka = 0 ; aka < array.length ; aka++ ){

        if (array[aka] == valor ) {
            repetido++
        }

    }
    return repetido;
}

let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let valor = 4;
console.log(contarOcorrencias(array, valor));
*/

/*
Questão 9
var texto = prompt("Insira um texto qualquer");
texto = texto.toLowerCase();


function contarVogais(texto){

    var contadorVogal = 0;

    for( var aka = 0 ; aka < texto.length ; aka++ ){

        if (texto.charAt(aka) == "a" || texto.charAt(aka) == "e" || texto.charAt(aka) == "i" || texto.charAt(aka) == "o" || texto.charAt(aka) == "u"){
            contadorVogal++
        }
    }
    return contadorVogal;
}

console.log(contarVogais(texto)); // 10
*/

/*
Questão 10 

function criarArray(numero){

   const antecedentes = [];

    for( var aka = 1; aka <= numero ; aka++){
        antecedentes[aka] = aka;
}
return antecedentes;
}

let numero = 9;
console.log(criarArray(numero)); // [1, 2, 3, 4, 5]
*/

/*
Questão 11
*/



/*
Questão 12

console.log(Math.floor(Math.random() * 100));
*/


/*
Questão 13


const data1 = new Date ("2007-02-26");
const data2 = new Date ("1998-02-02");

function diferencaDias (data1, data2){

    var diferencaEmDias = data1.getTime() - data2.getTime();

    return diferencaEmDias = diferencaEmDias / (1000 * 60 * 60 * 24);
}

console.log(diferencaDias(data1, data2));

*/

/*
Questão 13 v2
*/

