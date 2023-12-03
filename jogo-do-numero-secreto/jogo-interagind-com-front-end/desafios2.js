/*

Desafios

1. Criar uma função que exibe "Olá, mundo!" no console.
2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

*/

// #1
    function olaMundo() {
      console.log("Olá, mundo!");
    }

    // Chamada da função
    olaMundo();

// #2
    function olaNome(nome) {
      console.log("Olá, " + nome + "!");
    }

    // Chamada da função
    olaNome("SeuNome");

// #3
    function dobroNumero(numero) {
      return numero * 2;
    }

    // Chamada da função
    let resultadoDobro = dobroNumero(5);
    console.log("O dobro é: " + resultadoDobro);

// #4
    function mediaTresNumeros(num1, num2, num3) {
      return (num1 + num2 + num3) / 3;
    }

    // Chamada da função
    let resultadoMedia = mediaTresNumeros(10, 15, 20);
    console.log("A média é: " + resultadoMedia);

// #5
    function maiorEntreDois(num1, num2) {
      return num1 > num2 ? num1 : num2;
    }

    // Chamada da função
    let maiorNumero = maiorEntreDois(8, 5);
    console.log("O maior número é: " + maiorNumero);

// #6
    function multiplicacaoPorSiMesmo(numero) {
      return numero * numero;
    }

    // Chamada da função
    let resultadoMultiplicacao = multiplicacaoPorSiMesmo(4);
    console.log("O resultado da multiplicação é: " + resultadoMultiplicacao);
