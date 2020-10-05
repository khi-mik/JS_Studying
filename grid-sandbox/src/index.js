import './style.css';
import { Grid } from './grid';
import { DemoButton } from './demo-button';

const gridContainer = document.querySelector('#grid-container');
const grid = new Grid(gridContainer, {
    data: [
        // TODO: Fill it.
    ]
});

const buttonsContainer = document.querySelector('#buttons-container');
for (let i = 0; i < 3; ++i) {
    const buttonContainer = document.createElement('div');
    buttonsContainer.appendChild(buttonContainer);
    new DemoButton(buttonContainer, {
        text: `Button ${i + 1}`,
        onClick: () => {
            alert(`Button ${i + 1} clicked.`);
        },
    });
}

// This is for console debug only.
window.__GRID = grid;
