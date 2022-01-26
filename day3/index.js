const root = document.querySelector(':root');
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(e) {
  const unit = e.target.dataset.sizing ?? "";
  root.style.setProperty(`--${e.target.name}`, `${e.target.value}${unit}`);
}

inputs.forEach(function(input) {
  input.addEventListener('change', handleUpdate);    
  input.addEventListener('input', handleUpdate);    
});
