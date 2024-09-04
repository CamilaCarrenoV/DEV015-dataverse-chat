import { communicateWithOpenAI } from "../lib/openAIApi.js";

const addMessageToChat = () => {
  const message = document.createElement("p");
  message.classList.add("mensajeUser");
  const chatMessage = document.getElementById("chatInput");
  message.innerHTML = chatMessage.value;
  const chat = document.getElementById("messages"); 
  chat.appendChild(message);
}

const sendMessageToIA = async (item) => {
  const chatMessage = document.getElementById("chatInput").value;
  const respuesta = await communicateWithOpenAI(chatMessage, item.name);
  const respuestaMessage = document.createElement("p");
  respuestaMessage.classList.add("mensajeIA");
  respuestaMessage.innerHTML = respuesta.choices[0].message.content;
  const chatRespuesta = document.getElementById("messages");
  chatRespuesta.appendChild(respuestaMessage);

}

export const cardMovie = (item) => {
  const divElement = document.createElement("div");
  divElement.classList.add("infoMovie");

  divElement.innerHTML = `
  <div class="movieAndChat">
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

    <div id="chatContainer">
    <h3>¡chatea con ${item.name}!</h3>
      <div id="messages"></div>
      
      <div id="input-container">
       <textarea id="chatInput" placeholder="Escribe un mensaje..."></textarea>
       <button id="sendButton">Enviar</button>
     </div>
     </div>
    </div>;
    `
  const sendButton = divElement.querySelector("#sendButton");
  sendButton.addEventListener("click", () => {
    addMessageToChat();
    sendMessageToIA(item);
  });
  

  return divElement;
};
