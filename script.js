document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const clearTasksBtn = document.getElementById('clearTasksBtn');
    const taskList = document.getElementById('taskList');
  
    loadTasks();
  
    addTaskBtn.addEventListener('click', addTask);
    clearTasksBtn.addEventListener('click', clearTasks);
    
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        saveTask(taskText);
        taskInput.value = '';
      } else {
        alert('Please enter a task.');
      }
    }
  
    function clearTasks() {
      taskList.innerHTML = '';
      localStorage.clear();
    }
  
    function saveTask(task) {
      let tasks;
      if (localStorage.getItem('tasks') === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    function loadTasks() {
      if (localStorage.getItem('tasks') !== null) {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(task => {
          const li = document.createElement('li');
          li.textContent = task;
          taskList.appendChild(li);
        });
      }
    }
  });
  