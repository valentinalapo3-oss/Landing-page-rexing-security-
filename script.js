const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  primaryNav.classList.toggle('is-open', !isOpen);
});

primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    primaryNav.classList.remove('is-open');
  });
});

document.querySelectorAll('[data-product]').forEach((link) => {
  link.addEventListener('click', () => {
    const interest = document.querySelector('#interest');
    const productName = link.dataset.product.split(' — ')[0];
    const option = [...interest.options].find((item) => item.text === productName);
    if (option) interest.value = option.value;
    document.querySelector('#message').value = `Me interesa: ${link.dataset.product}`;
  });
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  document.querySelector('#form-feedback').textContent = `Gracias, ${name}. Esta demostración no envió ni guardó tus datos.`;
  event.currentTarget.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();