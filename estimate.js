const form = document.querySelector('#estimate-form');
const status = document.querySelector('#form-status');
const button = document.querySelector('#submit-estimate');
const selected = new URLSearchParams(location.search).get('service');

if (selected) {
  const option = [...form.elements.Service.options].find(
    o => o.textContent.toLowerCase() === selected.toLowerCase()
  );
  if (option) form.elements.Service.value = option.value;
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  status.hidden = true;
  button.disabled = true;
  button.textContent = 'Sending request…';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    const data = await response.json();
    if (!response.ok || data.success !== true) {
      throw new Error(data.message || 'Submission was not confirmed');
    }
    form.hidden = true;
    document.querySelector('#estimate-success').hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    console.error('Estimate submission failed:', error);
    status.textContent = 'We could not confirm your request was sent. Please try again or email info@phamworks.ca directly.';
    status.hidden = false;
  } finally {
    button.disabled = false;
    button.textContent = 'Submit Free Estimate Request ↗';
  }
});
