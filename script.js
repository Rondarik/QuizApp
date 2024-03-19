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

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        showEndOfGame();
    } else {
    let question = questions[currentQuestion];
    document.getElementById('current-question').innerHTML = currentQuestion+1;
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar-id').innerHTML = percent+'%';
    document.getElementById('progress-bar-id').style.width = percent+'%';
}

function answer(selection) {
    let answer = questions[currentQuestion]['right_answer'];
    let idOfRightAnswer = `answer_${answer}`;
    if (answer == selection.slice(-1)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnswers++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
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
    document.getElementById('card-body-id').innerHTML = /*html*/`
        <div>Du hast <b>${rightAnswers}</b> von <b>${questions.length}</b> Fragen richtig!</div>
    `;
}