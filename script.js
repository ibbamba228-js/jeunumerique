const display = document.getElementById('display');
const grid = document.getElementById('grid');

let lastActive = null;

for (let i = 0; i <= 10; i++) {
  const btn = document.createElement('button');
  btn.className = 'num-btn';
  btn.textContent = i;
  btn.addEventListener('click', () => showNumber(i, btn));
  grid.appendChild(btn);
}

function showNumber(num, btn) {
  if (lastActive) lastActive.classList.remove('active');
  btn.classList.add('active');
  lastActive = btn;

  display.innerHTML = num;
  display.classList.remove('pop');
  void display.offsetWidth;
  display.classList.add('pop');
}