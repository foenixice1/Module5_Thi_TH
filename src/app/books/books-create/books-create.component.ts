import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Books} from "../../models/books";

@Component({
  selector: 'app-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.css']
})
export class BooksCreateComponent implements OnInit {
  booksForm!: FormGroup;

  constructor(private router: Router,
              private http: HttpClient) {
  }

  ngOnInit(){
    this.booksForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl(''),
    })
  }
  createBooks() {
    this.http.post<Books>('http://localhost:3000/books', this.booksForm.value).subscribe((data) => {
      alert("Create success :  Title : " + data.title + " Author : " + data.author)
      this.router.navigate(["/books"])
    })
  }

}
