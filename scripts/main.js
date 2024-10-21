import { series } from './data.js';

var seriesTbody = document.getElementById('series');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var seasonAverageElm = document.getElementById("season-average");


renderSeriesInTable(series);
seasonAverageElm.innerHTML = `${getAverageSeason(series)}`;

function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td class="series-name">${serie.name}</td> <!-- Clase aplicada aquí -->
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        
        trElement.addEventListener('click', function () { 
            showDetails(serie);
        });
        seriesTbody.appendChild(trElement);
    });
}


function showDetails(serie) {
    var detailsSection = document.getElementById('details-section');
    if (detailsSection) {
        detailsSection.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${serie.picture}" alt="${serie.name}">
                <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                    <a href="${serie.link}" target="_blank">${serie.link}</a> <!-- Enlace de texto -->
                </div>
            </div>
        `;
    }
}

function getAverageSeason(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { 
        totalSeasons += serie.seasons;
    });
    return totalSeasons / series.length;
}

