'use strict';
/* Реализовать класс RangeValidator. Обьекты, созданные им должны обладать следующими свойcтвами:
from(число) 5
to(число) 50
Реализовать геттеры и сеттеры для обоих свойств.
Реализовать getter range, который будет возвращать массив, состоящий из границ диапазона from и to.
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает это же число, если оно входит в диапазон. И кинет ошибку, если не входит.
Bonus tasks:
Создать проверки которые убедятся, что число во from меньше числа to и наоборот.
Создать проверки, которые помогут избежать попадание неправильных типов данных в from и to. */

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  get from() {
    return this._from;
  }

  set from(from) {
    if (typeof from !== 'number' || isNaN(from)) {
      throw TypeError('Must be a number');
    }
    if (from >= this.to && this.to !== undefined) {
      throw RangeError('from must be less than to');
    }
    this._from = from;
  }

  get to() {
    return this._to;
  }

  set to(to) {
    if (typeof to !== 'number' || isNaN(to)) {
      throw TypeError('to must be not empty number');
    }
    if (this.from > to) {
      throw RangeError('to must be more than from');
    }
    this._to = to;
  }

  get range() {
    return [this.from, this.to];
  }

  validate (number) {
    if (typeof number !== 'number' || isNaN(number)) {
      throw TypeError('Must be a number');
    }
    if (number < this.from || number > this.to) {
      throw RangeError('Not in the range');
    }
    return number;
  }
}

const obj1 = new RangeValidator(5, 50);