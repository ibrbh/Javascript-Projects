function filterProduct(value){
    let materials = document.querySelectorAll(".material");
    materials.forEach((material)=>{
        if(value.toUpperCase()==material.id.toUpperCase()){
            material.classList.remove("hide");
        }else{
            material.classList.add("hide");
        }
    })
}

const demirIntensity = 7.874;
const aluminyumIntensity = 2.7;

function sacKutle(){
    event.preventDefault();
    const sacW = Number(document.getElementById("sacEn").value);
    const sacL = Number(document.getElementById("sacBoy").value);
    const sact = Number(document.getElementById("sacKalinlik").value);
    const sacM = document.getElementById("sacMalzeme").value;
    const sacResult = document.getElementById("sacResult");

    let sacVolume = sacW*sacL*sact;

    if (sacM == "demir") {
        var sacCalculator = sacVolume * demirIntensity * (10 ** (-6))
    } else if (sacM == "alüminyum") {
        var sacCalculator = sacVolume * aluminyumIntensity * (10 ** (-6))
    }

    sacResult.innerText = `${sacCalculator.toFixed(3)} kg`;
}

function kosebentKutle(){
    event.preventDefault();
    const kosebentL1 = Number(document.getElementById("kosebentYukseklik").value);
    const kosebentL2 = Number(document.getElementById("kosebentGenislik").value);
    const kosebentt = Number(document.getElementById("kosebentKalinlik").value);
    const kosebentUzunluk = Number(document.getElementById("kosebentUzunluk").value);

    const kosebentM = document.getElementById("kosebentMalzeme").value;
    const kosebentResult = document.getElementById("kosebentResult");

    let kosebentArea = kosebentt*(kosebentL1+kosebentL2) - (kosebentt**2)
    let kosebentVolume = kosebentArea*kosebentUzunluk;

    if (kosebentM == "demir") {
        var kosebentCalculator = kosebentVolume * demirIntensity * (10 ** (-6))
    } else if (kosebentM == "alüminyum") {
        var kosebentCalculator = kosebentVolume * aluminyumIntensity * (10 ** (-6))
    }

    kosebentResult.innerText = `${kosebentCalculator.toFixed(3)} kg`;
}

function kutuProfilKutle(){
    event.preventDefault();
    const kutuProfilh = Number(document.getElementById("kutuProfilYukseklik").value);
    const kutuProfilW = Number(document.getElementById("kutuProfilGenislik").value);
    const kutuProfilt = Number(document.getElementById("kutuProfilKalinlik").value);
    const kutuProfilUzunluk = Number(document.getElementById("kutuProfilUzunluk").value);

    const kutuProfilM = document.getElementById("kutuProfilMalzeme").value;
    const kutuProfilResult = document.getElementById("kutuProfilResult");

    let kutuProfilArea = (kutuProfilh*kutuProfilW)-((kutuProfilh-2*kutuProfilt)*(kutuProfilW-2*kutuProfilt))
    let kutuProfilVolume = kutuProfilArea*kutuProfilUzunluk;

    if (kutuProfilM == "demir") {
        var kutuProfilCalculator = kutuProfilVolume * demirIntensity * (10 ** (-6))
    } else if (kutuProfilM == "alüminyum") {
        var kutuProfilCalculator = kutuProfilVolume * aluminyumIntensity * (10 ** (-6))
    }

    kutuProfilResult.innerText = `${kutuProfilCalculator.toFixed(3)} kg`;
}

function boruKutle(){
    event.preventDefault();
    const borud = Number(document.getElementById("boruDisCap").value);
    const borut = Number(document.getElementById("boruKalinlik").value);
    const boruUzunluk = Number(document.getElementById("boruUzunluk").value);

    const boruM = document.getElementById("boruMalzeme").value;
    const boruResult = document.getElementById("boruResult");

    let boruArea = (Math.PI*(borud/2)**2)-(Math.PI*((borud/2)-borut)**2)
    let boruVolume = boruArea*boruUzunluk;

    if (boruM == "demir") {
        var boruCalculator = boruVolume * demirIntensity * (10 ** (-6))
    } else if (boruM == "alüminyum") {
        var boruCalculator = boruVolume * aluminyumIntensity * (10 ** (-6))
    }

    boruResult.innerText = `${boruCalculator.toFixed(3)} kg`;
}

function milKutle(){
    event.preventDefault();
    const mild = Number(document.getElementById("milDisCap").value);
    const milUzunluk = Number(document.getElementById("milUzunluk").value);

    const milM = document.getElementById("milMalzeme").value;
    const milResult = document.getElementById("milResult");

    let milArea = (Math.PI*(mild/2)**2);
    let milVolume = milArea*milUzunluk;

    if (milM == "demir") {
        var milCalculator = milVolume * demirIntensity * (10 ** (-6))
    } else if (milM == "alüminyum") {
        var milCalculator = milVolume * aluminyumIntensity * (10 ** (-6))
    }

    milResult.innerText = `${milCalculator.toFixed(3)} kg`;
}