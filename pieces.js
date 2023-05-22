const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {

    const article = pieces[i];

    // Récupération de l'élément du DOM qui acueillera les fiches
    const sectionFiches = document.querySelector(".fiches");

    //Création d'une balise dédiée à la pièce automobile
    const pieceElement = document.createElement("article");

    //Création d'une balise dédiée à l'image de chaque article
    const imageElement = document.createElement("img");
    //On accède à l'indice i de la liste pieces pour configurer la source de l'image
    imageElement.src = article.image;

    //Création d'une balise dédiée au nom de le l'objet
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;

    //Création d'une balise dédiée au prix de l'objet
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

    //Création d'une balise dédiée à la catégorie de l'objet
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

    //création d'une balise dédiée à la description de l'objet
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment";

    //Création d'une balise dédiée au stock de l'objet
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

    //On rattache la balise article à la section Fiches
    sectionFiches.appendChild(pieceElement);

    //On rattache la balise nomElement à la section Fiches
    pieceElement.appendChild(nomElement);

    //On rattache la balise prixElement à la section Fiches
    pieceElement.appendChild(prixElement);

    //On rattache la balise categorieElement à la section Fiches
    pieceElement.appendChild(categorieElement);

    //On rattache la balise stockElement à la section Fiches
    pieceElement.appendChild(stockElement);

    //On rattache la balise imageElement à la section pieceElement
    pieceElement.appendChild(imageElement);

    //On rattache la balise descriptionElement à la section pieceElement
    sectionFiches.appendChild(descriptionElement);
}

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function() {
    pieces.sort(function(a,b){
        return a.prix - b.prix;
    });
    console.log(pieces);
});