// Function to change the language
function switchLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.dataset.translate;
    el.textContent = translations[lang][key] || el.textContent;
  });

  // Update the lang attribute in the html tag
  document.documentElement.lang = lang;
}

// Event listener for the language selector
document.addEventListener("DOMContentLoaded", function() {
  const languageSelector = document.getElementById('languageSelector');

  languageSelector.addEventListener('change', function(event) {
    switchLanguage(event.target.value);
  });

  // Initialize the page with the default language
  switchLanguage(languageSelector.value);
});