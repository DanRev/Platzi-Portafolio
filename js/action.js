  // var ipad = window.matchMedia('screen and (max-width: 767px)');
  // var menu = document.getElementsByClassName("icon-menu");
  // const hide = () => document.querySelector('.menu').classList.toggle('is-active');
  // ipad.addListener(function(event){
  //   event.matches? menu[0].addEventListener('click',hide):menu[0].removeEventListener('click',hide);
  // });

  const ipad = window.matchMedia('screen and (max-width: 767px)');
  const menu = document.querySelector('.menu');
  
  const burgerBtn = document.querySelector('#burger-menu');

  ipad.addListener(validation);

  function validation(event){
    if(event.matches){
      burgerBtn.addEventListener('click',hideShow);
    }else{
      burgerBtn.removeEventListener('click',hideShow);
    }
  }

  validation(ipad);

  function hideShow(){
    if(menu.classList.contains('is-active')){
      menu.classList.remove('is-active');
    }else{
      menu.classList.add('is-active');
    }
  }