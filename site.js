// Both translations share section IDs. Preserve the reading location in links.
(() => {
  const languageLinks = document.querySelectorAll('.languages a');
  const sections = [...document.querySelectorAll('main > section[id]')];

  function syncLanguageLinks() {
    let hash = window.location.hash;
    if (!hash) {
      const current = sections.filter(section => section.getBoundingClientRect().top <= 120).pop();
      hash = current ? `#${current.id}` : '';
    }
    languageLinks.forEach(link => {
      const target = new URL(link.href);
      target.hash = hash;
      link.href = target.href;
    });
  }

  syncLanguageLinks();
  window.addEventListener('hashchange', syncLanguageLinks);
  languageLinks.forEach(link => link.addEventListener('click', syncLanguageLinks));
})();
