/*

Desafios

1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

*/

// #1
        let diaSemana = prompt("Qual é o dia da semana?");
        if (diaSemana === "Sábado" || diaSemana === "Domingo") {
            alert("Bom fim de semana!");
        } else {
            alert("Boa semana!");
        }

// #2
        let numero = prompt("Digite um número:");
        if (numero > 0) {
            alert("O número é positivo.");
        } else if (numero < 0) {
            alert("O número é negativo.");
        } else {
            alert("O número é zero.");
        }

// #3
        let pontuacao = prompt("Digite a pontuação do jogo:");
        if (pontuacao >= 100) {
            alert("Parabéns, você venceu!");
        } else {
            alert("Tente novamente para ganhar.");
        }

// #4
        let saldo = 500; // Suponhamos que o saldo seja 500
        alert(`Seu saldo atual é de R$${saldo}.`);

// #5
        let nomeUsuario = prompt("Insira seu nome:");
        alert(`Bem-vindo(a), ${nomeUsuario}!`);