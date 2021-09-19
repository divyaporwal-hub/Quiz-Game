const quiz=[
    {
        question:"Q-1: Apparently if a person stood up and yelled for eight years and seven months and six days, this would generate enough energy to make what",
        a: "One cup of coffee ",
        b:"An idiot of him or herself",
        c:"A chocolate cake",
        d:"An atomic bomb",
        ans:"ans1"
    },

    {
        question:"Q-2: Walt Disney was said to be afraid of which creature?",
        a:"Mice",
        b:"snake",
        c:"Tiger",
        d:"Dogs",
        ans:"ans1"

    },

    {
       question:"Q-3: In space, which sad thing can astronauts not perform properly?",
       a:"Sneeze",
       b:"Hiccup",
       c:"Cry",
       d:"Cough",
       ans:"ans3"
    },

    {
        question:"Q-4: Falls on which side when it is intoxicated ?",
        a:"Right",
        b:"Back",
        c:"Front",
        d:"Left",
        ans:"ans4"

    },

    {
        question:"Q-5: Intelligent people have more zinc and copper in which part of their bodies than those people of average intelligence?",
        a:"Their noses",
        b:"Their hair",
        c:"Their teeth",
        d:"Their big toes",
        ans:"ans2"
    }
];

const question =document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers= document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');
let questionCount = 0;
let score=0;

const loadquestion = () => {

    const questionlist =quiz[questionCount];

    question.innerText = questionlist.question;
    
    option1.innerText = questionlist.a;
    
    option2.innerText = questionlist.b;
    
    option3.innerText = questionlist.c;
    
    option4.innerText = questionlist.d;
};

loadquestion();

const getcheckanswer = () =>{
    let answer;

    answers.forEach((curanselem) => {
        if(curanselem.checked){
        answer= curanselem.id;
        }
        
    });
    return answer;
};

const deeslectall = () => {
    answers.forEach((curanselem) =>curanselem.checked = false);
}

submit.addEventListener('click' , () =>{
    const checkanswer = getcheckanswer();
    console.log(checkanswer);

    if(checkanswer== quiz[questionCount].ans){
        score++;
    }
    questionCount++;
    deeslectall();

    if(questionCount < quiz.length){
        loadquestion();
    }
    else
    {
        showscore.innerHTML = `
        <h3> You scored ${score}/${quiz.length}✌</h3>
        <button class="btn" onclick = "location.reload()">Play Again</button>
        `;
        showscore.classList.remove('scorearea');
    }
});