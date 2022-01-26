const panels = document.querySelectorAll('.panel');

function handlePanelClick() {
  panels.forEach(panel => panel.classList.remove('open'));
  this.classList.add('open');
}

function handleTransitionEnd(e) {
  if (e.propertyName.includes('flex')) {
    panels.forEach(panel => panel.classList.remove('open-active'));
    this.classList.add('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', handlePanelClick));
panels.forEach(panel => panel.addEventListener('transitionend', handleTransitionEnd));
