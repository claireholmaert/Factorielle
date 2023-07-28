//je sélectionne et stocke l'élément HTML qui a la classe "result" cela me permettra d'afficher le resultat
let result = document.querySelector('.result');

//fonction qui calcule recursivement la factorielle d'un nombre donné
function factorial(number) {
    if (number === 0) {
        return 1;
    }
  return number * factorial(number - 1);
}

//lorque le bouton est cliqué, la fonction anonyme s'éxécute
document.querySelector('button').addEventListener('click', function() {
    //récupération de la valeur saisie puis stocker dans une variable
    let num = parseInt(document.querySelector('#number').value);
    //appelle de la fonction factorial puis stocker dans une variable
    let factorialResult = factorial(num);
    //affichage du résultat dans la console
    console.log(factorialResult);
    //affichage du résultat à l'utilisateur
    result.innerHTML = `<p>Résultat : ${factorialResult}</p>`;
});