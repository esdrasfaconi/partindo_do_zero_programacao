/*

Desafios

1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
9. Use um loop while para imprimir os números de 1 a 10 no console.
10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

*/

// #1
    console.log("Bem-vindo!");

// #2
    let nome1 = "SeuNome";
    console.log("Olá, " + nome1 + "!");

// #3
    let nome2 = "SeuNome";
    alert("Olá, " + nome2 + "!");

// #4
    let linguagemPreferida = prompt("Qual a linguagem de programação que você mais gosta?");
    console.log("Sua linguagem preferida é: " + linguagemPreferida);

// #5
    let valor1 = 5;
    let valor2 = 10;
    let resultado1 = valor1 + valor2;
    console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultado1 + ".");

// #6
    let valor3 = 15;
    let valor4 = 7;
    let resultado2 = valor3 - valor4;
    console.log("A diferença entre " + valor3 + " e " + valor4 + " é igual a " + resultado2 + ".");

// #7
    let idade = prompt("Digite sua idade:");
    if (idade >= 18) {
      console.log("Você é maior de idade.");
    } else {
      console.log("Você é menor de idade.");
    }

// #8
    let numero = prompt("Digite um número:");
    if (numero > 0) {
      console.log("O número é positivo.");
    } else if (numero < 0) {
      console.log("O número é negativo.");
    } else {
      console.log("O número é zero.");
    }

// #9
    let i = 1;
    while (i <= 10) {
      console.log(i);
      i++;
    }

// #10
    let nota = prompt("Digite sua nota:");
    if (nota >= 7) {
      console.log("Aprovado");
    } else {
      console.log("Reprovado");
    }

// #11
    let numeroAleatorio = Math.random();
    console.log(numeroAleatorio);

// #12
    let numeroInteiro1 = Math.floor(Math.random() * 10) + 1;
    console.log(numeroInteiro1);

// #13
    let numeroInteiro2 = Math.floor(Math.random() * 1000) + 1;
    console.log(numeroInteiro2);
