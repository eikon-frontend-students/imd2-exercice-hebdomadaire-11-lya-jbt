document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.like-button');
  if (!btn) return;

  if (!btn.hasAttribute('role')) btn.setAttribute('role', 'button');
  if (!btn.hasAttribute('tabindex')) btn.setAttribute('tabindex', '0');

  const toggle = () => {
    btn.classList.toggle('liked');
    btn.setAttribute('aria-pressed', btn.classList.contains('liked'));
  };

  btn.addEventListener('click', toggle);
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});