//noprotect

var saisie = function () {
	var tab = [];
	while(x !== null && y !== null) {
		var x = prompt('Entrez un nom :');
        if (x !== null){
          var y = prompt('"Enter un numéro :"');
          if(x !== null && y !== null) {
            var Personne = new Map();
            Personne.set("Numéro", y);
            Personne.set("Nom", x);
            tab.push(Personne);
          }
        }
       
 	}
    return tab;
}
var affiche = function (tab) {
    console.log(tab);
    for (let elt of tab){
      console.log(elt.get("Nom") + " :" + elt.get("Numéro"));
    }
}
affiche (saisie());