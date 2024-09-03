document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Simple client-side login validation (in a real-world scenario, handle login securely)
      if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to homepage
      } else {
        alert('Invalid username or password.');
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Basic signup logic
      alert('Signup successful! You can now log in.');
      window.location.href = 'login.html'; // Redirect to login page
    });
  }
});
