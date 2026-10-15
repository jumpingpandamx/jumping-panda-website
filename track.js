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
