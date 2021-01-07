import { Component, OnInit } from '@angular/core';
import {Book} from '../../../model/book';
import {BookService} from '../../../sevice/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[] = [];
  id = -1;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.getAllBook();
  }

  // tslint:disable-next-line:typedef
  getAllBook() {
    this.bookService.getAllBook().subscribe(result => {
      this.books = result;
    }, error => console.log(error));
  }

}
