interface Collection<T> {
  addBook(book: T): void;
  createIterator(): T;
}
interface iIter<T> {
  nextBook(): any;
  hasNext(): boolean;
}
class CollectionBooks<T> implements Collection<T> {
  private books: Array<T>
  constructor() {
    this.books = [];
  }
  addBook(book: T): void {
    this.books.push(book);
  }
  createIterator(): any {
    return new Iter(this);
  }
}
class Iter<T> implements iIter<T> {
  collectionBooks: any;
  private index: number;
  constructor(collectionBooks: T) {
    this.collectionBooks = collectionBooks;
    this.index = 0;
  }
  nextBook() {
    if (this.hasNext()) {
      return { value: this.collectionBooks.books[this.index++], done: false };
    } else {
      return { done: true };
    }
  }
  hasNext() {
    return this.index < this.collectionBooks.books.length;
  }
}
//Проверка
const collectionBooks = new CollectionBooks();
//Добавляем книги
collectionBooks.addBook('На западном фронте без перемен');
collectionBooks.addBook('Три товарища');
collectionBooks.addBook('Ночь в Лиссабоне');
//Перебираем книги
const iterator = collectionBooks.createIterator().collectionBooks.books;
let i;
for (i = 0; i < [...iterator].length; i++) {
  console.log(iterator[i]);
}