let indexGlobal = -1;

document.getElementById("titleAddPerson").style.display = "none";
document.getElementById("formAddPerson").style.display = "none";

document.getElementById("titleUpdatePerson").style.display = "none";
document.getElementById("formUpdatePerson").style.display = "none";

let personnes = [
  {
    prenom: "Fati",
    nom: "SIDI",
    genre: "F",
    dtNaiss: "31/12/1997",
  },
  {
    prenom: "Oumar",
    nom: "Sy",
    genre: "H",
    dtNaiss: "31/12/1999",
  },
  {
    prenom: "Houda",
    nom: "Oussama",
    genre: "F",
    dtNaiss: "31/12/2000",
  },
  {
    prenom: "Ahmed",
    nom: "Aboubacar",
    genre: "H",
    dtNaiss: "31/12/1998",
  },
  {
    prenom: "Outhman",
    nom: "Sidna",
    genre: "H",
    dtNaiss: "31/12/2001",
  },
];

let tablePersons = document.getElementById("tablePersons");
let tablePersonsBody = document.getElementById("tablePersonsBody");

function addPerson(person) {
  let thisRow = document.createElement("tr");

  let prenom = document.createElement("td");
  prenom.innerText = person.prenom;
  thisRow.appendChild(prenom);

  let nom = document.createElement("td");
  nom.innerText = person.nom;
  thisRow.appendChild(nom);

  let genre = document.createElement("td");
  genre.innerText = person.genre;
  thisRow.appendChild(genre);

  let dtNaiss = document.createElement("td");
  dtNaiss.innerText = person.dtNaiss;
  thisRow.appendChild(dtNaiss);

  let actions = document.createElement("td");
  let updateAction = document.createElement("button");
  updateAction.classList.add("btn", "btn-primary");
  updateAction.value = "update";
  let deleteAction = document.createElement("button");
  deleteAction.classList.add("btn", "btn-danger");
  deleteAction.value = "delete";

  let updateIcon = document.createElement("i");
  updateIcon.classList.add("far", "fa-edit");
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas", "fa-trash-alt");

  updateAction.appendChild(updateIcon);
  deleteAction.appendChild(deleteIcon);

  actions.appendChild(updateAction);
  actions.appendChild(deleteAction);
  thisRow.appendChild(actions);

  tablePersonsBody.appendChild(thisRow);
}

function buildTable() {
  personnes.forEach((person) => {
    addPerson(person);
    updateDeleteButtonsListener();
  });
}

buildTable();

let addButton = document.getElementById("addButton")

addButton.addEventListener("click", function(e) {
    
    tablePersons.style.display = "none"
    document.getElementById("titlePersonList").style.display = "none"
    addButton.style.display = "none"
    // document.getElementById("searchInput").style.display = "none"
    
    document.getElementById("titleAddPerson").style.display = "block"
    document.getElementById("formAddPerson").style.display = "block"
    
    
})


// Event listner on button to add a new Person : button save in add's form

let saveButtonPerson = document.getElementById("saveNewPerson")
saveButtonPerson.addEventListener("click", function() {

    dtNaissInput = new Date(Date.parse(document.getElementById("dtNaiss").value))

    let person = {
        prenom: document.getElementById("prenom").value,
        nom:  document.getElementById("nom").value,
        genre: document.getElementById("genre").value,
        dtNaiss: dtNaissInput
    }

    personnes.push(person)

    document.getElementById("titleAddPerson").style.display = "none"
    document.getElementById("formAddPerson").style.display = "none"
    
    tablePersons.style.display = ""
    document.getElementById("titlePersonList").style.display = ""
    addButton.style.display = ""
    // document.getElementById("searchInput").style.display = ""

    // Clear the body of the table (tbody) : and reinitialize the body with buildTable Function
    tablePersonsBody.innerHTML = ""
    buildTable()

    alert("Personne ajoutée avec succès")

    document.getElementById("prenom").value = ""
    document.getElementById("nom").value = ""
    document.getElementById("genre").value = ""
    document.getElementById("dtNaiss").value = ""

    updateDeleteButtonsListener()
})


// Actions to update persons :: event listener on every "update" button in every row

function updateDeleteButtonsListener() {
    let tableRows = tablePersonsBody.querySelectorAll("tr");

    for(let row of tableRows) {
        cellsRow = row.querySelectorAll("button")
        let index = row.rowIndex - 1
        for(let cell of cellsRow) {
            cell.addEventListener("click", function() {
                if (cell.value === "update") {                    
                    // Update this  row here
                    // display "form" with values already existing
                    
                    tablePersons.style.display = "none"
                    document.getElementById("titlePersonList").style.display = "none"
                    addButton.style.display = "none"
                    // document.getElementById("searchInput").style.display = "none"
                    
                    document.getElementById("titleUpdatePerson").style.display = "block"
                    
                    document.getElementById("formUpdatePerson").style.display = "block"
                    
                    document.getElementById("prenomUpdate").value = personnes[index].prenom
                    document.getElementById("nomUpdate").value = personnes[index].nom
                    document.getElementById("genreUpdate").value = personnes[index].genre
                    document.getElementById("dtNaissUpdate").value = personnes[index].dtNaiss
                    indexGlobal = index
                    
                } else {
                    personnes.splice(index, 1)
                    // then I'm gonna display table again
                     // Clear the body : and reinitialize the body with buildTable Function
                    tablePersonsBody.innerHTML = ""
                    buildTable();
                    updateDeleteButtonsListener()
                }
            })
        }    
    }
}

updateDeleteButtonsListener();

// Event listner on button (save) to update a  Person

let saveUpdateButtonPerson = document.getElementById("updatePerson")
saveUpdateButtonPerson.addEventListener("click", function() {
    
    // Parsing the date
    // personnes[indexGlobal].dtNaiss = document.getElementById("dtNaissUpdate").value

    dtNaissUpdate = new Date(Date.parse(document.getElementById("dtNaissUpdate").value))

    personnes[indexGlobal].prenom = document.getElementById("prenomUpdate").value
    personnes[indexGlobal].nom = document.getElementById("nomUpdate").value
    personnes[indexGlobal].genre = document.getElementById("genreUpdate").value
    personnes[indexGlobal].dtNaiss = dtNaissUpdate

    document.getElementById("titleUpdatePerson").style.display = "none"
    document.getElementById("formUpdatePerson").style.display = "none"
    
    tablePersons.style.display = ""
    document.getElementById("titlePersonList").style.display = ""
    addButton.style.display = ""
    // document.getElementById("searchInput").style.display = ""

    // Clear the body : and reinitialize the body with buildTable Function
    tablePersonsBody.innerHTML = ""
    buildTable()

    alert("Personne mise à jour avec succès")

    document.getElementById("prenomUpdate").value = ""
    document.getElementById("nomUpdate").value = ""
    document.getElementById("genreUpdate").value = ""
    document.getElementById("dtNaissUpdate").value = ""
    

    updateDeleteButtonsListener()
});
