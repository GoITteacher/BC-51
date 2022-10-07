/* 
Создать класс "Матрица". Класс должен иметь следующие переменные:

двумерный массив вещественных чисел;
количество строк и столбцов в матрице.

Класс должен иметь следующие методы:
сложение с другой матрицей;
умножение на число;
вывод на печать; 
умножение матриц - по желанию.
*/

class Matrix {
  array;
  countCol;
  countRow;

  constructor(array) {
    this.array = array;
    this.countRow = array.length;
    if (this.countRow > 0) this.countCol = array[0].length;
    else this.countCol = 0;
  }

  sum(array1) {
    /* for (let i = 0; i < this.countRow; i++) {
      for (let j = 0; j < this.countCol; j++) {
        this.array[i][j] += array1[i][j];
      }
    } */

    array1.forEach((element, y) => {
      element.forEach((element1, x) => {
        this.array[y][x] += element1;
      });
    });
  }

  showMatrix() {
    this.array.forEach(elem => {
      let result = '';
      //console.log(...elem);
      //console.log(result+elem);
      elem.forEach(value => {
        result += value + ' ';
      });
      console.log(result);
    });
  }

  multiply(num) {
    this.array.forEach((elem, y) => {
      elem.forEach((elem1, x) => {
        this.array[y][x] *= num;
      });
    });
  }

  add(num) {
    this.array.forEach((elem, y) => {
      elem.forEach((elem1, x) => {
        this.array[y][x] += num;
      });
    });
  }

  diagonal(num) {
    this.array.forEach((elem, y) => {
      elem.forEach((elem1, x) => {
        if (x == y) this.array[y][elem.length - 1 - y] = num;
      });
    });
  }
}

let arr = [
  [0, 0, 0, 0, 0, 0], // y = 0, x = length - 1 - y
  [1, 0, 0, 0, 0, 0], // y = 1, x = length - 1 - y
  [2, 0, 0, 0, 0, 0], // y = 2, x = length - 1 - y
  [3, 0, 0, 0, 0, 0], // y = 3, x = length - 1 - y
  [4, 0, 0, 0, 0, 0], // y = 4, x = length - 1 - y
  [5, 0, 0, 0, 0, 0], // y = 5, x = length - 1 - y
];

let matrix = new Matrix(arr);

matrix.multiply(0);
matrix.diagonal(9);
matrix.showMatrix();

/* 

    [
       [1,2,4,5,6,7,8]
       [0,0,3,0,0,0,0]
       [0,0,0,0,0,0,0]
       [0,0,0,0,0,0,0]
       [0,0,0,0,0,0,0]
       [0,0,0,0,0,0,0] 
    ]


    [
       [1,2,4,5,6,7,8]
       [0,0,3,0,0,0,0]
       [0,0,0,0,0,0,0]
       [0,0,0,0,0,0,0]
       [0,0,0,0,0,0,0]
       [0,0,0,0,0,0,0] 
    ]

*/
