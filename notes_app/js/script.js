const addNoteBtn = document.getElementById("addnotebtn");
const addNotePopup = document.getElementById("addnote-popup");
const closePopup = document.getElementById("close-popup");
const deleteNote = document.querySelectorAll("delete-note")
// const saveNote = document.getElementById("save-note");
// // const setNote = document.getElementById("set-note");
// // const setNotePopup = document.getElementById("setnote-popup");
// const editNote = document.getElementById("edit-note");
// const addNotes = document.getElementById("note-list");

// // store data in local storage

let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let dates = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
date = `${dates}/${month}/${year} ${hour}:${minute}:${second}`

addNoteBtn.addEventListener('click', () => {
    addNotePopup.classList.add("show")
});

closePopup.addEventListener('click', () => {
    addNotePopup.classList.remove("show")
});

deleteNote.addEventListener('click', () => {
    
})

// // const saveData = e => {
// //     // store data in local storage
// //     let notesData = JSON.parse(localStorage.getItem("noteData"));
// //     let noteTitle = document.getElementById("note-title").value;
// //     let noteDescription = document.getElementById("note-description").value;
// //     const note = [];

// //     notesData.forEach((noteTitle, noteDescription) => {
// //         note.push({
// //             title: document.getElementById("note-title").value,
// //             description: document.getElementById("note-description").value
// //         })
// //     })
// //     localStorage.setItem('notesData', JSON.stringify(note));

// //     // console.log(notesData);
// //     // addNoteLS();
// // };

// // function addNoteLS() {
// //     // console.log(localStorage.getItem('notesData'));
// //     if (localStorage.getItem('notesData')) {
// //         var note = document.querySelector('.notes_inner');
// //         JSON.parse(localStorage.getItem('notesData')).forEach(data => {
// //             note.innerHTML += `
// //             <div class="note">
// //                 <h2>${data.title}</h2>
// //                 <p>${data.description}</p>
// //                 <hr>
// //                 <div class="note_footer">
// //                     <span>${date}</span>
// //                     <span class="setnote" id="set-note"><i class="fa fa-ellipsis-h" aria-hidden="true"></i>
// //                         <div class="setnote_popup" id="setnote-popup">
// //                             <button id="edit-note">Edit</button>
// //                             <button>Delete</button>
// //                         </div>
// //                     </span>
// //                 </div>
// //             </div>
// //             `;
// //         });
// //         const setNote = note.querySelector("#set-note");
// //         const setNotePopup = note.querySelector("#setnote-popup");
// //         // console.log(setNote);
// //     }
// // }

// // addNoteLS();
// const notes = JSON.parse(localStorage.getItem("notes"));
// if (notes) {
//     notes.forEach(addNoteLS());
// }

// function addNoteLS() {
//     let noteTitle = document.querySelectorAll("#note-title");
//     const note = document.createElement("div");
//     note.classList.add("note"); 

//     note.innerHTML = `
//         <h2>${noteTitle}</h2>
//         <p>asfds</p>
//         <hr>
//         <div class="note_footer">
//             <span>${date}</span>
//             <span class="setnote" id="set-note" onclick="myFunction()"><i class="fa fa-ellipsis-h" aria-hidden="true"></i>
//                 <div class="setnote_popup" id="setnote-popup">
//                     <button id="edit-note">Edit</button>
//                     <button>Delete</button>
//                 </div>
//             </span>
//         </div>
//     `;
//     saveNote.addEventListener('click', () => {
//         updateLS();
//     })
//     document.querySelector(".notes_inner").appendChild(note);
// }

// function updateLS() {
//     let noteTitle = document.querySelectorAll("#note-title");
//     // let noteDescription = document.getElementById("note-description");
//     // const notesText = document.querySelectorAll("textarea");

//     const notes = [];

//     noteTitle.forEach((note) => {
//         notes.push(note.value);
//     });
//     console.log(notes);

//     localStorage.setItem("notes", JSON.stringify(notes));
// }

