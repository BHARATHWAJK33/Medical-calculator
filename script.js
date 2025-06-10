    function loadPage(url) {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          document.getElementById("content").innerHTML = data;
        })
        .catch(error => {
          document.getElementById("content").innerHTML = "Error loading page.";
          console.error("Error:", error);
        });
    }


     const themeBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const isDark = localStorage.getItem('theme') === 'dark';

  function applyTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Apply saved theme on load
  applyTheme(isDark ? 'dark' : 'light');

  themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

    function openPopup(file) {
      document.getElementById('popupFrame').src = file;
      document.getElementById('modal').classList.add('active');
    }

    function closePopup() {
      document.getElementById('modal').classList.remove('active');
      document.getElementById('popupFrame').src = ''; // clear iframe
    }