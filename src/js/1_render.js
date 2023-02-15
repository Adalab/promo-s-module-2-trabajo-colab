'use strict';

const cardsList = document.querySelector('.js__cardsList');

function renderList() {
  let html = '';

  for (const eachObject of data) {
    html += `
    <li class="card">
      <h3 class="card__title">${eachObject.name}</h3>
      <img src="${eachObject.image}" alt="Foto de ${eachObject.name}" class="card__img" />
      <p class="card__description">${eachObject.description}</p>
      <button class="card__btn">Me gusta</button>
    </li>
    `;
  }

  cardsList.innerHTML = html;
}

renderList();
