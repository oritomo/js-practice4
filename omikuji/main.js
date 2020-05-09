'use strict';

{
  const btn =document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const lucky=['大吉','中吉','小吉','凶']
    const num=Math.floor(Math.random()* lucky.length)
    
    btn.textContent=lucky[num];
  });


  // btn.addEventListener('click',()=>{
  //   const n=Math.floor(Math.random()*4)
  //   switch(n){
  //     case 0:
  //      btn.textContent='大吉';
  //      break;
  //     case 1:
  //      btn.textContent='中吉';
  //      break;
  //     case 2:
  //      btn.textContent='小吉';
  //      break;
  //     case 3:
  //      btn.textContent='凶';
  //      break;
  //   }
  // });
}