const quizDB = [
    {
        question: "Q1:What is the full form of HTML ?",
        a: "HyperText Markup Language",
        b: "HyperText Makeup Language",
        c: "HyperText Moveup Language",
        d: "HyperText Make Language",
        ans:"ans1",
    },
    {
        question: "Q2:What is the full form of CSS ?",
        a: "Cascading Style Style",
        b: "Cascading Style Sheet",
        c: "Cascading Sheet Style",
        d: "Cascading Style Style",
        ans:"ans2",
    },
    {
        question: "Q3:What is the full form of HTTP ?",
        a: "HyperText Protocol",
        b: "HyperText Program",
        c: "HyperText Transfer Protocol",
        d: "HyperText",
        ans:"ans3",
    },
    {
        question: "Q4:What is the full form of JS ?",
        a: "JavaScrip",
        b: "JavaScript",
        c: "JavaScript Style",
        d: "JavaScript Sheet",
        ans:"ans2",
    },
    {
        question: "Q5:When was JavaScript developed and by whom?",
        a: "Brendan Eich in 1995",
        b: "Dennis M. Ritchie in 1990",
        c: "Guido van Rossum in 1990",
        d: "James Gosling in 1995",
        ans:"ans1",
    },
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const answers=document.querySelectorAll('.answer');
const submit=document.querySelector('#submit');
const showScore=document.querySelector('#showScore');


let questionCount=0;
let score=0;


const loadQuestion=()=>{
    const questionList=quizDB[questionCount];
    question.innerHTML=questionList.question;

    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;

}
loadQuestion();


const getCheckAnswer =() =>{ 
    let answer;
    let score;

   answers.forEach((curAnsElem) => {
     if(curAnsElem.checked){
        answer=curAnsElem.id;
     }
   });
   return answer;
};
// If answer is checked then it will be unchecked in next question 
const deselectAll= () => {
    answers.forEach((curAnsElem) =>  curAnsElem.checked=false );
}


submit.addEventListener('click',() =>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
  


    //checking if answer is same as ans of quizdb if yes then score from 0 it will increase to 1 .
    if(checkedAnswer ===quizDB[questionCount].ans){
        score++;
    };
    questionCount++;  //it will shift to next question 
    
    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`
        <h3>You scored ${score}/${quizDB.length} 🫡</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        
        `;
        showScore.classList.remove('scoreArea');
    }
});