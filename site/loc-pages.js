/* Ascend Building Renovations — shared interactions for location & service pages */
(function () {
  /* FAQ accordion */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.parentElement;
      var answer = item.querySelector('.faq-answer');
      var isOpen = item.classList.contains('active');
      document.querySelectorAll('.faq-item.active').forEach(function (open) {
        open.classList.remove('active');
        open.querySelector('.faq-answer').style.maxHeight = null;
        open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* Mobile nav toggle */
  var t = document.querySelector('.nav-toggle');
  var m = document.getElementById('primary-nav');
  if (t && m) {
    t.addEventListener('click', function () {
      var open = m.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    m.addEventListener('click', function (e) {
      // dropdowns render inline/expanded on mobile, so every link is a real destination
      if (e.target.closest('a')) {
        m.classList.remove('open');
        t.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Netlify form AJAX submission with honeypot + math spam check */
  var form = document.querySelector('form[data-netlify]');
  if (!form) return;
  var success = document.querySelector('.form-success');
  var btn = form.querySelector('button[type="submit"]');
  var hp = form.querySelector('[name="website"]');
  var math = form.querySelector('[name="math_answer"]');
  function showSuccess() {
    form.style.display = 'none';
    if (success) {
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  if (math) {
    math.addEventListener('input', function () { math.setCustomValidity(''); });
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (hp && hp.value.trim() !== '') { showSuccess(); return; }
    if (math && parseInt(math.value, 10) !== 7) {
      math.setCustomValidity('Please answer the spam-check question (4 + 3).');
      math.reportValidity();
      return;
    }
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(function (res) { if (res.ok) { showSuccess(); } else { throw new Error('bad'); } })
      .catch(function () {
        if (btn) { btn.disabled = false; btn.innerHTML = 'Send My Enquiry →'; }
        alert('Sorry, something went wrong sending your enquiry. Please call 07417 424115.');
      });
  });
})();
