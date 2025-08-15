// Navbar burger
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-menu');
  if(burger && nav) {
    burger.addEventListener('click',function(){nav.classList.toggle('active'); burger.classList.toggle('active');});
    document.querySelectorAll('.nav-menu a').forEach(link=>{link.onclick=()=>{nav.classList.remove('active'); burger.classList.remove('active');};});
  }
  // Cookie
  const banner = document.getElementById('cookie-banner');
  if (banner && !localStorage.getItem('cookieConsent')) banner.style.display = 'flex';
  document.getElementById('accept-cookies')?.addEventListener('click',function(){
    localStorage.setItem('cookieConsent','accepted');banner.style.display='none';
  });
  document.getElementById('reject-cookies')?.addEventListener('click',function(){
    localStorage.setItem('cookieConsent','rejected');banner.style.display='none';
  });
  // Modal
  window.openPrivacyModal=function(){document.getElementById('privacy-modal').style.display='flex';};
  window.closePrivacyModal=function(){document.getElementById('privacy-modal').style.display='none';};
  window.openCookieSettings=function(){alert('Zde bude detailní nastavení cookies.');};
  document.querySelector('.modal')?.addEventListener('click',function(e){if(e.target==this)closePrivacyModal();});
  // Form
  document.querySelector('.contact-form')?.addEventListener('submit',function(e){
    e.preventDefault();
    alert('Děkujeme za zprávu, ozveme se vám co nejdříve!');
    this.reset();
  });
});
