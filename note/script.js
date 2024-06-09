const createNote = document.querySelector('.new-note-container');
const textarea = document.querySelector('textarea');
const buttonContainer = document.querySelector('.button-box');
const saveButton = document.querySelector('.save-button');
const deleteButton = document.querySelector('.delete-button')
const noteList = document.querySelector('.note-list');
const confirmDeleteWindow = document.querySelector('.confirm-delete');


createNote.addEventListener('click', function(){
    createNote.style.display = 'none';
    textarea.style.display = 'block';
    buttonContainer.style.display = 'block';
})


let currentNote;
saveButton.addEventListener('click', function(){
    const noteText = textarea.value;

    if (currentNote) {
        currentNote.textContent = noteText;
    } else{
    const note = document.createElement('div');
    note.classList.add('note');
    note.textContent = noteText;
    noteList.appendChild(note);

    const noteDate = document.createElement('div');
    noteDate.classList.add('note-date')
    const currentDate = new Date().toLocaleString(); 
    noteDate.textContent = currentDate;
    noteList.appendChild(noteDate);

    textarea.value = '';
    textarea.style.display = 'none';
    buttonContainer.style.display = 'none';
    createNote.style.display = 'block';
    currentNote = null;

    const notes = document.querySelectorAll('.note');

    notes.forEach(function(note) {
        note.addEventListener('click', function() {
            // Отримуємо текст нотатки
            const noteContent = note.textContent;
    
            // Виводимо текст нотатки у textarea
            textarea.value = noteContent;
    
            textarea.style.display = 'block';
            buttonContainer.style.display = 'block';
            createNote.style.display = 'none'; 
            currentNote = note;

            saveButton.addEventListener('click', function(){
                textarea.value = '';
                textarea.style.display = 'none';
                buttonContainer.style.display = 'none';
                createNote.style.display = 'block';

            })
        });
    });
    }
})

deleteButton.addEventListener('click', function(){
    textarea.style.opacity = '0.4';
    buttonContainer.style.display = 'none';
    createNote.style.display = 'none';
    confirmDeleteWindow.style.display = 'block';

    const yesDelButton = document.querySelector('.yes-delete-button');
   
    yesDelButton.addEventListener('click', function(){
        if (currentNote) {
            currentNote.remove();
            const noteDates = document.querySelectorAll('.note-date');
            noteDates.forEach(function(noteDate) {
                if (noteDate.nextElementSibling === null) {
                    noteDate.remove();
                }
            });
            currentNote = null;
        }
        textarea.style.opacity = '1';
        textarea.style.display = 'none';
        textarea.value = '';
        confirmDeleteWindow.style.display = 'none';
        createNote.style.display = 'block';

    })

    const cancelDelButton = document.querySelector('.cancel-delete-button'); 
    cancelDelButton.addEventListener('click', function(){ 
            console.log('k');
            textarea.style.opacity = '1';
            confirmDeleteWindow.style.display = 'none';
            buttonContainer.style.display = 'block';

    });
})

