document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.mobile-toggle');
  const nav=document.querySelector('.top-nav');
  if(btn&&nav){btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')})}
  document.querySelectorAll('a.disabled').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
});
