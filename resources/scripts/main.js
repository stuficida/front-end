const animation = document.querySelector(".animation");

const images = ["section01_bg", "section02_bg", "section03_bg", "section04_bg"];

function BGIndex() {
    return Math.floor(Math.random() * images.length);
}

let background = BGIndex();
animation.style.backgroundImage = `url(/images/${images[background]}.jpg)`;

setInterval(() => {
    let b = background; while(b === background) b = BGIndex();
    animation.style.backgroundImage = `url(/images/${images[background = b]}.jpg)`;
}, 7000);