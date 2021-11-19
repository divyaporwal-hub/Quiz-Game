const quiz=[
    {
        question:"Q-1:With what data structure can a priority queue be implemented?",
        a:"Array",
        b:"List",
        c:"Heap",
        d:"Tree",
        ans:"ans4"
    },

    {
        question:"Q-2: Which one of the below mentioned is linear data structure ?",

        a:"Queue",
        
        b:"Stack",
        
        c:"Arrays",
        
        d:"All of the above",

        ans:"ans4"

    },

    {
       question:"Q 3 - Program with highest run-time complexity is-",

       a:" Tower of Hanoi",

       b: "Fibonacci Series",

       c:"Prime Number Series",

       d:"None of the above",

       ans:"ans1"

    },

    {
        question:"Q-4: What data structure is used when converting an infix notation to prefix notation?",
        a:"Stack",
        b:"Queue",
        c:"B-Trees",
        d:"Linked-list",
        ans:"ans1"

    },

    {
        question:"Q-5: 4. Which data structure can be used to test a palindrome?",
        a:"Tree",
        b:"Heap",
        c:"Stack",
        d:"Priority queue",
        ans:"ans3"
    },
    {
        question:"Q-6: What would be the asymptotic time complexity to find an element in the linked list?",
        a:"O(1)",
        b:"O(n)",
        c:"O(n2)",
        d:"O(n4)",
        ans:"ans2"
    },
    {
        question:"Q-7:  Which of the following is not the type of queue?",
        a:"Ordinary queue",
        b:"Single ended queue",
        c:"Circular queue",
        d:"Priority queue",
        ans:"ans2"
    },
    {
        question:"Q-8: The data structure required for Breadth First Traversal on a graph is?",
        a:"Stack",
        b:"Array",
        c:"Queue",
        d:"Tree",
        ans:"ans3"
    },
    {
        question:"Q-9: What is the value of the postfix expression 6 3 2 4 + – *?",
        a:"1",
        b:"40",
        c:"74",
        d:"-18",
        ans:"ans4"
    },
    {
        question:"Q-10: What are the disadvantages of arrays?",
        a:"Data structure like queue or stack cannot be implemented",
        b:"There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
        c:"Index value of an array can be negative",
        d:"Elements are sequentially accessed",
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