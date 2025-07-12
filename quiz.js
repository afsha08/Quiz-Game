let questionBox=[{
    id:"qa-1",
    question:"which is stable version of js?",
    options:["ES4","ES6","ES8","NONE OF ABOVE"],
    correctAnswer:"ES6",
},{
    id:"qa-2",
    question:"White light is combination of how many colors",
    options:[7,8,10,12],
    correctAnswer:7,
},{
    id:"qa-3",
    question:"DOM Stands for ",
    options:["Document Operator Mode","Document Object Model","Document Overload Model","Document Object Mode"],
    correctAnswer:"Document Object Model",
},{
    id: "qa-4",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars"
},
{
    id: "qa-5",
    question: "Who wrote the Indian National Anthem?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subhash Chandra Bose", "Sarojini Naidu"],
    correctAnswer: "Rabindranath Tagore"
},
{
    id: "qa-6",
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra"
},
{
    id: "qa-7",
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide"
},
{
    id: "qa-8",
    question: "Who is known as the 'Missile Man of India'?",
    options: ["Dr. Homi Bhabha", "Dr. Vikram Sarabhai", "Dr. A.P.J. Abdul Kalam", "Dr. C.V. Raman"],
    correctAnswer: "Dr. A.P.J. Abdul Kalam"
},
{
    id: "qa-9",
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Yangtze", "Ganges", "Nile"],
    correctAnswer: "Nile"
},
{
    id: "qa-10",
    question: "Who invented the light bulb?",
    options: ["Alexander Graham Bell", "Nikola Tesla", "Isaac Newton", "Thomas Edison"],
    correctAnswer: "Thomas Edison"
},
{
    id: "qa-11",
    question: "What is the national sport of India?",
    options: ["Hockey", "Cricket", "Kabaddi", "Football"],
    correctAnswer: "Hockey"
},
{
    id: "qa-12",
    question: "Which country is known as the Land of Rising Sun?",
    options: ["India", "China", "New Zealand", "Japan"],
    correctAnswer: "Japan"
},
{
    id: "qa-13",
    question: "Which is the smallest continent by land area?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    correctAnswer: "Australia"
}

]

let questionElement=document.getElementById("question")
let optionElement=document.getElementById("option")
let scoreElement=document.getElementById("score");
let score=0;
let currentQuestion=0;

function ShowQuestion(){
    //!de-structuring
    let {question,options,correctAnswer}=questionBox[currentQuestion]
    questionElement.textContent=question;
    console.log(options)
    //!for options
    options.map((opt)=>{
        
        let btn=document.createElement("button");
        btn.setAttribute("id","btn")
        btn.textContent=opt;
        optionElement.appendChild(btn);
        scoreElement.textContent=`Score:${score}/${questionBox.length}`;
        btn.addEventListener("click",()=>{
            if (opt==correctAnswer){
                btn.style.backgroundColor="green";
                score+=1;
            
            }else{
                btn.style.backgroundColor="red";
                score -=0.25;
            }
            console.log(score)
            setTimeout(() => {
                nextQuestion()
            }, 1000);
            
        })
        
    });
}
ShowQuestion()

function nextQuestion(){
    currentQuestion++;
    optionElement.textContent=""
    if(currentQuestion==questionBox.length){
        questionElement.textContent="Quiz Completed";
        scoreElement.textContent=`Score:${score}/${questionBox.length}`;
    }else{
        ShowQuestion();
    }
}








