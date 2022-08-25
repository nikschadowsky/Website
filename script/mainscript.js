var containerHeight = window.innerHeight;

var currentContainer = 0;

var color = [
  '#ff9233',
  '#7100bd',
  '#5ca3ff'
]


window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;

  currentContainer = parseInt(scroll / containerHeight);

  document.documentElement.style.setProperty('--primaryColor', color[currentContainer]);



  delay(1000).then(() =>
  document.getElementsByClassName('container')[currentContainer]
  .scrollIntoView());
});

var outlineToggled = true;
toggleOutline();

function toggleOutline() {
  outlineToggled ^= true;

  for (const element of document.getElementsByTagName('*')) {

    if (outlineToggled) {
      element.style.outline = '1px solid red';
    } else {
      element.style.outline = '0px solid red';
    }
  }
}
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
function getElementX(element){
  let rect = element.getBoundingClientRect();
  return rect.top + window.scrollY;
}
