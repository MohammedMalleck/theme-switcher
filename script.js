document.querySelector('.theme-icon').addEventListener('click',()=>{
  const mainEl = document.querySelector('main');
  mainEl.className =  mainEl.className === "dark" ?  "light" : "dark";
});