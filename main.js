const colorContainer = document.querySelector('.color-container');
const easyMode = document.querySelector('.easy');
const hardMode = document.querySelector('.hard');
let howManyTiles = 6;
let randomColors = [];
let tiles = [];
easyMode.addEventListener('click',()=>{
 howManyTiles = 3;
 colorContainer.innerHTML = "";
 randomColors = [];
 createTile();
})
hardMode.addEventListener('click',()=>{
    howManyTiles = 6;
    colorContainer.innerHTML = "";
    randomColors = [];
    createTile();
})

const randomTile = ()=>{
    const randomID = Math.floor(Math.random()*randomColors.length);
    const randomTile2 = randomColors[randomID];
    console.log(`wylosowana kafelka to ${randomTile2}`);
    tiles = [...document.querySelectorAll(".color-container__box")];
    tiles.forEach(tile => {
        tile.addEventListener('click',()=>{
            if(tile.style.backgroundColor === randomTile2){
                alert("zgadłeś!");
            }else{
                alert("zgadnij ponownie!");
            }
        })
    });
}

const createTile = ()=>{
    for(let i = 0; i < howManyTiles ;i++){
        let randomColor1 = Math.floor(Math.random()*255);
        let randomColor2 = Math.floor(Math.random()*255);
        let randomColor3 = Math.floor(Math.random()*255);
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

