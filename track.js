/* Eventos de conversion para Google Tag Manager (dataLayer). */
(function(){
  window.dataLayer=window.dataLayer||[];
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href]');
    if(!a)return;
    var h=a.getAttribute('href')||'',ev=null;
    if(h.indexOf('wa.me')>-1||h.indexOf('api.whatsapp.com')>-1)ev='whatsapp_click';
    else if(h.indexOf('tel:')===0)ev='phone_click';
    else if(h.indexOf('mailto:')===0)ev='email_click';
    if(!ev)return;
    window.dataLayer.push({event:ev,link_url:h,page_path:location.pathname});
    try{if(ev==='whatsapp_click'&&window.fbq)window.fbq('track','Contact')}catch(x){}
  },true);
})();

/* Imagenes de listas generadas por la plantilla: se asigna el src cuando el valor ya esta resuelto
   (evita que el navegador pida direcciones con llaves antes de tiempo). */
(function(){
  function fix(){
    var l=document.querySelectorAll('img[data-src]');
    for(var i=0;i<l.length;i++){
      var s=l[i].getAttribute('data-src');
      if(s&&s.indexOf('{{')<0){l[i].src=s;l[i].removeAttribute('data-src');}
    }
  }
  var t=0;
  function schedule(){if(t)return;t=setTimeout(function(){t=0;fix()},30)}
  fix();
  if('MutationObserver' in window){
    new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['data-src']});
  }else{setInterval(fix,300)}
})();
