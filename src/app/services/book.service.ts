import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:Book[]=[
    new Book('Learn English','Pramod','Education',500,1),
    new Book('Learn Coocking','Sita','Food',1000,2),
    new Book('Drama','Raju','Arts',2000,3),
    new Book('Songs','joe','Singing',600,4),
    new Book('Grammer','Sri','Education',1000,5),
  ]

  getBooks=():Book[]=>{
        return this.books;
  }

  constructor() { }
}
