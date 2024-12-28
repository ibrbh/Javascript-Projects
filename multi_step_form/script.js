const steps = document.querySelectorAll(".form-step");
const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("previous-btn");
const submitBtn = document.getElementById("submit-btn");
const messageDiv = document.getElementById("message");

let currentStep = 0;

function showStep(step){
    steps.forEach((stepDiv,index)=>{
        stepDiv.style.display = index === step ? "block":"none";
    })

    previousBtn.style.display = step > 0 ? "inline-block":"none";
    nextBtn.style.display = step < steps.length-1 ? "inline-block":"none";
    submitBtn.style.display = step === steps.length-1 ? "inline-block":"none";
}

nextBtn.addEventListener("click",()=>{
    if(currentStep<steps.length-1){
        currentStep++;
        showStep(currentStep);
    }
});

previousBtn.addEventListener("click",()=>{
    if(currentStep>0){
        currentStep--;
        showStep(currentStep);
    }
});

submitBtn.addEventListener("click",function(event){
    event.preventDefault();
    const username = document.getElementById("username").value.trim();

    messageDiv.textContent = `Thank you, ${username}! Your sign-up is successful.`
    messageDiv.style.color="green";
})

showStep(currentStep);