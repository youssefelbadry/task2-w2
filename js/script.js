document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Function to add new task
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = ''; // Clear input
        }
    });

    // Function to add task to the list
    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
                <input type="checkbox" class="complete-check">
            </div>
        `;
        taskList.appendChild(li);

        const deleteBtn = li.querySelector('.delete-btn');
        const editBtn = li.querySelector('.edit-btn');
        const completeCheck = li.querySelector('.complete-check');

        // Delete Task
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Edit Task
        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edit your task:', taskText);
            if (newTaskText) {
                li.querySelector('span').textContent = newTaskText;
            }
        });

        // Mark as completed
        completeCheck.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
    }
});
