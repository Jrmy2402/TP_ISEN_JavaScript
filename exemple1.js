//noprotect
function Personne (nom, numero) {
  this.nom = nom;
  this.numero = numero;
  this.display = function (){
    return "Prénom :" + this.nom + " Numéro :" + this.numero;
  }
}
var saisie = function () {
	var tab = [];
	while(x !== null && y !== null) {
		var x = prompt('Entrez un nom :');
        if (x !== null){
          var y = prompt('"Enter several words and then press "Cancel"');
          if(x !== null && y !== null) {
            var myObjet = new Personne (x, y);
            tab.push(myObjet);
          }
        }
       
 	}
    return tab;
}
var affiche = function (tab) {
    console.log(tab);
    /*tab.sort();*/
    for (let elt of tab){
      console.log(elt.display());
    }
    /*tab.forEach(function (elt){
      console.log(elt);
    });
    for (var i = 0; i<tab.length; i++) {
      console.log(tab[i]);
    }
	console.log('tab2 :' + tab);*/
}
affiche (saisie());