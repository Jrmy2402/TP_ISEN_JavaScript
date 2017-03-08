//noprotect
var saisie = function () {
	var tab = [];
	while(x !== null && y !== null) {
		var x = prompt('Entrez un nom :');
        if (x !== null){
          var y = prompt('"Enter un numéro :"');
          if( x!== null && y !== null) {
            var myObjet = {
              nom : x,
              numero : y,
              display: function (){
                return "Prénom :" + this.nom + " Numéro :" + this.numero;
              }
            };
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