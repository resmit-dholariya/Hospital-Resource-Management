document.addEventListener('DOMContentLoaded', () => {
  // Login form submission handling
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = 'hosp_dashboard.html';
    // Handle login form submission (verify credentials, redirect, etc.)
    // For demonstration purposes, show a success message
    const message = document.createElement('p');
    message.classList.add('message');
    message.textContent = 'Login successful! Redirecting...';
    loginForm.appendChild(message);
    setTimeout(() => {
      window.location.href = 'doc_dash.html'; // Redirect to dashboard
    }, 100);
  });

  // Signup form submission handling
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = 'admin_dash.html';
    // Handle signup form submission (store data, etc.)
    // For demonstration purposes, show a success message
    const message = document.createElement('p');
    message.classList.add('message');
    message.textContent = 'Signup successful! Redirecting...';
    signupForm.appendChild(message);
    setTimeout(() => {
      window.location.href = 'doc_dash.html'; // Redirect to dashboard
    }, 100);
  });
});
