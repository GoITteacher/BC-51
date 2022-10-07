class PaginationHelper {
  constructor(items, itemCountForPage) {
    this.items = items;
    this.itemCountForPage = itemCountForPage;
  }

  pageCount() {
    let length = this.items.length;
    let result = Math.ceil(length / this.itemCountForPage);
    return result;
  }

  itemCount() {
    return this.items.length;
  }

  pageItemCount(index) {
    index += 1;
    let pageCount = this.pageCount();

    if (index <= 0 || index > pageCount) return -1;
    //> 1......10 <

    if (index < pageCount) {
      return this.itemCountForPage;
    } else {
      let count = this.itemCount() % this.itemCountForPage;
      return count > 0 ? count : this.itemCountForPage;
    }
  }
}

let pagHelp = new PaginationHelper(["a", "b", "c", "d", "e", "f", "e", "f"], 4);

console.log(pagHelp.pageItemCount(1));
