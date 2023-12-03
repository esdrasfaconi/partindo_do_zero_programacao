/*

Desafios

1. Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.
2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
6. Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

*/

// #2
    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Hora do Desafio';

// #3
    function verificarChute() {
        console.log('O botão foi clicado')
    }

// #4
    function alerta() {
        alert('Eu amo JS 🤩');
    }

// #5
    function pedirCidade() {
        let cidade = prompt("Digite o nome de uma cidade do Brasil:");
        
        if (cidade !== null) {
          alert("Estive em " + cidade + " e lembrei de você.");
        }
      }

// #6
    function somaNumeros() {
        let numero1 = prompt("Digite o primeiro número:");
        let numero2 = prompt("Digite o segundo número:");
      
        // Converte as entradas para números
        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);
      
        if (!isNaN(numero1) && !isNaN(numero2)) {
          let resultado = numero1 + numero2;
          alert("O resultado da soma é " + resultado);
        } else {
          alert("Por favor, digite apenas números.");
        }
      }