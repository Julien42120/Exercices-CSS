// Définir la variable permettant de récupérer l'input de type color


/* A cette variable, appliquer la méthode (addEventListener) écoutant l'événement de type change et jouant la fonction permettant d'ajouter une propriété de style (SetProperty) au document :
- le nom de la propriété est la variable CSS --main-color 
- La valeur est définie par la valeur de l'input
*/
let root = document.documentElement
let boutton = document.querySelector('input')
boutton.addEventListener("change",function(event){
    console.log(event);
    root.style.setProperty('--main-color',event.target.value)

   
})
