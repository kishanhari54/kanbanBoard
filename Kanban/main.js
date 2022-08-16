import {initializer} from './kanbanInit.js';
import ('https://kit.fontawesome.com/5729b6e56d.js');
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="./styles.css"}>`;
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="./kanbanInit.css"}>`;

let board = new initializer();
document.body.appendChild(board.createBoard());

