// Sample tasks data (mock data)
const tasks = [
    {
      id: 1,
      name: "Task 1",
      description: "Complete task 1",
      dueDate: "2023-08-15",
      assignee: "User123",
      status: "In Progress",
      comments: [
        { user: "User456", comment: "Looking good!", timestamp: "2023-07-26 13:45" },
        { user: "User123", comment: "Thanks!", timestamp: "2023-07-26 14:20" },
      ],
    },
    // Add more tasks as needed
  ];
  
  // Function to display tasks on the dashboard
  function displayTasks() {
    const taskList = document.querySelector(".task-list");
    taskList.innerHTML = "";
  
    tasks.forEach((task) => {
      const taskCard = document.createElement("div");
      taskCard.classList.add("task");
      taskCard.innerHTML = `
        <h3>${task.name}</h3>
        <p>${task.description}</p>
        <p>Due: ${task.dueDate}</p>
        <p>Status: ${task.status}</p>
        <button onclick="showTaskDetails(${task.id})">View Details</button>
      `;
      taskList.appendChild(taskCard);
    });
  }
  
  // Function to show task details
  function showTaskDetails(taskId) {
    const taskDetailsSection = document.querySelector(".task-details");
    const task = tasks.find((task) => task.id === taskId);
  
    taskDetailsSection.innerHTML = `
      <h2>${task.name}</h2>
      <p>Description: ${task.description}</p>
      <p>Due: ${task.dueDate}</p>
      <p>Status: ${task.status}</p>
      <p>Assignee: ${task.assignee}</p>
      <div class="comments">
        <h3>Comments</h3>
        ${task.comments
          .map(
            (comment) =>
              `<p>${comment.user} - ${comment.timestamp}<br>${comment.comment}</p>`
          )
          .join("")}
      </div>
      <textarea placeholder="Add your comment..."></textarea>
      <button onclick="addComment(${taskId})">Add Comment</button>
    `;
  
    taskDetailsSection.style.display = "block";
  }
  
  // Function to add a comment to a task
  function addComment(taskId) {
    const task = tasks.find((task) => task.id === taskId);
    const commentText = document.querySelector(".task-details textarea").value;
    const newComment = {
      user: "User123", // You can replace this with the actual logged-in user
      comment: commentText,
      timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
    };
  
    task.comments.push(newComment);
    showTaskDetails(taskId);
  }
  
  // Function to simulate logout (clears the task details section)
  function logout() {
    const taskDetailsSection = document.querySelector(".task-details");
    taskDetailsSection.innerHTML = "";
    taskDetailsSection.style.display = "none";
  }
  
  // Initial function call to display tasks on the dashboard
  displayTasks();
  