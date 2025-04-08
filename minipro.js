
let tasks = [
     { Text: "Learn JavaScript", done: true },
     { Text: "Build mini project", done: true},
     { Text: "Drink water", done: false}
];

//function to show all tasks

function showAllTasks() {
     const taskList = document.getElementById("taskList");
     taskList.innerHTML = ""; //clear list

for (let task of tasks) {
     const li = document.createElement("li");
     li.textContent = task.Text + (task.done ? "✅" : "❌");
     taskList.appendChild(li);
}
}



//function to show only completed tasks

function showCompletedTasks() {
     const taskList = document.getElementById("taskList");
     taskList.innerHTML = ""; //we need to clear the page otherwhise the tasks will add on it all the time 


for (let task of tasks) {
     if (task.done) {
          const li = document.createElement("li");
          li.textContent = task.text + "✅";
          taskList.appendChild(li);
     }
}

}


//fucntion to add task


function addNewTask() {
     const input = document.getElementById("Enter new task here:")
     const newTaskText = input.value.trim();;

     if (!newTaskText) {
          alert("Please enter a task");
          return;
     }

tasks.push({ text: newTaskText, done:false});
input.value = "", //clear input field
showAllTasks();

}

showAllTasks();

