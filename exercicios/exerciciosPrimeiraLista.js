/* Questão 1
let numero = prompt('Insira o número que deseja verificar: ');
numero = Number(numero);

if(numero > 0 ){
    console.log('O número inserido('+ numero +') é positivo.');
} else if(numero < 0) {
    console.log('O número inserido('+ numero + ') é negativo.');
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

/*Questão 4*/

let numFatorial = prompt('Insira o número que deseja saber o fatorial: ');
numFatorial = Number(numFatorial);

let resultadoFatorial = numFatorial;

while (numFatorial > 1){
    resultadoFatorial = resultadoFatorial*(numFatorial - 1);
    numFatorial--
}
console.log('O Fatorial de '+ numFatorial + ' é: '+ resultadoFatorial);