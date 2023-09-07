let inputName = document.getElementById(`name`);
let inputPassword = document.getElementById(`password`);
let message = document.getElementById(`message`);

// traitement au click bouton connextion
let btnLogin = document.getElementById(`btnLogin`);
fetch(`fichier json/fichier.json`).then(value => value.json()).then(etudiants => {
	var tableau = JSON.stringify(etudiants);
	localStorage.setItem(`etudiants`, tableau);

});
btnLogin.addEventListener(`click`, function () {
	console.log(JSON.stringify(localStorage.getItem(`etudiants`)));
	// alert(`hello word`)
	let name= inputName.value;
	let password = inputPassword.value;
	 alert(`le nom d'utilisateur est: ` + name + `le mon de passe est:  ${password}`)
	// l'ajout du messsage d'erreur
	// message.style.display = 'block';
	
	// autentification
	var nom = document.getElementById(`name`).value;
	var MDP =document.getElementById(`password`).value;
	if (nom == ""|| MDP == "") {
		alert(`veuillez remplir le champ vide svp!`);
	
	} //else {
	var donner = localStorage.getItem(`etudiants`);
	console.log(donner);
		
		// }
	var etudiantsTrouve = false;
	// verifier les information

		// for (var i = 0; i< donner.non.length; i++){
			// if (donner[ i ].nom === Donner && donner[ i ].password === password) {
				//  etudiantsTrouve = true;
				//  break;
				// console.log(donner[ i ]);
			//  } else {
				//  console.log(`vide`);
			//  }
		//  }
		// if (etudiantsTrouve) {
			//  alert(`autentification reussi!`);
		// } else {
		//   alert(`nom d'utilisatur ou mot de passe incorrect`);
			// };
	

	// window.location.href = 'pages.html';
});




// annimation sur mon bouton conection
btnLogin.addEventListener(`mouseover`, () => {
	btnLogin.style.color = "red";
	btnLogin.style.backgroundColor = `#eee`;
});
btnLogin.addEventListener(`mouseout`, () => {
	btnLogin.style.backgroundColor = `yellow`;
	btnLogin.style.color = "black";
});