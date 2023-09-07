// declaration des variables
let inputName = document.getElementById("name");
let inputPassword = document.getElementById("password");
let message = document.getElementById("message");
let btnLogin = document.getElementById("btnLogin");
let btnPassword = document.getElementById("btnPassword");
fetch("fichier json/fichier.json").then(value => value.json()).then(etudiants => {
  var tableau = JSON.stringify(etudiants);
  localStorage.setItem("etudiants", tableau);
});
// uliser le click au bouton
fermer.addEventListener("click", function () {
	form.style.display = "none";
})
btnPassword.addEventListener("click", function () {
	form.style.display = "block";
});
btnLogin.addEventListener("click", function() {
  var nom = inputName.value;
	var MDP = inputPassword.value;
	// verifier si un champs est vide
	if (nom === "" || MDP === "") {
		alert(`veillez remplir les champs vides `);
	} else {
		// declaration de la variable locale 
    var donner = JSON.parse(localStorage.getItem("etudiants"));
// verifier si le nom ou le prenom se retouve dans le json
    var etudiantTrouve = false;
    for (var i = 0; i < donner.length; i++) {
      if (donner[i].nom === nom && donner[i].password === MDP) {
        etudiantTrouve = true;
        break;
      }
    }
// l'etudiants trouver oui ou nom
    if (etudiantTrouve) {
		window.location.href = 'pages.html ';
		
    } else {
	//   message.style.display = "block";
    }
  }
});
//  animation sur les deux boutons
btnLogin.addEventListener("mouseover", () => {
  btnLogin.style.color = "red";
  btnLogin.style.backgroundColor = "#eee";
});

btnLogin.addEventListener("mouseout", () => {
  btnLogin.style.backgroundColor = "yellow";
  btnLogin.style.color = "black";
});
// deuxiem
btnPassword.addEventListener("mouseover", () => {
	btnPassword.style.backgroundColor = "red";
	btnPassword.style.color = "pink";
});
btnPassword.addEventListener("mouseout", () => {
	btnPassword.style.backgroundColor = "aqua";
	btnPassword.style.color = "black";
	btnPassword.style.cursor="alias";
})
// btnPassword.addEventListener("click", (){
// form.style.display = "block";
// })
// message.style.display = "block";