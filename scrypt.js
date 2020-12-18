'use strict'

const today = new Date();
const dayNumber = today.getDay();
const elem = document.querySelector(`.day`);

const week = {
  '0': 'Sn',
  '1': 'Mn',
  '2': 'Tw',
  '3': 'Wn',
  '4': 'Th',
  '5': 'Fr',
  '6': 'St'
}

const dayHTML = `<div class="day__item">${week[dayNumber]}</div>`;

elem.innerHTML = dayHTML;