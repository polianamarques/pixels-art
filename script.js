const section = document.getElementsByTagName('section')[0];
const button = document.createElement('button');
button.innerText = 'Cores aleatórias';
button.id = 'button-random-color';
section.appendChild(button);

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setColor(){
 const classeColor = document.getElementsByClassName('color');
 for(index = 1; index < classeColor.length; index += 1){
 classeColor[index].style.backgroundColor = generateColor(); 
 }

}


button.addEventListener('click', setColor);
