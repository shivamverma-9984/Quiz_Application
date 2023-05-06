const quizData = [{
    question: "HTML stands for -",

    a:"HighText Machine Language",
    b:"HyperText and links Markup Language",
    c:" HyperText Markup Language",
    d:"None of these",
    correct:"c"
},{
    question:"Which of the following tag is used to insert a line-break in HTML?",

a:"<br>",
b:"<a>",
c:"<pre>",
d:"<b></b>",
correct:"a"

} ,{
    question: "The correct sequence of HTML tags for starting a webpage is -",

    a:"Head, Title, HTML, body",
    b:"HTML, Body, Title, Head",
    c:"HTML, Head, Title, Body",
    d:"None of above",
    correct: "c",
},{
    question:"<input> is -",
    a:"a format tag.",
    b:"an empty tag.",
    c:"All of the above",
    d:"None of the above",
    correct:"b"

},
{
    question: "Which of the following element is responsible for making the text bold in HTML?",
   a: "<pre>",
   b:"<a>",
   c:"<b>",
   d:"<br></br>",
    correct: "c",
},{
    
    question:"CSS stands for -",
    a:"Cascade style sheets",
    b:"Color and style sheets",
    c:"Cascading style sheets",
    d:"None of the above",
    correct:"c",

},{
    question:"The property in CSS used to change the background color of an element is -",
    a:"bgcolor", 
    b:"color",
    c:"background-color",
    d:"All of the above",
    correct:"c"

},{

    question: "The property in CSS used to change the text color of an element is -",
    a:" bgcolor",
    b:"color",
    c:"background-color",
    d:" All of the above",
    correct:"b"
  
    
   
},{

    question:"The CSS property used to control the element's font-size is -",
     a:"text-style",
    b:"text-size",
    c:"font-size",
    d:"None of the above",
    correct:"c"
},{
    question:"The HTML attribute used to define the inline styles is -",

    a:"style",
    b:"bstyles",
    c:"class",
    d:"None of the above",
    correet:"a"


},
{
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },

{question:"Which type of JavaScript language is ___",
 
   a:"Object-Oriented",
    b:"Object-Based",
    c:"Assembly-language",
    d:"High-level",
    correct:"b"
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
}, {
     
    question:"Which one of the following also known as Conditional Expression:",
    a:"Alternative to if-else",
    b:"Switch statement",
    c:"If-then-else statement",
    d:"immediate if",
    correct:"d"

},{question:"In JavaScript, what is a block of statement?",

    a:"Conditional block",
    b:"block that combines a number of statements into a single compound statement",
    c:"both conditional block and a single statement",
    d:"block that contains a single statement",
    correct:"b"

},];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
                <button onclick="history.go(0)">Play Again</button> `
                // location.reload() won't work in CodePen for security reasons; } } });
        }
    }
});
// end