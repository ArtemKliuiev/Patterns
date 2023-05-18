interface Collection {
  addBook(book: string): any;
  createIterator(): any;
}
interface Iter {
  nextBook(): any;
  hasNext(): boolean;
}
class CollectionBooks implements Collection {
  private books: any
  constructor() {
    this.books = [];
  }
  addBook(book: string) {
    this.books.push(book);
  }
  createIterator() {
    return new Iter(this);
  }
}
class Iter implements Iter {
  collectionBooks: any;
  private index: number;
  constructor(collectionBooks: any) {
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