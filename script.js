const mainEl = document.querySelector('main');

document.querySelector('.theme-icon').addEventListener('click',()=>{
  const mainElClass = mainEl.classList[0];
  if( mainElClass){
     mainEl.classList.remove(mainElClass);
     mainElClass === 'dark' ?  mainEl.classList.add('light') :  mainEl.classList.add('dark');  
  }else{
    mainEl.classList.add('dark');   
  }
});