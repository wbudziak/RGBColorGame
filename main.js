const colorContainer = document.querySelector('.color-container');
const easyMode = document.querySelector('.easy');
const hardMode = document.querySelector('.hard');
const rgb = document.querySelector('.rgb');
const header = document.querySelector('header');
let howManyTiles = 6;
let randomColors = [];
let tiles = [];
let timeToAnimation = 50;
const resetData = ()=>{
    timeToAnimation = 50;
    colorContainer.innerHTML = "";
    randomColors = [];
    header.style.backgroundColor = "rgb(198, 195, 195)";
    createTile();
}
easyMode.addEventListener('click', () => {
    howManyTiles = 3;
    resetData();
})
hardMode.addEventListener('click', () => {
    howManyTiles = 6;
    resetData();
})

const checkResult = (randomID,randomTile2)=>{
    tiles = [...document.querySelectorAll(".color-container__box")];
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            if (tile.style.backgroundColor === randomTile2) {
                alert("zgadłeś!");
                header.style.backgroundColor = randomTile2;
                setTimeout(() => {
                    header.style.backgroundColor = "rgb(198, 195, 195)";
                    resetData();
                }, 1000);
            } else {
                alert("zgadnij ponownie!");
            }
        })
    });
}
const randomTile = () => {
    const randomID = Math.floor(Math.random() * randomColors.length);
    const randomTile2 = randomColors[randomID];
    rgb.textContent = randomTile2;
    checkResult(randomID,randomTile2);
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
        tile.className = "color-container__box";
        colorContainer.appendChild(tile);

        randomColors.push(color);
    }
    randomTile();
}
createTile();