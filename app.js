const min = 1;
const max = 122;
const mainSrc = 'https://randomfox.ca/images/';

const loadRandomImgs = () => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const createtImgContainer = () => {
  const container = document.createElement('picture');
  const img = document.createElement('img');
  container.className = 'p-4';
  img.dataset.src = `${mainSrc}${loadRandomImgs()}.jpg`;
  img.className= 'mx-auto w-96 rounded';
  container.appendChild(img);
  return container;
}

const addNewImg = () => {
  const addImg = createtImgContainer();
  mountNode.appendChild(addImg);
  registerImage(addImg);
}

const newImg = createtImgContainer();
const mountNode = document.getElementById('images');
const addImgButton = document.querySelector('button');
addImgButton.addEventListener('click', addNewImg);
mountNode.appendChild(newImg);

const isIntersecting = entry => entry.isIntersecting;

const loadImg = entry => {
  const container = entry.target;
  const img = container.firstChild;
  const url = img.dataset.src;
  img.src = url;
  observer.unobserve(container);
  return container;
}

const observer = new IntersectionObserver(entries => {
  const filterByIntersection = entries.filter(isIntersecting);
  const eventByImgViewd = filterByIntersection.forEach(loadImg);
  return eventByImgViewd;
});

const registerImage = img => observer.observe(img);
