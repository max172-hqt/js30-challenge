'use strict'

function playSound(e) {
  const el = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!audio) return;

  el.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(
  key => key.addEventListener('transitionend', () => key.classList.remove('playing'))
);
