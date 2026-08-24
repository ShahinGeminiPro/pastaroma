export function initRouter() {
  const appRoot = document.getElementById('app-root');
  
  function render() {
    const path = window.location.pathname;
    appRoot.innerHTML = ''; // clear
    
    if (path === '/') {
      appRoot.innerHTML = '<page-home></page-home>';
    } else if (path === '/menu') {
      appRoot.innerHTML = '<page-menu></page-menu>';
    } else if (path === '/about') {
      appRoot.innerHTML = '<page-about></page-about>';
    } else if (path === '/contact') {
      appRoot.innerHTML = '<page-contact></page-contact>';
    } else {
      appRoot.innerHTML = '<page-home></page-home>';
    }
    
    window.scrollTo(0, 0);
  }

  // Handle browser back/forward
  window.addEventListener('popstate', render);

  // Intercept normal link clicks
  document.body.addEventListener('click', e => {
    // Find closest anchor tag
    const link = e.target.closest('a');
    if (link && link.hasAttribute('data-link')) {
      e.preventDefault();
      window.history.pushState({}, '', link.getAttribute('href'));
      render();
    }
  });

  render();
}
