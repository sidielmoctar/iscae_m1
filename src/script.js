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
  });
}

buildTable();
