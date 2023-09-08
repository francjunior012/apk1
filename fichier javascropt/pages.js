
// const nom = document.getElementById('nom');
// const prenom = document.getElementById('Prenom');
// const Va_Con = document.getElementById('validerContinuer');
// 
// 
// ouverture et fermeture du pop d'inscrition
ajouter.addEventListener("click", function () {
 ouvre.style.display = "block";
 });
   annuler.addEventListener("click", function () {
 avertissement.style.display = "block";
   });
  supprimer.addEventListener("click", function () {
	  avertissement.style.display = "none";
	  ouvre.style.display = "none";
   });
   non.addEventListener("click", function () {
	 avertissement.style.display = "none";
	 ouvre.style.display = "block";
   });
off.addEventListener("click", function () {
	ouvre.style.display = "none";  
   })


fetch("fichier json/fichier.json")
  .then(value => value.json())
  .then(etudiants => {
    var tableau = JSON.stringify(etudiants);
    localStorage.setItem("etudiants", tableau);
});

// const validerContinuer = document.querySelector('#validerContinuer');
// Ajouter un événement de clic au bouton de validation
let myarray1 = JSON.parse(localStorage.getItem("etudiants"));
validerContinuer.addEventListener('click', () => {
  // Créer un objet étudiant
  let etudiant = {};
  
  // Récupérer les valeurs des champs nom, prénom, niveau, spécialité et département
  let nom = document.getElementById('nom').value;
  let prenom = document.getElementById('Prenom').value;
  let niveau = document.getElementById('niveau').value;
  let specialite = document.getElementById('Specialiter').value;
  let departement = document.getElementById('Departement').value;
  
  // Vérifier que les champs nom et prénom ne sont pas vides
  if (nom === "" || prenom === "") {
    alert("Un champ est vide, remplissez tous les champs svp!");
    return;
  }
  
  // Ajouter les valeurs des champs dans l'objet étudiant
  etudiant['nom'] = nom;
  etudiant['prenom'] = prenom;
  etudiant['niveau'] = niveau;
  etudiant['specialite'] = specialite;
  etudiant['departement'] = departement;
  
  // Générer un identifiant unique pour l'étudiant
  let id = myarray1[myarray1.length-1]['id'] + 1;
  
  // Ajouter l'identifiant à l'objet étudiant
  etudiant['id'] = id;
  
  // Ajouter l'objet étudiant au début du tableau d'étudiants existant
  myarray1.unshift(etudiant);
});