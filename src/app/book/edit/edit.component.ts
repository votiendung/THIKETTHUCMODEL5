import { Component, OnInit } from '@angular/core';
import {Book} from '../../../model/book';
import {BookService} from '../../../sevice/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  book: Book = {};
  id = -1;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      // this.product = await this.getProductByPromise(this.id);
      this.getBookById(this.id);
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getBookById(id: number) {
    this.bookService.getBookById(id).subscribe(value => {
      this.book = value;
    });
  }

  // tslint:disable-next-line:typedef
  updateBook(id: number) {
    this.bookService.updateBook(id, this.book).subscribe(() => {
      console.log('Thành Công');
    }, () => {
      console.log('Xảy ra lỗi');
    });
  }
}
