let radioGroup2019 = document.getElementsByName("radio-btn2019");

const display2019 = document.getElementById("display2019");
const N = display2019.children.length;

function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };

let x0 = null;

function lock(e) { x0 = unify(e).clientX };

let i = 0;

function radio2019Selected() {
  for (i = 0; i < 11; i++) {
    if(radioGroup2019[i].checked) {
      break;
    }
  }
}

function move(e) {
  if(x0 || x0 === 0) {
    let dx = unify(e).clientX - x0, s = Math.sign(dx);
    radio2019Selected();

    if((i > 0 || s < 0) && (i < N - 1 || s > 0)){
        i-=s;
        radioGroup2019[i].checked = true;
    }

    x0 = null
  }
};

display2019.addEventListener('mousedown', lock, false);
display2019.addEventListener('touchstart', lock, false);

display2019.addEventListener('mouseup', move, false);
display2019.addEventListener('touchend', move, false);
