const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        inputBox.value = "";
        saveData(); // Save the updated list to localStorage
    }
}

// Event listener for Enter key press in inputBox
inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask(); // Call addTask function when Enter key is pressed
    }
});

// Event listener for clicks on listcontainer (for toggling 'checked' class and deleting tasks)
listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save the updated list to localStorage
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save the updated list to localStorage
    }
});

// Function to save data to localStorage
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

// Function to show tasks from localStorage
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask(); // Show tasks from localStorage when the page loads
