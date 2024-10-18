function endangeredSpecies(continent) {
    liElement = document.querySelector(`div ul li[data-continent="${continent}"]`)
    return liElement.textContent
  }
  
  // Example case
  document.body.innerHTML =
  `<div>
      <ul>
          <li data-continent="North America">California condor</li>
          <li data-continent="Europe">Cave bear</li>
      </ul>
  </div>`;
  
  console.log(endangeredSpecies("North America")); // should print 'California condor'