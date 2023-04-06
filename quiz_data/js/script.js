const quizData = [
    {
        question: "Who is the prime minister of India?",
        a: "Narendra Modi",
        b: "Yogi Adityanath",
        c: "Rajnath singh",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "Who is the president of India?",
        a: "Ramnath Cobind",
        b: "Dropadi Murmun",
        c: "Manmohan singh",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "Which one is the most popular language?",
        a: "C++",
        b: "C",
        c: "Java",
        d: "JavaScript",
        correct: "d"
    }
]

const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer")
const questionE1 = document.getElementById("question")


const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // console.log(currentQuizData);
}
function getselected() {
    let answer = undefined;
    answerE1s.forEach((answerE1) => {
        if(answerE1.checked) {
            answer = answerE1.id;
        }
    });
   return answer;
}

function deselectAnswer() {
    answerE1s.forEach((answerE1) => {
        answerE1.checked = false;
    })
}

submitBtn.addEventListener("click", () => {
    const answer =  getselected();
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>Your Answer correctly at ${score}/${quizData.length}Questions</h2>
            <button onclick="location.reload()" class="sbtbutton">Reload</button>
            `;
        }
    }
})
