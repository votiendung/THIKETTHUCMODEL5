import { Component, OnInit } from '@angular/core';
import {Book} from '../../../model/book';
import {BookService} from '../../../sevice/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book: Book = {};
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  createBook() {
    return this.bookService.createNewBook(this.book).toPromise();
  }
}
