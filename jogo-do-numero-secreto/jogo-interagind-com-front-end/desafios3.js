/*

Desafios

1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

*/

// #1
        function calcularIMC(altura, peso) {
            const imc = peso / (altura * altura);
            return imc.toFixed(2);
        }
        
        // Exemplo de chamada da função
        let altura = 1.75;
        let peso = 70;
        let resultadoIMC = calcularIMC(altura, peso);
        console.log("O IMC é: " + resultadoIMC);
      
// #2
        function calcularFatorial(numero) {
            if (numero === 0 || numero === 1) {
            return 1;
            } else {
            return numero * calcularFatorial(numero - 1);
            }
        }
        
        // Exemplo de chamada da função
        let numeroFatorial = 5;
        let resultadoFatorial = calcularFatorial(numeroFatorial);
        console.log("O fatorial de " + numeroFatorial + " é: " + resultadoFatorial);
     
// #3
        function converterDolarParaReal(valorDolar) {
            const cotacaoDolar = 4.80;
            const valorReal = valorDolar * cotacaoDolar;
            return valorReal.toFixed(2);
        }
        
        // Exemplo de chamada da função
        let valorDolar = 50;
        let resultadoConversao = converterDolarParaReal(valorDolar);
        console.log("O valor em reais é: R$" + resultadoConversao);
      
// #4
        function calcularAreaPerimetroRetangular(altura, largura) {
            const area = altura * largura;
            const perimetro = 2 * (altura + largura);
            console.log("Área: " + area);
            console.log("Perímetro: " + perimetro);
        }
        
        // Exemplo de chamada da função
        let alturaRetangular = 5;
        let larguraRetangular = 8;
        calcularAreaPerimetroRetangular(alturaRetangular, larguraRetangular);
     
// #5
        function calcularAreaPerimetroCircular(raio) {
            const pi = 3.14;
            const area = pi * (raio ** 2);
            const perimetro = 2 * pi * raio;
            console.log("Área: " + area.toFixed(2));
            console.log("Perímetro: " + perimetro.toFixed(2));
        }
        
        // Exemplo de chamada da função
        let raioCircular = 4;
        calcularAreaPerimetroCircular(raioCircular);
     
// #6
        function mostrarTabuada(numero) {
            for (let i = 1; i <= 10; i++) {
            console.log(numero + " x " + i + " = " + numero * i);
            }
        }
        
        // Exemplo de chamada da função
        let numeroTabuada = 7;
        mostrarTabuada(numeroTabuada);
  
