import { Student, templateMarkup } from './scripts/student';

const student1 = new Student('Petya', 20, 'DNU', 'sefsefsef');
const student2 = new Student('Vasya', 20, 'DNU', 'sefsefsef');
const student3 = new Student('Kolya', 20, 'DNU', 'sefsefsef');

const arr = [10, 20, 30, 40, 50];
const markup = templateMarkup(arr);
console.log(markup);
