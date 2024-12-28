const analogWatch = function(){
    let time = new Date();
    let secondAnalog = time.getSeconds() / 60 * 360;
    let minuteAnalog = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 * 6;
    let hourAnalog = time.getHours() / 12 * 360 + time.getMinutes() / 60 * 30;

    let animation = [
        "@keyframes secondHand{from{transform:rotate("+secondAnalog+"deg);}to{transform:rotate("+(secondAnalog+360)+"deg);}}",
        "@keyframes minuteHand{from{transform:rotate("+minuteAnalog+"deg);}to{transform:rotate("+(minuteAnalog+360)+"deg);}}",
        "@keyframes hourHand{from{transform:rotate("+hourAnalog+"deg);}to{transform:rotate("+(hourAnalog+360)+"deg);}}"
    ].join("");

    document.querySelector("#clock-animate").innerHTML = animation;
};

const digitalWatch = function(){
    let time = new Date();

    let secondDigital = time.getSeconds();
    let minuteDigital = time.getMinutes();
    let hourDigital = time.getHours();

    const timeString = `${hourDigital}:${minuteDigital}:${secondDigital}`

    let digital = document.querySelector(".digital");
    digital.textContent = timeString;

    requestAnimationFrame(digitalWatch);
};

analogWatch();
digitalWatch();