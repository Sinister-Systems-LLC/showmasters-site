/* Author: RKOJ-ELENO :: 2026-05-25
 * Form handlers extracted from careers.html + order.html so the CSP
 * can drop script-src 'unsafe-inline'. Each handler is guarded by an
 * id-check so loading on every page is a harmless no-op.
 */

/* careers.html — apply form */
(function () {
  var f = document.getElementById('applyForm');
  var s = document.getElementById('applySuccess');
  if (!f) return;
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = f.querySelector('.cs-submit');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
    setTimeout(function () {
      f.style.display = 'none';
      if (s) {
        s.style.display = 'block';
        window.scrollTo({ top: s.offsetTop - 100, behavior: 'smooth' });
      }
    }, 800);
  });
})();

/* order.html — call-sheet date stamp */
(function () {
  var el = document.getElementById('csDate');
  if (!el) return;
  var d = new Date();
  el.textContent = d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).toUpperCase();
})();

/* order.html — demo submit (mirrors estimate form until /api/inquiry ships) */
(function () {
  var f = document.getElementById('orderForm');
  var s = document.getElementById('orderSuccess');
  if (!f) return;
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = f.querySelector('.cs-submit');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
    setTimeout(function () {
      f.style.display = 'none';
      if (s) s.style.display = 'block';
    }, 800);
  });
})();
