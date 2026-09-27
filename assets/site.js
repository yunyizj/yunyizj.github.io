document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.mobile-toggle');
  const nav=document.querySelector('.top-nav');
  if(btn&&nav){
    btn.addEventListener('click',()=>{
      nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false');
    });
  }

  document.querySelectorAll('.nav-dropdown').forEach(dropdown=>{
    const trigger=dropdown.querySelector('.nav-dropdown-trigger');
    if(!trigger) return;

    trigger.addEventListener('click',e=>{
      if(window.innerWidth<=760){
        e.preventDefault();
        const isOpen=dropdown.classList.toggle('open');
        trigger.setAttribute('aria-expanded',isOpen?'true':'false');
      }
    });

    trigger.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){
        e.preventDefault();
        const isOpen=dropdown.classList.toggle('open');
        trigger.setAttribute('aria-expanded',isOpen?'true':'false');
      }
      if(e.key==='Escape'){
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded','false');
        trigger.focus();
      }
    });
  });

  document.querySelectorAll('a.disabled').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
});
