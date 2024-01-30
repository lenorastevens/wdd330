const pokeURL = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(pokeURL) {
  const response = await fetch(pokeURL);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
    results = data;
    console.log('first: ', results);
    results.results.forEach((pokemon) => {
      const div = document.createElement('div');

      let name = document.createElement('h2');
      name.textContent = pokemon.name;
      name.setAttribute('id', pokemon.name);
      div.appendChild(name);


      let website = document.createElement('a');
      website.setAttribute('class', 'direct');
      website.setAttribute('href', pokemon.url);
      website.setAttribute('target', "_blank");
      website.textContent = pokemon.url;
      div.appendChild(website);

      document.querySelector('main').appendChild(div);
        // assumes you have a <main> element in your HTML document
    });
}
getPokemon(pokeURL);
console.log("second: ", results);