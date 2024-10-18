
// Iniciamos la función al cargar la página

window.onload = () => {
  document.querySelector("#gen-dom").innerHTML = domGenerator();
};

// Iniciamos la función para aleatorizar los arrays

const domGenerator = () => {

let web = ["www."]
let pronoum = ['uno', 'uno1', 'uno2', 'uno3', 'uno4'];
let adj = ['patata', 'patata1', 'patata2', 'patata3', 'patata4'];
let noun = ['rojo', 'rojo1', 'rojo2', 'rojo3', 'rojo4',];
let domain = ['.com', '.es', '.io', '.org', '.dev']


let pronoumNumb = Math.floor(Math.random() * 5);
let adjNumb = Math.floor(Math.random() * 5);
let nounNumb = Math.floor(Math.random() * 5);
let domainNumb = Math.floor(Math.random() * 5);
  

  return (web + pronoum[pronoumNumb] + adj[adjNumb] + noun[nounNumb] + domain[domainNumb]);
};