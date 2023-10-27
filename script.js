const scriptURL = 'https://script.google.com/macros/s/AKfycby1QCBGO4VMAGCPK3z3feKuJJsAoOCHobLAq_-S-Dnqq8Wc9BwfEtVW2MoesfBi3Gnscg/exec';
const form = document.forms['user-input']
form.addEventListener('submit', e => {
  // Prevent the default form submission behavior.
  // e.preventDefault();

  // Create a FormData object from the form data.
  const formData = new FormData(form);

  // Submit the form data to the server script.
  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      // If the request is successful, display an alert message.
      alert("Thank you! your form is submitted successfully.");
    })
    .then(() => {
      // Reload the page.
      window.location.reload();
    })
    .catch(error => {
      // Log an error message to the console.
      console.error('Error!', error.message);
    });
});