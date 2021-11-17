let liste = document.getElementById('liste-commissions');


function createSpanElement(id, texte, parent ) {
    let element = document.createElement("li");
    element.id = id;
    element.innerHTML = texte;
    parent.append(element);
    return element;
}

createSpanElement("liste-commissions", "Des bonbons",liste);