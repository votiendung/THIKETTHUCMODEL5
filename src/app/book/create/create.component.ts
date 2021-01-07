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
  private output = '';
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  createBook() {
    return this.bookService.createNewBook(this.book).subscribe( output => {this.output = 'Thêm Sách Mới Thành Công'; } ,
      output => {this.output = 'Lỗi nhé'; } );
  }
}
