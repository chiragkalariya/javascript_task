// // function for validate input vlaue before submitting 
// function validateForm() {
//     var noteTitle = document.getElementById("note-title").value;
//     var noteDescription = document.getElementById("note-description").value;

//     if(noteTitle == ""){
//         alert("Title is requeried")
//         return false
//     }
//     if(noteDescription == ""){
//         alert("description is requeried")
//         return false
//     }

//     return true
// }

// // function to show Data
// function showData() {
//     var noteListLS;
//     if(localStorage.getItem("noteListLS") == null) {
//         noteListLS = [];
//     }else {
//         noteListLS = JSON.parse(localStorage.getItem("noteListLS"));
//     }

//     var html = "";
//     noteListLS.forEach(function(element, index){
//         html += `
//         <div class="note">
//             <h2 id= "chirag">${element.noteTitle}</h2>
//             <p>${element.noteDescription}</p>
//             <hr>
//             <div class="note_footer">
//                 <span>show time</span>
//                 <span class="setnote" id="set-note">
//                     <button id="edit-note" onclick="updateData(${index})"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
//                     <button id="delete-note" onclick="deleteData(${index})"><i class="fa fa-trash" aria-hidden="true"></i></button>
//                 </span>
//             </div>
//         </div>
//         `
//     });
//     document.querySelector("#note-list").innerHTML = html;  
// }

// // Loads all data when document or page loaded
// document.onload = showData();

// // function to add Data
// function addData() {
//     // if form is validate
//     if (validateForm() == true) {
//         var noteTitle = document.getElementById("note-title").value;
//         var noteDescription = document.getElementById("note-description").value;
//         let noteListLS;
//         if (localStorage.getItem("noteListLS") == null) {
//             noteListLS = [];
//         } else {
//             noteListLS = JSON.parse(localStorage.getItem("noteListLS"));
//         }
//         console.log(noteListLS);
//         noteListLS.push({
//             noteTitle: noteTitle,
//             noteDescription: noteDescription
//         });

//         localStorage.setItem("noteListLS", JSON.stringify(noteListLS));

//         showData();

//         document.getElementById("note-title").value = "";
//         document.getElementById("note-description").value = "";
//     }
// }


// =======================================================

const parentNote = document.getElementById("note-list");

    // let noteListLS = [
    //     { name: "a", description: "zzz" },
    //     { name: "b", description: "zzz" },
    //     { name: "c", description: "zzz" },
    //     { name: "d", description: "zzz" },
    //     { name: "e", description: "zzz" },
    //     { name: "f", description: "zzz" },
    //     { name: "g", description: "zzz" }
    // ];
    showData()
function showData() {
    var noteListLS;
    if (localStorage.getItem("noteListLS") == null) {
        noteListLS = []
    } else {
        noteListLS = JSON.parse(localStorage.getItem("noteListLS"));
    }
    addNoteList();
}


noteListLS.forEach(addNoteList)
addNoteList()
// add note
function addNoteList(item, index) {

    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <h2>${noteListLS[index].name}</h2>
        <p>${noteListLS[index].description}</p>
        <hr>
        <div class="note_footer">
            <span>Show time</span>
            <span class="setnote" id="set-note">
                <button id="edit-note" onclick="updateData()"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                <button id="delete-note" onclick="deleteData()"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </span>
        </div>
    `;
    parentNote.appendChild(note);
}
