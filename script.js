const questions = [
    {
        question: "What is the capital of Mars?",
        answers: [
            { text: "Olympus Mons", correct: false },
            { text: "Cydonia", correct: false },
            { text: "New York", correct: false },
            { text: "Beijing", correct: false }
        ]
    },
    {
        question: "How many elephants does it take to screw in a light bulb?",
        answers: [
            { text: "One", correct: false },
            { text: "Two", correct: false },
            { text: "None, they’re too big!", correct: false },
            { text: "All of the above", correct: false }
        ]
    }
    // Add more questions here
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const progressElement = document.getElementById('progress');

let currentQuestionIndex = 0;

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });

    updateProgress();
}

function selectAnswer(e) {
    const selectedButton = e.target;
    // Logic for incorrect/correct answer can go here
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        // Logic for finishing the quiz
        questionElement.innerText = "You've completed the Impossible Quiz!";
        answerButtonsElement.innerHTML = '';
        nextButton.style.display = 'none';
    }
}

function updateProgress() {
    progressElement.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

nextButton.addEventListener('click', nextQuestion);

startQuiz();
