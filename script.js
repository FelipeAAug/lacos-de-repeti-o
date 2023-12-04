/*var n1 = Number(prompt('Digite o primeiro número: '))
var n2 = Number(prompt('Digite o segundo número: '))
var n3 = Number(prompt('Digite o terceiro número: '))
var n4 = Number(prompt('Digite o quarto número: '))
var soma = n1+n2+n3+n4
var media = soma/4
alert(`A soma é igual a: ${soma}, e a média dos números é igual a: ${media}!`)*/

/*var qnt = Number(prompt('Digite a quantidade de números: '))
var soma = 0
var i = 0

while(i<qnt) {
    num = Number(prompt('Digite um número: '))
    soma += num
    i++
}
var media = soma/qnt
alert(`O resultado da soma é: ${soma} e a média é: ${media} `)*/

var num1 = Number(prompt('Digite o primeiro número: '))
var num2 = Number(prompt('Digite o segundo número: '))
let soma = 0

if(num2 > num1) {
    for(var i=num1;i<=num2;i++){
        if (i % 2 != 0){    
    soma+=i
}
}
}
alert(`A soma é ` + soma)
