/* eslint-disable no-restricted-syntax */
const section = document.getElementsByTagName('section')[0];
const button = document.createElement('button');
button.innerText = 'Cores aleatórias';
button.id = 'button-random-color';
section.appendChild(button);

const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
});

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setColor() {
  const classeColor = document.getElementsByClassName('color');
  for (index = 1; index < classeColor.length; index += 1) {
    classeColor[index].style.backgroundColor = generateColor();
  }
}
button.addEventListener('click', setColor);

const pixelBoard = document.getElementById('pixel-board');
for (let index = 0; index < 25; index += 1) {
  const individualPixel = document.createElement('div');
  pixelBoard.appendChild(individualPixel).className = 'pixel';
}

const color = document.getElementsByClassName('color');

function addAndRmvSelector(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}
for (const colorsOf of color) {
  colorsOf.addEventListener('click', addAndRmvSelector);
}
// trazendo as cores

const black = document.getElementById('black');
const darkPurple = document.getElementById('dark-purple');
const lilac = document.getElementById('lilac');
const lightPurple = document.getElementById('light-purple');

black.style.backgroundColor = 'black';
lightPurple.style.backgroundColor = '#9d4edd';
lilac.style.backgroundColor = '#e0aaff';
darkPurple.style.backgroundColor = '#3c096c';

function paintingPixel(evento) {
  const selected = document.querySelector('.selected');
  evento.target.style.backgroundColor = selected.style.backgroundColor;
}

const pixel = document.querySelectorAll('.pixel');

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', paintingPixel);
}
