const btn=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');btn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn?.setAttribute('aria-expanded','false');}));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));document.getElementById('year').textContent=new Date().getFullYear();

// WeChat Channel QR modal
const wechatDialog=document.getElementById('wechat-channel');
document.querySelectorAll('[data-wechat="open"]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();wechatDialog?.showModal();}));
wechatDialog?.querySelector('.wechat-close')?.addEventListener('click',()=>wechatDialog.close());
wechatDialog?.addEventListener('click',e=>{if(e.target===wechatDialog)wechatDialog.close();});


// Accessible FAQ accordion — only one item open at a time
document.querySelectorAll('[data-accordion]').forEach(accordion=>{
  const triggers=[...accordion.querySelectorAll('.accordion-trigger')];
  const closeItem=trigger=>{
    const panel=document.getElementById(trigger.getAttribute('aria-controls'));
    trigger.setAttribute('aria-expanded','false');
    trigger.querySelector('.accordion-icon')?.replaceChildren('+');
    if(panel) panel.hidden=true;
  };
  const openItem=trigger=>{
    const panel=document.getElementById(trigger.getAttribute('aria-controls'));
    triggers.forEach(other=>{if(other!==trigger) closeItem(other);});
    trigger.setAttribute('aria-expanded','true');
    trigger.querySelector('.accordion-icon')?.replaceChildren('−');
    if(panel) panel.hidden=false;
  };
  triggers.forEach(trigger=>{
    trigger.addEventListener('click',()=>{
      const isOpen=trigger.getAttribute('aria-expanded')==='true';
      isOpen?closeItem(trigger):openItem(trigger);
    });
    trigger.addEventListener('keydown',event=>{
      const i=triggers.indexOf(trigger);
      if(event.key==='ArrowDown'){event.preventDefault();triggers[(i+1)%triggers.length].focus();}
      if(event.key==='ArrowUp'){event.preventDefault();triggers[(i-1+triggers.length)%triggers.length].focus();}
      if(event.key==='Home'){event.preventDefault();triggers[0].focus();}
      if(event.key==='End'){event.preventDefault();triggers[triggers.length-1].focus();}
    });
  });
});
