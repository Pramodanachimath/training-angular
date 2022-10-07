import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books:Book[]=[]
   
  constructor(private _bookService:BookService) { }

  ngOnInit(): void {
    this.books=this._bookService.getBooks();
  }

}
