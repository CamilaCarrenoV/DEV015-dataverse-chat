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
        model: "gpt-4o", 
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

    const json = await respuesta.json()
    return(json);
  } catch (error) {
    console.error('Error al comunicarse con OpenAI:', error); // Manejo de errores
  }
};

