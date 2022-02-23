const body = document.body;

const navbar = document.createElement("nav");
navbar.classList.add("navbar");
body.appendChild(navbar);

const h1Navbar = document.createElement("h1");
h1Navbar.innerText = "Color Random Picker";
navbar.appendChild(h1Navbar);

const main = document.createElement("main");
body.appendChild(main);

const divTitle = document.createElement("div");
divTitle.classList.add("title");
main.appendChild(divTitle);

const h1DivTitle = document.createElement("h1");
h1DivTitle.innerHTML = "Background Color	";
divTitle.appendChild(h1DivTitle);

const spanDivTitle = document.createElement("h1");
spanDivTitle.innerText = "#ebf7ff";
divTitle.appendChild(spanDivTitle);

const div_buttonContainer = document.createElement("div");
div_buttonContainer.classList.add("button-container");
main.appendChild(div_buttonContainer);

const button_buttonContainer = document.createElement("button");
button_buttonContainer.innerText = "Click Me";
div_buttonContainer.appendChild(button_buttonContainer);

const sectionFooter = document.createElement("footer");
main.appendChild(sectionFooter);

const aFooter = document.createElement("a");
aFooter.setAttribute("href", "https://github.com/farshadjanmohammadi");
aFooter.setAttribute("target", "_blank");
aFooter.innerHTML = `Made with <i class="fas fa-heart"> </i>   by Farshad Janmohammadi`;
sectionFooter.appendChild(aFooter);

const buttonHanler = () => {
  const randomColorsArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const randomColor = randomColorsArray.map((item, index, array) => {
    const i = Math.floor(Math.random() * (15 - 0 + 1) + 0);
    return array[i];
  });
  const randomColorSplice = randomColor.splice(10, 15);

  const randomColorToString = randomColorSplice.toString();
  const randomColorToStringAll = randomColorToString.replace(/,/g, "");

  const backgroudColorBody = (body.style.backgroundColor = "#" + randomColorToStringAll);

  spanDivTitle.innerText = backgroudColorBody;
};

button_buttonContainer.addEventListener("click", buttonHanler);
