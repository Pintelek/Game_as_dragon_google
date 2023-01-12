
document.querySelector('html').addEventListener('click',jump);
document.querySelector('html').addEventListener('keypress', (event)=>{
  
  if(event.key == ' '){
    jump()
  }
});

function jump(){
  
  if(!rider.classList.contains('jump')){
    rider.classList.add('jump');
  }
setTimeout(()=>{
    rider.classList.remove('jump');
  }, 1500)
  
  setTimeout (()=>{ 
    if(blockPosleft < riderPosRight && blockPosleft > riderPosLeft && blockTop > riderPosBottom ){
      console.log('daaaaa')
      result++;
      shownResult();
      console.log(result)
    }
  },500)
}

setInterval(crahs,100);



