import './index.css';

export class DemoButton {
    constructor(container, settings) {
        const root = document.createElement('div');
        const label = document.createElement('span');
        const button = document.createElement('button');
        root.classList.add('button-root');
        label.classList.add('button-label');
        button.classList.add('button-icon');
        label.textContent = settings.text;
        button.addEventListener('click', settings.onClick);
        root.appendChild(label);
        root.appendChild(button);
        container.appendChild(root);
    }
}
