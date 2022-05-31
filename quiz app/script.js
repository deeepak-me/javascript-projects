const quisData = [

    {
        question: 'how old is deepak?',
        a: '10',
        b: '17',
        c: '23',
        d: '222',
        correct: 'c'
    }, {
        question: 'best programming language?',
        a: 'python',
        b: 'javascript',
        c: 'ruby',
        d: 'c++',
        correct: 'b'
    }, {
        question: 'who is the president of US?',
        a: 'florin pop',
        b: 'trump',
        c: 'biden',
        d: 'obama',
        correct: 'c'
    }, {
        question: 'HTML stands for?',
        a: 'Hypertext markup langauge',
        b: 'Hypertext markup league',
        c: 'dfaafasf',
        d: 'afdgfgs',
        correct: 'a'
    }, {
        question: 'js launched in?',
        a: '2019',
        b: '2020',
        c: '1995',
        d: '1996',
        correct: 'c'
    }
]

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quisData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see the answer

    const answer = getSelected();

    console.log(answer);

    if (answer) {

        if (answer === quisData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quisData.length) {

            loadQuiz();

        } else {
            quiz.innerHTML = `<h2>You answered correctly at${score}/${quisData.length} questions.</h2> 
            <button onclick="location.reload()">Reload</button>`;
        }
    }

});