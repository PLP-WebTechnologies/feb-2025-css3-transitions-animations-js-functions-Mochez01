const button = document.getElementById('themeToggle');
const body = document.body;

// Load theme from localStorage on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }
};

// Toggle theme and store preference
button.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Store the theme
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);

  // Add animation to the button
  button.classList.add('animate');
  setTimeout(() => button.classList.remove('animate'), 400);
});