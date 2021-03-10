const colorContainer = document.querySelector('.container__middle');
const easyMode = document.querySelector('.button--easy');
const hardMode = document.querySelector('.button--hard');
const reset = document.querySelector('.button--reset');
const buttons = document.querySelectorAll('.button');
const rgb = document.querySelector('.container__rgb');
const msgSpan = document.querySelector('.container__msg-text');

let howManyTiles = 3;
let randomColors = [];
let tiles = [];
let timeToAnimation = 50;

const resetData = () => {
    timeToAnimation = 50;
    easyMode.style.backgroundColor = "rgb(121, 205, 79)";
    hardMode.style.backgroundColor = "rgb(241, 65, 51)";
    reset.style.backgroundColor = "rgb(14, 105, 242)";
    colorContainer.innerHTML = "";
    msgSpan.textContent = "";
    randomColors = [];
    createTile();
}

easyMode.addEventListener('click', () => {
    easyMode.style.opacity = "1";
    hardMode.style.opacity = "0.3";
    colorContainer.style.gridTemplateRows = "repeat(1, 1fr)";
    howManyTiles = 3;
    resetData();
})

hardMode.addEventListener('click', () => {
    hardMode.style.opacity = "1";
    easyMode.style.opacity = "0.3";
    colorContainer.style.gridTemplateRows = "repeat(2, 1fr)";
    howManyTiles = 6;
    resetData();
})

reset.addEventListener('click', resetData);

const checkResult = (randomID, secretColor) => {
    tiles = [...document.querySelectorAll(".container__color-tile")];
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            if (tile.style.backgroundColor === secretColor) {
                msgSpan.textContent = "Good job!";
                tiles.forEach(tile => {
                    tile.style.backgroundColor = secretColor;
                    tile.style.opacity = "1";
                });
                buttons.forEach(button => {
                    button.style.backgroundColor = secretColor;
                });
            } else {
                msgSpan.textContent = "Try again!";
                tile.style.opacity = "0";
                tile.style.cursor = "unset";
            }
        })
    });
}

const randomTile = () => {
    const randomID = Math.floor(Math.random() * randomColors.length);
    const secretColor = randomColors[randomID];
    rgb.textContent = secretColor;
    checkResult(randomID, secretColor);
}

const createTile = () => {
    for (let i = 0; i < howManyTiles; i++) {
        timeToAnimation += 50;
        setTimeout(() => {
            tile.style.opacity = "1";
        }, timeToAnimation);

        let randomColor1 = Math.floor(Math.random() * 255);
        let randomColor2 = Math.floor(Math.random() * 255);
        let randomColor3 = Math.floor(Math.random() * 255);
        let color = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;

        const tile = document.createElement('div');
        tile.style.backgroundColor = color;
        tile.className = "container__color-tile";
        colorContainer.appendChild(tile);

        randomColors.push(color);
    }
    randomTile();
}
createTile();