const addBtn = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach(note => {
        addNewNote(note);
    })
}

addBtn.addEventListener('click', () => {
    addNewNote();
});

function addNewNote(text = "") {
    const note = document.createElement('div')
    note.classList.add('note');

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
            <div class="main ${text ? "hidden" : ""} hidden"></div>
            <textarea class="main ${text ? "" : "hidden"} name="" id=""></textarea>
        </div>
    `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
    textArea.value = text;
    main.innerHTML = marked(text);

    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);
        // console.log(main);
        updateLS();
    });

    document.querySelector(".notes_main").appendChild(note);
}
function updateLS() {
    const notesText = document.querySelectorAll("textarea");
    const notes = [];
    notesText.forEach(note => {
        notes.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}

