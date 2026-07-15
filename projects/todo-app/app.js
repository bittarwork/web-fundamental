/**
 * Todo App — full working task list
 * Features: add, toggle, delete, filter, clear completed
 */

// DOM references
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('task-count');
const clearCompletedBtn = document.getElementById('clear-completed');
const filterButtons = document.querySelectorAll('.filter-btn');

// App state
let todos = [];
let currentFilter = 'all';

// Load saved tasks from localStorage on startup
function loadTodos() {
  const saved = localStorage.getItem('todos');
  if (saved) {
    todos = JSON.parse(saved);
  }
}

// Save tasks to localStorage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Generate a unique ID for each task
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// Add a new task to the list
function addTodo(text) {
  const trimmed = text.trim();
  if (!trimmed) return;

  todos.push({
    id: generateId(),
    text: trimmed,
    completed: false
  });

  saveTodos();
  renderTodos();
}

// Toggle task completed status
function toggleTodo(id) {
  const task = todos.find(function (t) {
    return t.id === id;
  });

  if (task) {
    task.completed = !task.completed;
    saveTodos();
    renderTodos();
  }
}

// Remove a single task
function deleteTodo(id) {
  todos = todos.filter(function (t) {
    return t.id !== id;
  });
  saveTodos();
  renderTodos();
}

// Remove all completed tasks
function clearCompleted() {
  todos = todos.filter(function (t) {
    return !t.completed;
  });
  saveTodos();
  renderTodos();
}

// Return tasks based on active filter
function getFilteredTodos() {
  if (currentFilter === 'active') {
    return todos.filter(function (t) {
      return !t.completed;
    });
  }
  if (currentFilter === 'completed') {
    return todos.filter(function (t) {
      return t.completed;
    });
  }
  return todos;
}

// Update task count label
function updateCount() {
  const activeCount = todos.filter(function (t) {
    return !t.completed;
  }).length;

  taskCount.textContent = activeCount + ' مهام متبقية';
}

// Render the task list in the DOM
function renderTodos() {
  const filtered = getFilteredTodos();
  todoList.innerHTML = '';

  if (filtered.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty-msg';
    empty.textContent = currentFilter === 'all' ? 'لا توجد مهام — أضف مهمة جديدة!' : 'لا توجد مهام في هذا التصنيف';
    todoList.appendChild(empty);
    updateCount();
    return;
  }

  filtered.forEach(function (task) {
    const li = document.createElement('li');
    li.className = 'todo-item' + (task.completed ? ' completed' : '');
    li.dataset.id = task.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', function () {
      toggleTodo(task.id);
    });

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = task.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.setAttribute('aria-label', 'حذف المهمة');
    deleteBtn.textContent = '×';
    deleteBtn.addEventListener('click', function () {
      deleteTodo(task.id);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });

  updateCount();
}

// Handle form submit — add new task
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  addTodo(todoInput.value);
  todoInput.value = '';
  todoInput.focus();
});

// Handle filter button clicks
filterButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    filterButtons.forEach(function (b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTodos();
  });
});

// Clear completed tasks button
clearCompletedBtn.addEventListener('click', clearCompleted);

// Initialize app
loadTodos();
renderTodos();
