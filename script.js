// Automated Profile & Task List Manager
// Runs automatically when the page loads; no event listeners or click handlers.

const userName = document.getElementById("user-name");
const userRole = document.getElementById("user-role");
const profileCard = document.getElementById("profile-card");
const taskList = document.getElementById("task-list");

// Change text content
userName.textContent = "Sireesha";
userRole.textContent = "Frontend Student";

// Modify classes and styles
profileCard.classList.add("active-card");
userName.style.color = "purple";

// Set custom data attribute
profileCard.setAttribute("data-status", "verified");

// Create and append a new task
const newTask = document.createElement("li");
newTask.textContent = "New Task: Practice DOM Manipulation";
newTask.classList.add("pending");
taskList.appendChild(newTask);

// Remove the invalid task
const invalidTask = document.getElementById("invalid-task");
invalidTask.remove();
