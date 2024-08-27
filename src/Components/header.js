export const createHeader = ()=> {
    const header = document.createElement('header');
    header.innerHTML = `
    <div class="title">
    <img class="logo" src="images/logo.png" alt="logo">
    <h1> Dreamland </h1>
    
    </div>
    `

    return header;
}