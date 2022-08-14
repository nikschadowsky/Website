var containerHeight = window.innerHeight * .85;

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

  document.getElementById('last-container').style.paddingBottom = '0';


});
