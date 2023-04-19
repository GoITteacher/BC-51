// pageCount
// pageItemCount
// itemCount

class PaginationHelper {
  items;
  #per_page;

  constructor(items, per_page) {
    this.items = items;
    this.per_page = per_page;
  }

  set per_page(newValue) {
    if (typeof newValue === 'number' && newValue > 0) {
      this.#per_page = newValue;
    } else {
      console.log('Error');
      this.#per_page = this.#per_page || 10;
    }
  }

  pageCount() {
    return Math.ceil(this.items.length / this.#per_page);
  }

  pageItemCount(index) {
    if (index < this.pageCount() && index > 0) {
      return this.#per_page;
    } else if (index === this.pageCount()) {
      return this.items.length % this.#per_page || this.#per_page;
    } else {
      return 'Error index page!';
    }
  }

  itemCount() {
    return this.items.length;
  }
}

let pagHelp = new PaginationHelper(
  [1, 2, 3, 4, 5, 6, 1, 3, 6, 8, 2, 67, 1, 1],
  3,
);

console.log(pagHelp.pageItemCount(1));
console.log(pagHelp.pageItemCount(5));
