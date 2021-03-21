const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}`: minutes}:${
            seconds < 10 ? `0${seconds}` : seconds}`;
}

function getDelay(){
    const date = new Date();
    const milliseconds = date.getMilliseconds();

    return (milliseconds === 0) ? 0: 1000 - milliseconds;
}

function init(){
    getTime();
    const delay = getDelay();

    window.setTimeout(function(){
        getTime();
        setInterval(getTime, 1000);
    }, delay);

}

init();