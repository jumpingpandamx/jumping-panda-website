/* Cookie consent for the English site (Google Consent Mode v2). Runs before Google Tag Manager. */
(function(){
  var KEY='jp_consent',w=window,d=document;
  w.dataLayer=w.dataLayer||[];
  function gtag(){w.dataLayer.push(arguments)}
  var gpc=false;try{gpc=navigator.globalPrivacyControl===true}catch(e){}
  function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
  function put(v){try{localStorage.setItem(KEY,v)}catch(e){}}
  function state(v){var g=v==='granted'?'granted':'denied';return{ad_storage:g,ad_user_data:g,ad_personalization:g,analytics_storage:g}}
  var saved=gpc?'denied':get();
  gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
  gtag('set','ads_data_redaction',true);
  if(saved==='granted'||saved==='denied')gtag('consent','update',state(saved));
  function choose(v){put(v);gtag('consent','update',state(v));w.dataLayer.push({event:'consent_'+v});var b=d.getElementById('jp-cookie');if(b)b.remove()}
  function show(){
    if(d.getElementById('jp-cookie'))return;
    var s=d.getElementById('jp-cookie-css');
    if(!s){s=d.createElement('style');s.id='jp-cookie-css';s.textContent=
      '#jp-cookie{position:fixed;left:16px;right:16px;bottom:16px;max-width:560px;margin:0 auto;background:#141414;color:#FBF6EE;border-radius:16px;padding:18px 20px;z-index:99999;box-shadow:0 10px 40px rgba(0,0,0,.35);font:15px/1.5 "DM Sans",system-ui,sans-serif}'+
      '#jp-cookie p{margin:0 0 14px}#jp-cookie a{color:#FBF6EE;text-decoration:underline}'+
      '#jp-cookie .r{display:flex;gap:10px;flex-wrap:wrap}'+
      '#jp-cookie button{font:inherit;font-weight:700;cursor:pointer;border-radius:10px;padding:10px 18px;border:1.5px solid #FBF6EE;background:transparent;color:#FBF6EE}'+
      '#jp-cookie button.y{background:#FBF6EE;color:#141414}';d.head.appendChild(s)}
    var b=d.createElement('div');b.id='jp-cookie';b.setAttribute('role','dialog');b.setAttribute('aria-label','Cookie preferences');
    b.innerHTML='<p>We use cookies to understand how our site is used and to measure our ads. You can accept or decline. Declining does not affect how the site works. See our <a href="/en/privacy/">Privacy Policy</a>.</p><div class="r"><button class="y" type="button">Accept</button><button type="button">Decline</button></div>';
    var bt=b.querySelectorAll('button');bt[0].onclick=function(){choose('granted')};bt[1].onclick=function(){choose('denied')};
    d.body.appendChild(b);
  }
  function link(){
    var f=d.querySelector('footer a[href="/en/privacy/"]');
    if(!f||d.getElementById('jp-cookie-link'))return;
    var a=d.createElement('a');a.id='jp-cookie-link';a.href='#';a.textContent='Cookie settings';
    a.setAttribute('style',f.getAttribute('style')||'');a.onclick=function(e){e.preventDefault();show()};
    f.parentNode.insertBefore(a,f.nextSibling);
  }
  function init(){if(!saved)show();link();var n=0,t=setInterval(function(){link();if(++n>20)clearInterval(t)},250)}
  if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',init);else init();
})();
