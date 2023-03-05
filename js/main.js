'use strict';
// funzioni 

function myCreateElement(htmlElement, className,htmlValeu){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValeu;

    element.addEventListener('click', function(){
        element.classList.add('cell-onclick');
        console.log(htmlValeu)
    });
    return element;
}

function myAppendElement(containerElement, htmlElement){
    containerElement.append(htmlElement)
}
function myRandomBomb(quantity, max){
    const bomb = []
    while(bomb.length < quantity){
      let bombNum = Math.floor(Math.random() * max) + 1
      if(bomb.indexOf(bombNum) === -1) bomb.push(bombNum)
    }
  return(bomb)
} 
// main 
let cellNumber = 100; 
const containerBoard = document.querySelector('.board')
const buttonPlay = document.getElementById('play');
const selectedDifficulty = document.getElementById('difficulty')

buttonPlay.addEventListener('click', function(){ 
    containerBoard.innerHTML=''
    const selectedDifficultyValue = selectedDifficulty.value;
    if(selectedDifficultyValue === 'hard'){
        let cellNumber = 49;
        const bombNumber = myRandomBomb(16,49)
        for(let i = 1; i <= cellNumber ; i++ ){
            const createdElement = myCreateElement('div', 'cell-hard', i);
            myAppendElement(containerBoard, createdElement);  
        } 
        console.log(bombNumber)
    }
    else if (selectedDifficultyValue === 'medium'){
        let cellNumber = 81;
        const bombNumber = myRandomBomb(16,81)
        for(let i = 1; i <= cellNumber ; i++ ){
            const createdElement = myCreateElement('div', 'cell-medium', i);
            myAppendElement(containerBoard, createdElement);  
        } 
        console.log(bombNumber)
    }
    else{
        const bombNumber = myRandomBomb(16,100)
        for(let i = 1; i <= cellNumber ; i++ ){
            const createdElement = myCreateElement('div', 'cell', i);
            myAppendElement(containerBoard, createdElement);  
        } 
        console.log(bombNumber)
    }
})