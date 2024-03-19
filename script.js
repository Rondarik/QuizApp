let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wann wurde CSS erfunden?",
        "answer_1": "1990",
        "answer_2": "1995",
        "answer_3": "2000",
        "answer_4": "2005",
        "right_answer": 2
    },
    {
        "question": "Wann wurde CSS erfunden?",
        "answer_1": "1990",
        "answer_2": "1995",
        "answer_3": "2000",
        "answer_4": "2005",
        "right_answer": 2
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
];

let currentQuestion = 0;
let rightAnswers = 0;
let AUDIO_SUCCESS = new Audio('./sounds/success.mp3');
let AUDIO_FAIL = new Audio('./sounds/fail.mp3');

function init() {
    showQuestion();
    document.getElementById('all-questions').innerHTML = questions.length;
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        showEndOfGame();
    } else {
        updateToNextQuestion();
    }
    updateProgressBar();
}

function answer(selection) {
    let answer = questions[currentQuestion]['right_answer'];
    let idOfRightAnswer = `answer_${answer}`;
    if (answer == selection.slice(-1)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnswers++;
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
    disabledAnswerButtons();
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
    enableAnswerButtons();
}

function updateProgressBar() {
    let percent = currentQuestion/ questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar-id').innerHTML = percent + '%';
    document.getElementById('progress-bar-id').style.width = percent + '%';
}

function disabledAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.add('no-click-event');
    document.getElementById('answer_2').parentNode.classList.add('no-click-event');
    document.getElementById('answer_3').parentNode.classList.add('no-click-event');
    document.getElementById('answer_4').parentNode.classList.add('no-click-event');
}

function enableAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('no-click-event');
    document.getElementById('answer_2').parentNode.classList.remove('no-click-event');
    document.getElementById('answer_3').parentNode.classList.remove('no-click-event');
    document.getElementById('answer_4').parentNode.classList.remove('no-click-event');
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function showEndOfGame() {
    document.getElementById('question-card-id').classList.add('d-none');
    document.getElementById('card-body-id').classList.remove('d-none');
    document.getElementById('card-body-id').innerHTML = /*html*/`
    <div class="endcart-button">
        <div>Du hast <b>${rightAnswers}</b> von <b>${questions.length}</b> Fragen richtig!</div>
        <button onclick="restartQuiz()" class="btn btn-primary" id="restart-button">Qiuz wiederholen</button>
    </div>
    `;
}

function restartQuiz() {
    rightAnswers = 0;
    currentQuestion = 0;
    document.getElementById('question-card-id').classList.remove('d-none');
    document.getElementById('card-body-id').classList.add('d-none');
    init();
}