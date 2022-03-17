const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
  // convert raw response data into json / extract a body (ReadableStream)
  .then(response => response.json())
  .then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);  
  });
}

const searchBox = document.querySelector('input.search');
const suggestions = document.querySelector('.suggestions');

function displayMatches(matches, currentKeyword) {
  suggestions.innerHTML = '';
  if (!matches || !currentKeyword) {
    const li1 = document.createElement('li');
    li1.textContent = 'Filter for a city';
    const li2 = document.createElement('li');
    li2.textContent = 'or a state';
    suggestions.append(li1, li2);
  } else {
    matches.forEach(({ city, state, population } ) => {
      const result = `${city}, ${state}`;
      const startMatch = result.toLowerCase().indexOf(currentKeyword.toLowerCase());
      const endMatch = startMatch + currentKeyword.length;

      const li = document.createElement('li')
      // const div = document.createElement('div');
      // const highlight = document.createElement('span');
      // highlight.setAttribute('class', 'hl');
      // highlight.textContent = result.substring(startMatch, endMatch);
      // div.append(
      //   result.substring(0, startMatch),
      //   highlight,
      //   result.substring(endMatch, result.length),
      // );

      // const populationSpan = document.createElement('span');
      // populationSpan.textContent = population;
      // populationSpan.setAttribute('class', 'population');

      // li.append(div);
      // li.append(populationSpan);
      li.innerHTML = `
        <div>
          ${result.substring(0, startMatch)}
          <span class="hl">
            ${result.substring(startMatch, endMatch)}
          </span>
          ${result.substring(endMatch, result.length)}
        </div>
        <span class="population">
          ${population}
        </span>
      `

      suggestions.append(li);
    });
  }
};

searchBox.addEventListener('input', function (e) {
  const currentKeyword = e.target.value;
  const matches = findMatches(currentKeyword, cities);
  console.log(matches);
  displayMatches(matches, currentKeyword);
});

