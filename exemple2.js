//noprotect
class Personne {
  constructor (nom, numero) {
      this.nom = nom;
      this.numero = numero;
  }
  display () {
    return "Prénom :" + this.nom + " Numéro :" + this.numero;
  }
}
var saisie = function () {
	var tab = [];
	while(x !== null && y !== null) {
		var x = prompt('Entrez un nom :');
        if (x !== null){
          var y = prompt('"Enter un numéro :"');
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
    for (let elt of tab){
      console.log(elt.display());
    }
}
affiche (saisie());