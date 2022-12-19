window.addEventListener('DOMContentLoaded', main);

function main() {
    addTodo();
}

function addTodo() {
    const addBtn = document.getElementById('addTodo');
    const tasks = document.getElementById('tasks');
    const inputField = document.getElementById('inputField');

    addBtn.addEventListener('click', () => {
        const paragraph = document.createElement('p');
        paragraph.innerText = inputField.value;
        paragraph.classList.add('p')
        tasks.appendChild(paragraph);
    });
}
