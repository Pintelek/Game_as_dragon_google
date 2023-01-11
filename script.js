const rider = document.querySelector('.pers');
const block = document.querySelector('.block');
let result = 0;
document.querySelector('html').addEventListener('click',jump);
document.querySelector('html').addEventListener('keypress', (event)=>{
  
  if(event.key == ' '){
    jump()
  }
});

function jump(){
  // if(blockLeft > 1100 && blockLeft < 1450)
  console.log(parseInt(window.getComputedStyle(block).getPropertyValue('right')))
  console.log(parseInt(window.getComputedStyle(rider).getPropertyValue('top')))
  if(!rider.classList.contains('jump')){
    rider.classList.add('jump');
  }
setTimeout(()=>{
    rider.classList.remove('jump');
  }, 1500)
  
  console.log(rider.classList != 'pers jump')


}

setInterval(end,500);


function end(){
  console.log('tototoo')
  let riderTop = parseInt(window.getComputedStyle(rider).getPropertyValue('top'));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('right'));

  if(!(blockLeft > 1250 && blockLeft < 1450 && riderTop > 280) && blockLeft > 1250 && blockLeft < 1450){
    result++;
  }
  else if(blockLeft > 1250 && blockLeft < 1450 && riderTop > 280){
    alert(`GAMEOVER, ваш счет ${result}`)
    result = 0;
  }
}

console.log(parseInt(window.getComputedStyle(block).getPropertyValue('right')))
function gameOver(){

}