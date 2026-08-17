import './styles/main.css';
import './styles/print.css';
import { App } from './App';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = App();
