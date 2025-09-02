'use strict';

function populationCalculator() {
  const COUNTRY_POPULATION_QS =
    '.container > .list > .list__item > .population';
  const TOTAL_POPULATION_QS = '.total-population';
  const AVG_POPULATION_QS = '.average-population';
  const elements = document.querySelectorAll(COUNTRY_POPULATION_QS);
  const totalPopulation = Array.from(elements).reduce(
    (accumulator, element) =>
      accumulator + Number.parseInt(element.textContent.replaceAll(',', '')),
    0,
  );
  const totalPopulationElm = document.querySelector(TOTAL_POPULATION_QS);

  if (totalPopulationElm) {
    totalPopulationElm.innerHTML = totalPopulation.toLocaleString('en-US');
  }

  const averagePopulationElm = document.querySelector(AVG_POPULATION_QS);

  if (averagePopulationElm) {
    averagePopulationElm.innerHTML = Math.round(
      totalPopulation / elements.length,
    ).toLocaleString('en-US');
  }
}

populationCalculator();
