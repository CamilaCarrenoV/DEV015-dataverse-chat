export const createHeader = () => {
  const header = document.createElement("header");
  header.innerHTML = `
    <div class="title">
    <img class="logo" src="images/logo.png" alt="logo">
    <h1> Dreamland </h1>
    <div class="loginApi">
        <input id="inputApiKey" type="password" class="addApi" placeholder="igresa tu ApiKey">
        <button id="buttonApiKey" class="login-button">Ingresar</button>
    </div>
    </div>
    `;

  return header;
};
