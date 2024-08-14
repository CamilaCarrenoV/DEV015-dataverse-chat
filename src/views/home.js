import { data } from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';

export const Home = () => {
    const el = document.createElement("h1");
    el.innerHTML = "Dreamland";

  const renderItems = (data) => {
    const ulElement = document.createElement('ul');
    data.forEach(item =>
      ulElement.appendChild(Card(item))
    );
  return ulElement;
  };
    
   return el;
 }



 export default Home;