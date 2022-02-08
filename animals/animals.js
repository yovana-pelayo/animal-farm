import { animals } from '../data.js';
import { findById } from '../utils.js';
// console.log(Window.location.search);
const params = new URLSearchParams(window.location.search);
const animal = findById(params.get('id'), animals);

//  console.log(findIdBy);

//update  DOM with animal info

const name = document.getElementById('name');
name.id = animal.type;

//shows what animals say and name
const says = document.getElementById('says');
name.textContent = animal.name;
says.textContent = animal.says;

const img = document.getElementById('image');
img.src = `../assets/${animal.type}.svg`;

// displayAnimals();