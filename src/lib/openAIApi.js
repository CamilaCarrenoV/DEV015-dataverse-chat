import { getApiKey } from "../lib/apiKey.js";

export const communicateWithOpenAI = async (message, movieName) => {
  const apiKey = getApiKey();
  try {
    const respuesta = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST', // Método POST para enviar datos
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido JSON
        'Authorization': `Bearer ${apiKey}` // Autorización con API key
      },
      body: JSON.stringify({
        model: "gpt-4o", // Modelo que deseas usar, puede ser text-davinci-003 o GPT-4, etc.
        messages: [
          {
            role: "system",
            content: "Eres la película " + movieName
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 100 // Número máximo de tokens en la respuesta
      })
    });

    // if (!respuesta.ok) { // Verifica si la respuesta es exitosa
    //   throw new Error(`Error en la solicitud: ${respuesta.status}`);
    // }

    // const datos = await respuesta.json(); // Convierte la respuesta en JSON
    // console.log(datos.choices[0].text); // Muestra la respuesta generada por OpenAI 
    const json = await respuesta.json()
    return(json);
  } catch (error) {
    console.error('Error al comunicarse con OpenAI:', error); // Manejo de errores
  }
};

