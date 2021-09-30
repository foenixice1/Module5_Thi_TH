import { Component, OnInit } from '@angular/core';
import {Books} from "../../models/books";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-books-home',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.css']
})
export class BooksHomeComponent implements OnInit {
  books: Books[] = [];
  booksForm!: FormGroup;

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit(){
    this.getAllAPi();
    this.booksForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl(''),
    })
  }

  getAllAPi() {
    this.http.get<Books[]>('http://localhost:3000/books').subscribe((data) => {
      this.books = data;
    })
  }

}
