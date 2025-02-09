function done(elem) {
    if (elem.checked) {
        elem.nextSibling.style.textDecoration = "line-through";
    } else {
        elem.nextSibling.style.textDecoration = "none";
    }
}

function remove(elem) {
    let root = elem.parentElement.parentElement;
    root.removeChild(elem.parentElement);
}

function add() {
    let task_data = document.getElementById("task-input").value;

    if (task_data == "") {
        alert("Enter at least one character!");
        return;
    }

    let task_item = document.createElement("li");
    
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.addEventListener("click", function() {done(this)});

    let task_detail = document.createElement("span");
    task_detail.innerHTML = task_data;
    document.getElementById("task-input").value = "";

    let btn = document.createElement("button");
    btn.innerHTML = "Remove";
    btn.addEventListener("click", function() {remove(this)});

    task_item.appendChild(check);
    task_item.appendChild(task_detail);
    task_item.appendChild(btn);

    document.getElementById("task-list").appendChild(task_item);
}