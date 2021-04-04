const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

//--изменение цвета body рандомным цветом из массива---

const changeBodyColor = function () {

  if (startBtn.classList.contains("inabled")) {
    return
  }
    
  const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomNumber = randomIntegerFromInterval(0, colors.length - 1);
const randomColor = colors[randomNumber];
const bodyRef = document.querySelector('body');

  bodyRef.style.backgroundColor = randomColor;
 }

//--привязка изменения цвета к кнопкам--
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', () => {
  timerId = setInterval(changeBodyColor, 1000);
  console.log('active');
  startBtn.setAttribute("disabled", true)
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  console.log('pushed');
  startBtn.removeAttribute("disabled")
})


