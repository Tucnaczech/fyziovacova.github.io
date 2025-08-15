// Navigation toggling
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-menu');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('active');
      burger.setAttribute('aria-expanded', burger.classList.contains('active'));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Cookie Handling
  const cookieBox = document.getElementById('cookie-box');
  const cookieFab = document.getElementById('cookie-fab');

  function showCookieBox() {
    cookieBox.style.display = 'block';
    cookieFab.style.display = 'none';
  }

  function hideCookieBox() {
    cookieBox.style.display = 'none';
    cookieFab.style.display = 'block';
  }

  function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieBox();
  }

  function rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    hideCookieBox();
  }

  // Expose functions globally for inline handlers
  window.openPrivacyModal = function() {
    document.getElementById('privacy-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };
  window.closePrivacyModal = function() {
    document.getElementById('privacy-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
  };
  window.openCookieSettings = function() {
    alert('Zde by bylo nastavení cookies (zatím placeholder).');
  };
  window.hideCookieBox = hideCookieBox;
  window.acceptCookies = acceptCookies;
  window.rejectCookies = rejectCookies;
  window.toggleCookieBox = function() {
    if (cookieBox.style.display === 'block') {
      hideCookieBox();
    } else {
      showCookieBox();
    }
  };

  // Initialize cookie box or fab based on consent
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) {
    showCookieBox();
  } else if (consent === 'rejected') {
    cookieBox.style.display = 'none';
    cookieFab.style.display = 'block';
  } else {
    cookieBox.style.display = 'none';
    cookieFab.style.display = 'none';
  }

  cookieFab.addEventListener('click', () => {
    showCookieBox();
  });

  // Contact form submit behavior
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Děkujeme za zprávu, ozveme se vám co nejdříve!');
    contactForm.reset();
  });
});
