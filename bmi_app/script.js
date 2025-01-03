const handleClick = function(){
    event.preventDefault();
    const mass = Number(document.getElementById("mass").value);
    const height = Number(document.getElementById("height").value);
    const bmi = (mass/(height**2)).toFixed(2);
    const results = document.getElementById("results");
    let bmiText;

    if(bmi<=18){
        bmiText = "Zayıf";
    }else if((18.5<bmi)&&(bmi<=25)){
        bmiText = "Normal";
    }else if((25<bmi)&&(bmi<=30)){
        bmiText = "Kilolu";
    }else if((30<bmi)&&(bmi<=35)){
        bmiText = "Şişman";
    }else if((35<bmi)&&(bmi<=40)){
        bmiText = "Aşırı Şişman";
    }else if(40<bmi){
        bmiText = "Aşırı Aşırı Şişman";
    }

    results.innerText = `Vücut Kitle İndeksiniz : ${bmi} , Durumunuz : ${bmiText}`
}

const resetClick = function(){
    mass.innerHTML = "";
    height.innerHTML = "";
    results.innerHTML = "";
}