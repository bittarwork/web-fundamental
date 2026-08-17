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

// Interactive quiz: pick an answer and get instant feedback
function initQuizCards() {
  const quizCards = document.querySelectorAll('.quiz-card');

  quizCards.forEach(function (card) {
    const options = card.querySelectorAll('.quiz-option');
    const feedback = card.querySelector('.quiz-feedback');
    const correctAnswer = card.getAttribute('data-correct');

    options.forEach(function (option) {
      option.addEventListener('click', function () {
        if (card.classList.contains('answered-correct') || card.classList.contains('answered-wrong')) {
          return;
        }

        const selected = option.getAttribute('data-value');
        const isCorrect = selected === correctAnswer;

        options.forEach(function (opt) {
          opt.disabled = true;
          if (opt.getAttribute('data-value') === correctAnswer) {
            opt.style.borderColor = 'var(--success)';
            opt.style.background = 'var(--success-bg)';
          }
        });

        if (isCorrect) {
          card.classList.add('answered-correct');
          feedback.textContent = '✓ ممتاز! إجابة صحيحة';
          feedback.className = 'quiz-feedback show correct';
        } else {
          card.classList.add('answered-wrong');
          feedback.textContent = '✗ ليست الإجابة الصحيحة — راجع الكود وحاول مرة أخرى';
          feedback.className = 'quiz-feedback show wrong';
        }
      });
    });
  });
}

// Run inline code demos safely inside lesson pages
function initCodeDemos() {
  const demoButtons = document.querySelectorAll('.run-demo-btn');

  demoButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const demoId = button.getAttribute('data-demo');
      const resultBox = document.getElementById(demoId);

      if (!resultBox) return;

      const demoFn = window['demo_' + demoId];
      if (typeof demoFn !== 'function') {
        resultBox.textContent = 'Demo not found';
        resultBox.classList.add('show');
        return;
      }

      const lines = [];
      const originalLog = console.log;

      // Capture console.log output for display
      console.log = function () {
        const args = Array.from(arguments);
        lines.push(args.map(function (arg) {
          return typeof arg === 'object' ? JSON.stringify(arg) : String(arg);
        }).join(' '));
      };

      try {
        demoFn();
        resultBox.textContent = lines.length > 0 ? lines.join('\n') : '(no output)';
      } catch (error) {
        resultBox.textContent = 'Error: ' + error.message;
      }

      console.log = originalLog;
      resultBox.classList.add('show');
    });
  });
}

// Add copy buttons to code examples
function initCopyButtons() {
  const blocks = document.querySelectorAll('.code-block');

  blocks.forEach(function (block) {
    if (block.querySelector('.copy-code-btn')) return;
    const code = block.querySelector('pre');
    if (!code) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-code-btn';
    button.textContent = 'نسخ';

    button.addEventListener('click', function () {
      const text = code.textContent || '';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          button.textContent = 'تم النسخ';
          setTimeout(function () { button.textContent = 'نسخ'; }, 1600);
        });
      }
    });

    block.appendChild(button);
  });
}

// Initialize all shared functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  initSolutionToggles();
  highlightCurrentSession();
  initQuizCards();
  initCodeDemos();
  initCopyButtons();
});
