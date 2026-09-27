document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.mobile-toggle');
  const nav=document.querySelector('.top-nav');
  if(btn&&nav){
    btn.addEventListener('click',()=>{
      nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false');
    });
  }

  document.querySelectorAll('[data-tab-group]').forEach(group=>{
    const directChildren=Array.from(group.children);
    const navEl=directChildren.find(el=>el.classList.contains('tab-nav'));
    const panelsEl=directChildren.find(el=>el.classList.contains('tab-panels'));
    if(!navEl||!panelsEl) return;

    const buttons=Array.from(navEl.querySelectorAll('[data-tab-target]'));
    const panels=Array.from(panelsEl.children).filter(el=>el.hasAttribute('data-tab-panel'));

    buttons.forEach(button=>{
      button.addEventListener('click',()=>{
        const target=button.getAttribute('data-tab-target');
        buttons.forEach(b=>b.classList.toggle('active',b===button));
        panels.forEach(panel=>panel.classList.toggle('active',panel.getAttribute('data-tab-panel')===target));
      });
    });
  });
});
