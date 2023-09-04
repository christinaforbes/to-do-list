/*
    Christina Forbes
    12/8/2020
*/

/* adds a task */
function addTask(event) {
    let taskList = document.getElementById("taskList");

    let task = document.createElement("li");
    taskList.append(task);

    let taskText = document.createElement("div");
    let input = document.getElementById("newTask").value;
    taskText.innerText = input;
    taskText.addEventListener("click", strikethroughTask);
    task.append(taskText);

    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerHTML = "&times;";
    deleteButton.addEventListener("click", deleteTask);
    task.append(deleteButton);

    document.getElementById("newTask").value = "";
}

let addSubmit = document.getElementById("addTask");
addSubmit.addEventListener("click", addTask);

/* strikes through a task */
function strikethroughTask(event) {
    event.target.classList.toggle("strikethrough");
}

/* deletes a task */
function deleteTask(event) {
    let confirmDelete = confirm("Are you sure you want to delete this task?");

    if (confirmDelete == true) {
        let deletedTask = event.target.previousElementSibling.innerText;
        event.target.parentElement.remove();
        let deletedTaskLog = "Deleted \"" + deletedTask + "\"";
        console.log(deletedTaskLog);
    }
    else {
        return;
    }
}

/* deletes all tasks */
function deleteAllTasks(event) {
    let li = document.getElementsByTagName("li");
    let liArray = Array.from(li);

    let confirmDeleteAll = confirm("Are you sure you want to delete all tasks?");

    if (confirmDeleteAll == true && liArray.length != 0) {
        for (let i = 0; i < liArray.length; i++) {
            liArray[i].remove();
        }
        let deletedAllTasksLog = "Deleted all tasks";
        console.log(deletedAllTasksLog);
    }
    else {
        return;
    }
}

let deleteAllSubmit = document.getElementById("deleteAllTasks");
deleteAllSubmit.addEventListener("click", deleteAllTasks);

/* changes color theme */
function changeTheme(event) {
    let themes = document.getElementById("theme").options;

    let themeElements = document.querySelectorAll(".theme");
    themeElementsArray = Array.from(themeElements);

    switch (themes.selectedIndex) {
        case 0: 
            for (let i = 0; i < themeElementsArray.length; i++) {
                themeElementsArray[i].style.backgroundColor = "#d9d9d9";
            }
            break;
        case 1: 
            for (let i = 0; i < themeElementsArray.length; i++) {
                themeElementsArray[i].style.backgroundColor = "#c4e3ed";
            }
            break;
        case 2: 
            for (let i = 0; i < themeElementsArray.length; i++) {
                themeElementsArray[i].style.backgroundColor = "#c0f2f2";
            }
            break;
        case 3: 
            for (let i = 0; i < themeElementsArray.length; i++) {
                themeElementsArray[i].style.backgroundColor = "#ffbab3";
            }
            break;
        case 4: 
            for (let i = 0; i < themeElementsArray.length; i++) {
                themeElementsArray[i].style.backgroundColor = "#e2d0e2";
            }
            break;
    }
}

let themeSubmit = document.getElementById("changeTheme");
themeSubmit.addEventListener("click", changeTheme);



let boolean = (12**2 >= 100) || (3 % 2 == 0);
console.log(boolean);