alert('Bem-vindo ao jogo do número secreto');
const numeroMax = 5000; 
const numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// Verifica o valor de "chute" após a entrada do usuário
console.log('Valor do chute:', chute);

// Verifica a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

// Enquanto o chute não for igual ao número secreto
while (chute !== numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMax}`);

    // Uso do parseInt para garantir que o valor de "chute" seja tratado como número
    chute = parseInt(chute);

    // Verificação para garantir que o valor de "chute" seja um número válido
    if (isNaN(chute) || chute < 1 || chute > 5000) {
        alert('Por favor, insira um número válido entre 1 e 5000.');
        continue;
    }

    // Se o chute for igual ao número secreto
    if (chute === numeroSecreto) {
        break;
    } else {
        // Se o chute for maior ou menor que o número secreto
        const mensagem = chute > numeroSecreto ? 'menor' : 'maior';
        alert(`O número secreto é ${mensagem} que ${chute}`);
        
        // Verifica o valor de "numeroSecreto" quando o jogador erra
        console.log('Valor do número secreto:', numeroSecreto);
        
        alert('Você errou 😟');

        // tentativas = tentativas + 1;
        tentativas++; 
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} 🤩`);

// if (tentativas > 1) {
//     alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas 🤩`);
// } else {
//     alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa 🤩`);
// }

