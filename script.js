const Ddays = document.getElementById('days');
const Hhours = document.getElementById('hours');
const Mminutes = document.getElementById('minutes');
const Sseconds = document.getElementById('seconds');
const newYears = "1 Jan 2022";

function countdown(){
    const currentDate = new Date();
    const newYearsDate = new Date(newYears);
    const TotalSeconds=(newYearsDate-currentDate)/1000;
    const days = Math.floor(TotalSeconds/3600/24);
    const hours = Math.floor(TotalSeconds/3600) % 24;
    const minutes = Math.floor(TotalSeconds/60) % 60;
    const seconds = Math.floor(TotalSeconds) % 60;

    
    Hhours.innerHTML = formatTime(hours);
    Mminutes.innerHTML = formatTime(minutes);
    Sseconds.innerHTML = formatTime(seconds);
    Ddays.innerHTML = days;
}

function formatTime(time){
    return time < 10 ?('0'+time) : time;
}

countdown();
setInterval(countdown,1000);


