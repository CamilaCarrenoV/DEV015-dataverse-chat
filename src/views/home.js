import  data  from "../data/dataset.js";
import { card } from "../Components/Card.js";
import { createHeader } from "../components/header.js"; 

export const Home = () => {
  const div = document.createElement("div");

  const header = createHeader();
  div.appendChild(header);

  const subtitle = document.createElement ("h2")
  subtitle.innerHTML = "¡Bienvenidos fans de Disney y Pixar! Explora nuestro mágico contenido y has tu sueño realidad chatando con tu película favorita";
  div.appendChild(subtitle);

  
  const showCard = (data) => {
    const ulElement = document.createElement("ul");
    ulElement.classList.add("ulPelis");

    data.forEach((item) => {
      ulElement.appendChild(card(item));
    });
    return ulElement;
  };


  div.appendChild(showCard(data)); 
  return div;
};


