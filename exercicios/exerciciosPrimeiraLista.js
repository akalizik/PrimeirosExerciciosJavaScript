 /*Questão 1
let numero = prompt('Insira o número que deseja verificar: ');
numero = Number(numero);

if(numero > 0 ){
    console.log('O número inserido ('+ numero +') é positivo.');
} else if(numero < 0) {
    console.log('O número inserido ('+ numero + ') é negativo.');
} else {
    console.log('Você inseriu o número 0.');
}

*/

/*------------------------*/

/*Questão 2
let nota1 = prompt('Insira a primeira nota: ');
nota1 = Number(nota1);
let nota2 = prompt('Insira a segunda nota: ');
nota2 = Number(nota2);
let nota3 = prompt('Insira a terceira nota: ');
nota3 = Number(nota3);

media = (nota1 + nota2 + nota3) / 3;

if( media >= 7 ){
    console.log('Você está passado de ano! A sua média foi: '+ media);
} else if (media < 7 && media >= 2.6){
    console.log('Você está de exame. A sua média foi: '+ media);
} else if (media < 2,5 ) {
   console.log('Você está reprovado... A sua média foi: '+ media); 
}
*/

/*------------------------*/

/*Questão 3

for (num = 1; num < 30 ; num++){
    if(num % 3 == 0 ){
        console.log(num + " ")
    }
}
*/

/*------------------------*/

/*Questão 4

let numFatorial = prompt('Insira o número que deseja saber o fatorial: ');
numFatorial = Number(numFatorial);

let resultadoFatorial = numFatorial;

while (numFatorial > 1){
    resultadoFatorial = resultadoFatorial*(numFatorial - 1);
    numFatorial--
}
console.log('O Fatorial de '+ numFatorial + ' é: '+ resultadoFatorial);
*/

/*Questao 5

let ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("O ano " + ano + " é bissexto!");
} else {
    console.log("O ano " + ano + " não é bissexto!");
}

*/

/*Questao 6

let temperatura = 20;

let conversao = temperatura * 1.8 + 32;
console.log(conversao);

*/

/*Questao 7

function palindrome(str) {
    var re = /[\W_]/g; 
    var palavra = str.toLowerCase().replace(re, ''); 
    var inversa = palavra.split('').reverse().join(''); 
    return inversa === palavra; 
}

console.log(palindrome("Ovo"))
*/

  
//Questao 8

/*Questao 9

let bubble = [82, 76, 6, 52, 45, 38, 24, 14, 54, 85, 143, 98, 65, 512, 96, 12, 4, 79];
    
function bubbleSort () {
    for (let i = 0; i < bubble.length; i++) {
        if (bubble[i] > bubble[i +1]) {
            let v1 = bubble[i]
            let v2 = bubble[i +1] 
            bubble[i] = v2
            bubble[i +1] = v1
        }
    }
}

for (let j = 0; j < bubble.length ; j++) {
    bubbleSort();
}

console.log(bubble)
*/