// let arrayEach = ["abc", "sdf", "fds", "sad", "sdf", "asf"];
// console.log(arrayEach);
// arrayEach.push("rrr");
// console.log(arrayEach);
// const arrayEach = JSON.parse(localStorage.getItem("notes"));
// if (arrayEach) {
//     arrayEach.forEach((name) => {
//         storeNotes(name);
//     });
// }
// let arrayEach = [];
// function storeNotes() {
//     let inputText = document.querySelectorAll('#NoteTitle');

//     inputText.forEach((name) => {
//         arrayEach.push(name.value);
//         // localStorage.setItem("notes", JSON.stringify(arrayEach));
//     });
//     console.log(arrayEach);
// }
// let saveNote = document.getElementById("submit");
// saveNote.addEventListener('click', () => {
//     storeNotes();
// })

// =================================================================

// const abc = JSON.parse(localStorage.getItem("notes"));
// if (abc) {
//     abc.forEach((note) => {
//         addNote(note);
//     });
// }
// console.log(abc);
// function addNote() {
//     if (localStorage.getItem("notes")) {
//         const note = document.createElement("div");
//         let parentDiv = document.querySelector(".notes_inner");
//         note.classList.add("note");
//         JSON.parse(localStorage.getItem('notes')).forEach(data => {
//             note.innerHTML = `
//                 <h2>sdfdsf</h2>
//                 <p>sdf</p>
//                 <hr>
//                 <div class="note_footer">
//                     <span>Show time</span>
//                     <span class="setnote" id="set-note"><i class="fa fa-ellipsis-h" aria-hidden="true"></i>
//                         <div class="setnote_popup" id="setnote-popup">
//                             <button id="edit-note">Edit</button>
//                             <button>Delete</button>
//                         </div>
//                     </span>
//                 </div>
//             `;
//             parentDiv.appendChild(note);
//         });
//     }
// }

// const myArray = [];
// document.querySelector('#save-note').addEventListener('click', function () {
//     let noteTitle = document.querySelector('#note-title').value;
//     let noteDescription = document.querySelector('#note-description').value;
//     const objectString = JSON.stringify(object);
//     myArray.push({
//         title: noteTitle.value,
//         description: noteDescription.value
//     });
//     // console.log(myArray);
//     localStorage.setItem("notes", JSON.stringify(myArray));
//     addNotePopup.classList.remove("show")
// });


// ====================================================================
document.querySelector('#save-note').addEventListener('click', () => {
    signUp();
    addNotePopup.classList.remove("show")
});

const signUp = () => {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push({
        title: document.querySelector('#note-title').value,
        description: document.querySelector('#note-description').value
    })
    localStorage.setItem('notes', JSON.stringify(notes));
    // console.log(notes);
    addNote();
    // e.preventDefault();
}

function addNote() {
    // console.log(localStorage.getItem('notes'));
    if (localStorage.getItem('notes')) {
        var output = document.querySelector('#note-list');
        // var parenDiv = document.querySelector('.notes_inner');
        // let output = document.createElement("div")
        // output.classList.add("note")
        // let editNote = output.querySelector("#set-note");
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('notes')).forEach(data => {
            output.innerHTML += `
            <div class="note">
                <h2 id= "chirag">${data.title}</h2>
                <p>${data.description}</p>
                <hr>
                <div class="note_footer">
                    <span>show time</span>
                    <span class="setnote" id="set-note">
                        <button id="edit-note"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                        <button id="delete-note"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </span>
                </div>
            </div>
        `;
        // console.log(data,"Data>>>>>>>>>>>");
    });
}
// console.log(output,"dataaaaaaaaaaaaaaaaaaaaa>>>>>>>>>");
}
addNote();

// let a = document.querySelectorAll("setnote-popup").style.vis("show");
// document.getElementById("setnote-popup").style.display = "show"
// document.getElementById("setnote-popup").classList.toggle("show")[0];
// return a;




    // let formModel = document.getElementById("setnote-popup");
    // let buttom = document.getElementById("set-note")
    // buttom.onclick = function () {
    //     formModel.style.display = "block"
    // }
    // window.onclick = function (event) {
    //     if(event.target == formModel){
    //         formModel.style.display ="none"
    //     }
    // }

    // $(document).ready(function () {
    //     $(".setnote").click(function () {
    //         $('#chirag').val($(this).data('title'));
    //         $('#setnote-popup').modal('show');
    //     });
    // });




