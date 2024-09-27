
// Task object constructor
function Task(name) {
    this.name = name;
    this.completed = false;
}

// To-Do List class
class ToDoList {
    constructor() {
        this.tasks = [];
    }

    // Add a new task
    addTask(name) {
        const newTask = new Task(name);
        this.tasks.push(newTask);
        console.log(`Task added: "${name}"`);
    }

    // View all tasks
    viewTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks available. The list is empty.");
            return;
        }
        
        console.log("To-Do List:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.name}`);
        });
    }

    // Mark a task as completed
    completeTask(index) {
        if (index < 0 || index >= this.tasks.length) {
            console.log("Invalid task number.");
            return;
        }
        this.tasks[index].completed = true;
        console.log(`Task completed: "${this.tasks[index].name}"`);
    }

    // Remove a task from the list
    removeTask(index) {
        if (index < 0 || index >= this.tasks.length) {
            console.log("Invalid task number.");
            return;
        }
        const removedTask = this.tasks.splice(index, 1)[0];
        console.log(`Task removed: "${removedTask.name}"`);
    }
}

// Example usage:
const myToDoList = new ToDoList();

// Adding tasks
myToDoList.addTask("Learn JavaScript");
myToDoList.addTask("Build a To-Do List App");
myToDoList.addTask("Read a book");

// Viewing tasks
myToDoList.viewTasks();

// Completing a task
myToDoList.completeTask(1); // Completes the second task

// Viewing tasks again
myToDoList.viewTasks();

// Removing a task
myToDoList.removeTask(0); // Removes the first task

// Viewing tasks again
myToDoList.viewTasks();

// Removing all tasks to show the empty message
myToDoList.removeTask(0);
myToDoList.removeTask(0);
myToDoList.viewTasks(); // Should show empty message