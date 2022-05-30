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

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {

    const currentQuizData = quisData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


    currentQuestion++;
}