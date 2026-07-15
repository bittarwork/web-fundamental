/**
 * Web Fundamentals Course - Shared Scripts
 * Handles collapsible solutions and UI interactions
 */

// Toggle solution visibility on button click
function initSolutionToggles() {
  const toggles = document.querySelectorAll('.solution-toggle');

  toggles.forEach(function (button) {
    button.addEventListener('click', function () {
      const solutionId = button.getAttribute('data-target');
      const solutionPanel = document.getElementById(solutionId);

      if (!solutionPanel) return;

      const isOpen = solutionPanel.classList.contains('open');

      // Close all other open solutions in the same exercise
      const parent = button.closest('.exercise-item');
      if (parent) {
        parent.querySelectorAll('.solution-content.open').forEach(function (panel) {
          panel.classList.remove('open');
        });
        parent.querySelectorAll('.solution-toggle.active').forEach(function (btn) {
          btn.classList.remove('active');
        });
      }

      // Toggle current solution
      if (!isOpen) {
        solutionPanel.classList.add('open');
        button.classList.add('active');
        button.querySelector('.toggle-text').textContent = 'إخفاء الحل';
      } else {
        solutionPanel.classList.remove('open');
        button.classList.remove('active');
        button.querySelector('.toggle-text').textContent = 'عرض الحل';
      }
    });
  });
}

// Highlight current session in navigation
function highlightCurrentSession() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.lesson-nav .nav-link');

  navLinks.forEach(function (link) {
    if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href'))) {
      link.style.background = 'var(--gray-100)';
      link.style.color = 'var(--gold)';
      link.style.fontWeight = '700';
    }
  });
}

// Initialize all shared functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  initSolutionToggles();
  highlightCurrentSession();
});
