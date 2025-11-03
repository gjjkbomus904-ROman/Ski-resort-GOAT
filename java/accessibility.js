const body = document.body;
const accBtn = document.getElementById('accessibility-btn');
let fontSize = 16;
let isAccessibility = false;
let controlsDiv;

accBtn.addEventListener('click', () => {
  isAccessibility = !isAccessibility;
  body.classList.toggle('accessibility-mode', isAccessibility);

  if (isAccessibility) {
    showAccessibilityControls();
  } else {
    hideAccessibilityControls();
    body.style.fontSize = '';
  }
});

function showAccessibilityControls() {
  controlsDiv = document.createElement('div');
  controlsDiv.className = 'accessibility-controls';
  controlsDiv.innerHTML = `
    <span>Text size</span>
    <div>
      <button id="font-inc">A+</button>
      <button id="font-dec">A-</button>
    </div>
  `;
  document.body.appendChild(controlsDiv);

  document.getElementById('font-inc').addEventListener('click', () => {
    fontSize += 2;
    body.style.fontSize = fontSize + 'px';
  });

  document.getElementById('font-dec').addEventListener('click', () => {
    if (fontSize > 10) fontSize -= 2;
    body.style.fontSize = fontSize + 'px';
  });
}

function hideAccessibilityControls() {
  if (controlsDiv) {
    controlsDiv.remove();
    controlsDiv = null;
  }
}