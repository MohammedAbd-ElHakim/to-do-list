
const input = document.getElementById('input_box');
const listCountainer = document.getElementById('list_countainer');

function addTask() {
    if (input.value == '') {
        alert("You must write something!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listCountainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        input.value = '';
    }
    saveData();

}

listCountainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();

    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();

    }
}, false);

function saveData() {
    localStorage.setItem('data', listCountainer.innerHTML);
}

function getData() {
    listCountainer.innerHTML = localStorage.getItem('data');
}

getData();