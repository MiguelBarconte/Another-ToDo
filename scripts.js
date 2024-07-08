
const notesList = document.getElementById('note_list');
const input = document.getElementById('note');

notesList.addEventListener('contextmenu', e => { e.button.preventDefault("true"); });
notesList.addEventListener('mouseup', e => { deleteNote(e); });
input.addEventListener('keyup', e => { if(e.key === 'Enter'){setNote();} });

function setNote() {
    let task = document.createElement('li');
    if (input.value.trim() == '') {
        alert('El campo esta vacio!');
    } else {
        task.innerHTML =
        `<button class="btn-delete" onclick="deleteNote(this)">
        <i class="fa-solid fa-x"></i>
        </button>
        <p class="text">${input.value}</p>`;
        notesList.appendChild(task);
        input.value = '';
    }
}

function deleteNote(e) {
    if (e.button === 2) {
        notesList.removeChild(e.target);
        console.log(e);
    }
    if (e.className === 'btn-delete') {
        notesList.removeChild(e.parentElement);
    }
}
