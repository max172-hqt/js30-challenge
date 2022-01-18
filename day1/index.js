'use strict'

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const el = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!audio) return;

  el.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

const keys = document.querySelectorAll('.key');
keys.forEach(
  key => key.addEventListener('transitionend', removeTransition)
);
window.addEventListener('keydown', playSound);

