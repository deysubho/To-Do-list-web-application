// Get form and task list elements
const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Add event listener to form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const taskInput = document.getElementById('task-input').value;
  const prioritySelect = document.getElementById('priority-select').value;
  const deadlineInput = document.getElementById('deadline-input').value;

  // Create new task element
  const task = document.createElement('div');
  task.classList.add('task');
  task.innerHTML = `
    <span>${taskInput}</span>
    <span>Priority: ${prioritySelect}</span>
    <span>Deadline: ${deadlineInput}</span>
  `;

  // Add task to task list
  taskList.appendChild(task);

  // Clear input fields
  document.getElementById('task-input').value = '';
  document.getElementById('priority-select').value = 'low';
  document.getElementById('deadline-input').value = '';
});
