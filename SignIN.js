let isSignUp = true;

    function toggleForm() {
      const formTitle = document.getElementById('form-title');
      const formToggleText = document.querySelector('.toggle-btn');
      const form = document.getElementById('signup-form');
      const usernameField = document.getElementById('username');
      const passwordField = document.getElementById('password');

      isSignUp = !isSignUp;

      if (isSignUp) {
        formTitle.textContent = 'Sign Up';
        formToggleText.textContent = 'Already have an account? Sign In';
      } else {
        formTitle.textContent = 'Sign In';
        formToggleText.textContent = "Don't have an account? Sign Up";
      }
      usernameField.value = '';
      passwordField.value = '';
    }

    function handleSubmit(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (isSignUp) {
        alert(`Account created for ${username}`);
      } else {
        alert(`Welcome back, ${username}`);
      }
    }