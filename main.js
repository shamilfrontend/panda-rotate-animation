// elements
const container = document.querySelector('#container');
const panda = document.querySelector('#panda');

// mouse
const mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,

  updatePosition(event) {
    this.x = event.clientX - this._x;
    this.y = event.clientY - this._y + -1
  },

  setOrigin(event) {
    this._x = event.offsetLeft + Math.floor(event.offsetWidth / 2);
    this._y = event.offsetTop + Math.floor(event.offsetHeight / 2);
  }
};

mouse.setOrigin(container);

let counter = 0;
let updateRate = 10;

const isTimeToUpdate = () => counter++ % updateRate === 0;

const updateTransformStyle = (x, y) => {
  panda.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
};

const update = event => {
  mouse.updatePosition(event);
  const x = (mouse.x / panda.offsetWidth / 2).toFixed(2);
  const y = (mouse.y / panda.offsetHeight / 2).toFixed(2);

  updateTransformStyle(x, y);
};

// event handlers
const onMouseEnterHandler = event => {
  update(event);
};

const onMouseLeaveHandler = () => {
  panda.style = '';
};

const onMouseMoveHandler = event => {
  if (isTimeToUpdate()) {
    update(event);
  }
};

container.addEventListener('mouseenter', onMouseEnterHandler);
container.addEventListener('mouseleave', onMouseLeaveHandler);
container.addEventListener('mousemove', onMouseMoveHandler);
