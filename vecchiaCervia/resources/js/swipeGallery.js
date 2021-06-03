//jscs:disable validateLineBreaks
//jshint esversion: 6
const w = window.innerWidth;

function unify(e) { return e.changedTouches ? e.changedTouches[0] : e; }

let x0 = null;
function lock(e) { x0 = unify(e).clientX; }

function radioSelected(radioGroup) {
  let N = radioGroup.length;
  for (let i = 0; i < N; i++) {
    if (radioGroup[i].checked) {
      return i;
    }
  }
}

function move(e) {
  if (x0 || x0 === 0) {
    let dx = unify(e).clientX - x0;
    let s = Math.sign(dx);
    let display = e.currentTarget;
    let year = display.className.slice(display.className.indexOf('20'));
    let radioGroup = document.getElementsByName('radio-btn' + year);
    let N = radioGroup.length;
    let i = radioSelected(radioGroup);
    if ((i > 0 || s < 0) && (i < N - 1 || s > 0) && ((dx * s / w) > 0.15)) {
      i -= s;
      radioGroup[i].checked = true;
    }

    x0 = null;
  }
}

const display2021 = document.getElementsByClassName('display y2021')[0];
const display2020 = document.getElementsByClassName('display y2020')[0];
const display2019 = document.getElementsByClassName('display y2019')[0];
const display2018 = document.getElementsByClassName('display y2018')[0];

display2021.addEventListener('mousedown', lock, false);
display2021.addEventListener('touchstart', lock, false);

display2021.addEventListener('mouseup', move, false);
display2021.addEventListener('touchend', move, false);

display2020.addEventListener('mousedown', lock, false);
display2020.addEventListener('touchstart', lock, false);

display2020.addEventListener('mouseup', move, false);
display2020.addEventListener('touchend', move, false);

display2019.addEventListener('mousedown', lock, false);
display2019.addEventListener('touchstart', lock, false);

display2019.addEventListener('mouseup', move, false);
display2019.addEventListener('touchend', move, false);

display2018.addEventListener('mousedown', lock, false);
display2018.addEventListener('touchstart', lock, false);

display2018.addEventListener('mouseup', move, false);
display2018.addEventListener('touchend', move, false);
