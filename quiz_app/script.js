const questionDiv = document.querySelector(".questionDiv");
const level = document.getElementById("level");
const question = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next");
const resultDiv = document.getElementById("results");
const resetButton = document.getElementById("reset");

let currentQuestionIndex = 0;
let score = 0;
let total = 0;

function loadQuestion(){
    const currentQuestion = questions[currentQuestionIndex];
    level.innerText = (currentQuestion.level).toUpperCase();
    if(currentQuestion.level=="easy"){
        question.innerText = `${currentQuestion.question} (1 puan)`;
        level.style.backgroundColor = "#0066ff";
    }else if(currentQuestion.level=="medium"){
        question.innerText = `${currentQuestion.question} (2 puan)`;
        level.style.backgroundColor = "#cca300";
        level.style.color = "black";
    }else if(currentQuestion.level=="hard"){
        question.innerText = `${currentQuestion.question} (3 puan)`;
        level.style.backgroundColor = "#b30000";
        level.style.color = "white";
    }else if(currentQuestion.level=="impossible"){
        question.innerText = `${currentQuestion.question} (4 puan)`;
        level.style.backgroundColor = "#4d0000";
    }

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option,index)=>{
        optionsContainer.innerHTML += `
        <div>
            <input type="radio" name="option" id="option${index}" value="${index}">
            <label for="option${index}">${option}</label>
        </div>
        `
    });

    resultDiv.classList.add("hide");
    resetButton.classList.add("hide");
}

function checkAnswer(){
    const selectedOption = document.querySelector("input[name='option']:checked");
    if(!selectedOption){
        alert("Lütfen bir seçenek işaretleyin!");
        return false;
    }

    const selectedAnswerIndex = parseInt(selectedOption.value);
    const currentQuestion = questions[currentQuestionIndex];

    if(selectedAnswerIndex === currentQuestion.trueAnswer){
        if(currentQuestion.level==="easy"){
            score+=1;
            total+=1;
        }else if(currentQuestion.level==="medium"){
            score+=2;
            total+=2;
        }
        else if(currentQuestion.level==="hard"){
            score+=3;
            total+=3;
        }
        else if(currentQuestion.level==="impossible"){
            score+=4;
            total+=4;
        }
    }else{
        if(currentQuestion.level==="easy"){
            total+=1;
        }else if(currentQuestion.level==="medium"){
            total+=2;
        }
        else if(currentQuestion.level==="hard"){
            total+=3;
        }
        else if(currentQuestion.level==="impossible"){
            total+=4;
        }
    }

    return true;
}

function showResults(){
    resultDiv.classList.remove("hide");
    resetButton.classList.remove("hide");
    resultDiv.innerText = `Quiz Tamamlandı! Puan ${(100*(score/total)).toFixed(2)}`
}

nextButton.addEventListener("click",()=>{
    if(checkAnswer()){
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
            loadQuestion();
        }
        else{
            showResults();
        }
    }
})

resetButton.addEventListener("click",()=>{
    score=0;
    total=0;
    currentQuestionIndex=0;
    loadQuestion();
})

loadQuestion();