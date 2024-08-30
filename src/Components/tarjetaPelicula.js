export const cardMovie = (item) => {
  const divElement = document.createElement("div");
  divElement.classList.add("infoMovie");

  divElement.innerHTML = `
    <div class= movieContent>
    <h1 class="tittleMovie"> ${item.name} </h1>
    <div class=imagenText>
    <div class="imagenMovie">
        <img class="posterMovie" src="${item.imageUrl}" alt="${item.id}">
      </div>
      <div class="infoContent">
        <span class="textInfo">${item.shortDescription}</span> 
        <span class="textInfo"><b>Año de estreno:</b> ${item.facts.estreno}</span> 
         <span class="textInfo"><b>Género:</b> ${item.facts.generoPelicula}</span>
         <span class="textInfo"><b>Clasificación en IMDb:</b> ${item.facts.clasificPublico}</span> 
         <span class="textInfo"><b>Duración:</b> ${item.facts.tiempoDuracion}</span> 
         <span class="textInfo"><b>Resumen:</b> ${item.description}</span>
        <span class="textInfo"><b>¿Sabías qué?: </b> ${item.extraInfo.curiosidades}</span>
      </div>
      </div>
    </div>
    `;

  return divElement;
};
