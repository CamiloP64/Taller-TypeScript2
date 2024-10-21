import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const seassonAverageElm: HTMLElement = document.getElementById("seasson-average")!;

renderSeriesInTable(series);

seassonAverageElm.innerHTML = `${getAverageSeasson(series)}`

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(serie => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${serie.id}</td>
                              <td>${serie.name}</td>
                              <td>${serie.channel}</td>
                              <td>${serie.seasons}</td>`;
      trElement.addEventListener('click', () => showDetails(serie));
      seriesTbody.appendChild(trElement);
    });
}  

function showDetails(serie: Serie) {
    var detailsSection = document.getElementById('details-section');
    if (detailsSection) {
        detailsSection.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${serie.picture}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                    <a href="${serie.link}" </a>
                </div>
            </div>
        `;
        console.log(detailsSection.innerHTML); // Verifica el HTML generado
    }
}


function getAverageSeasson(series: Serie[]): number {
    let averageSeasson: number = 0;
    series.forEach((serie) => averageSeasson = averageSeasson + serie.seasons);
    return averageSeasson / series.length;
  }
