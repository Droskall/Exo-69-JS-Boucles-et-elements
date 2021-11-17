let liste = document.getElementById('liste-commissions');


function createSpanElement(id, texte, parent ) {
    let element = document.createElement("li");
    element.id = id;
    element.innerHTML = texte;
    parent.append(element);
    return element;
}

createSpanElement("liste-commissions", "Des bonbons",liste);

/*
* Petite erreur de ma part le champ pour saisir le texte est dans l'autre fichier "app.js"
 */