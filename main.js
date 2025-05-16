// main.js
import growthbook from './script/featureFlags.js';

async function renderFeature() {
  await growthbook.init({ streaming: true });

  const showButton = growthbook.isOn('new-button');

  const container = document.getElementById('feature-container');
  if (showButton) {
    container.innerHTML = '<button>Botón activado</button>';
  } else {
    container.innerHTML = '<a href="#">Link alternativo</a>';
  }
}

renderFeature();
