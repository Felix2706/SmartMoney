const questions = [
    {
        question: "O que é um orçamento pessoal?",
        options: [
            "Uma planilha para gastar mais dinheiro",
            "Uma lista de todas as suas despesas e receitas",
            "Uma conta bancária",
            "Uma forma de fazer empréstimos"
        ],
        correctAnswer: 1,
        explanation: "Um orçamento pessoal é uma ferramenta para controlar suas receitas e despesas."
    },
    {
        question: "Qual dessas opções é uma boa prática financeira?",
        options: [
            "Comprar tudo o que você quer no cartão de crédito",
            "Guardar parte da sua renda todo mês",
            "Empréstimos de longo prazo para financiar lazer",
            "Deixar seu dinheiro parado na conta corrente"
        ],
        correctAnswer: 1,
        explanation: "Guardar parte da sua renda todo mês é uma forma de garantir segurança financeira no futuro."
    },
    {
        question: "O que significa 'juros compostos'?",
        options: [
            "Os juros que você paga por empréstimos bancários",
            "Os juros que se acumulam sobre os juros anteriores",
            "O pagamento do juros após um ano",
            "Não tem nada a ver com finanças"
        ],
        correctAnswer: 1,
        explanation: "Juros compostos são aqueles que se acumulam sobre o valor original e também sobre os juros gerados anteriormente."
    },
    {
        question: "O que é uma reserva de emergência?",
        options: [
            "Dinheiro usado para comprar itens de luxo",
            "Uma quantia de dinheiro guardada para imprevistos",
            "Dinheiro usado para investir na bolsa de valores",
            "Dinheiro guardado para fazer viagens"
        ],
        correctAnswer: 1,
        explanation: "A reserva de emergência serve para cobrir imprevistos como doenças ou perda de emprego."
    },
    {
        question: "Qual é a vantagem de investir em ações?",
        options: [
            "Você garante que seu dinheiro vai crescer rapidamente",
            "Você pode perder todo o seu dinheiro rapidamente",
            "Você tem participação nas empresas",
            "Investir em ações não tem risco"
        ],
        correctAnswer: 2,
        explanation: "Investir em ações pode gerar bons retornos, pois você passa a ser um acionista e participa dos lucros das empresas."
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Função para iniciar o jogo
function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("score-value").textContent = score;
    document.getElementById("next-button").style.display = "none";  // Esconde o botão de próxima pergunta no início
    showQuestion();
}

// Função para mostrar a próxima pergunta
function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Limpa as opções anteriores

    question.options.forEach((option, index) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById("feedback").style.display = "none";
    document.getElementById("next-button").style.display = "none";  // Esconde o botão de próxima pergunta
}

// Função para verificar a resposta
function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const feedbackMessage = document.getElementById("feedback-message");

    if (selectedOption === question.correctAnswer) {
        score += 10;
        feedbackMessage.textContent = `Resposta correta! ${question.explanation}`;
    } else {
        feedbackMessage.textContent = `Resposta errada! ${question.explanation}`;
    }

    document.getElementById("score-value").textContent = score;
    document.getElementById("feedback").style.display = "block";
    document.getElementById("next-button").style.display = "inline-block";
}

// Função para mostrar a próxima pergunta ou finalizar o jogo
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        alert(`Fim do quiz! Sua pontuação final é: ${score}`);
        document.location.reload(); // Recarrega a página para reiniciar o quiz
    } else {
        showQuestion();
    }
}

// Iniciar o quiz ao carregar a página
window.onload = startQuiz;
// Função para voltar à página anterior ou recarregar a página
function goBack() {
    window.history.back(); // Volta para a página anterior
    // Ou use `location.reload()` para recarregar a página atual
}
