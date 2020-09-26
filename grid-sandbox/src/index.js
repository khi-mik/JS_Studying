import './style.css';
import { Grid } from './grid';

const container = document.querySelector('#grid-container');
const grid = new Grid(container, {
    data: [
        // TODO: Fill it.
    ]
});

// This is for console debug only.
window.__GRID = grid;
