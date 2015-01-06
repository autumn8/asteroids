window.addEventListener('keydown', onKeyEvent);
window.addEventListener('keyup', onKeyEvent);

export class KeyListener {}

let keys = new Map([[37, 'LEFT'],[38,'UP'],[39,'RIGHT']]);

function onKeyEvent(e){
  for (let [num, value] of keys) {
    if (e.keyCode === num) KeyListener[value] = (e.type === 'keydown');
  }
}
