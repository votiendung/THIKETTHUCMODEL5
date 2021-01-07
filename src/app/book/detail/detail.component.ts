import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../sevice/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../../model/book';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book = {};
  id = -1;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
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

}
