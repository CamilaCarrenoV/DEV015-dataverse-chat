export const getApiKey = () => {
    let apiKey = localStorage.getItem("apiKey");
    return apiKey;
    // Implementa el código para obtener la API KEY desde Local Storage
 };
 
 export const setApiKey = (key) => {
 localStorage.setItem("apiKey", key);
   // Implementa el código para guardar la API KEY en Local Storage
 };