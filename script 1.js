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

const scriptURL = 'https://script.google.com/macros/s/AKfycbwPrPLRzSeuhvxnXuJfC8fQN1vs_5KYzf6fIAS_BeGhUcvMRlPGAKuvAW1K5j7vV1Ao6A/exec;
const form = document.getElementById('rexing-form');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        alert('¡Gracias! Tu solicitud ha sido enviada con éxito.');
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();