const rider = document.querySelector('.pers');
const block = document.querySelector('.block');
const store = document.querySelector('.store-num');
let result = 0;
var riderPosLeft  ;
var riderPosRight  ;
var riderPosBottom ;
var blockPosleft ;
var blockTop ; 

function crahs (){
  
  
   riderPosLeft = parseInt(rider.getBoundingClientRect().left);
   riderPosRight = parseInt(rider.getBoundingClientRect().right);
   riderPosBottom = parseInt(rider.getBoundingClientRect().bottom);
   blockPosleft = parseInt(block.getBoundingClientRect().left);
   blockTop = parseInt(block.getBoundingClientRect().top);



  if(blockPosleft < riderPosRight && blockPosleft > riderPosLeft && (blockTop + 30) < riderPosBottom){
   alert(`GAME OVER        Ваш счет: ${result}`)
   result = 0;
   shownResult()
  }  
  
}

function shownResult (){
  store.innerHTML = `${result}`;
}