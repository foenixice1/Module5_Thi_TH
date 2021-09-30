import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Books} from "../../models/books";

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {
  booksForm!: FormGroup;


  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
  }


  ngOnInit(){
    this.booksForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl(''),
    })
    this.activeRoute.params.subscribe((data) => this.booksForm.value.id = data.id);
    this.showEdit(this.booksForm.value.id)


  }

  showEdit(id: any) {
    this.http.get<Books>(`http://localhost:3000/books/${id}`).subscribe((data) => {
      this.booksForm.get('id')?.setValue(data.id);
      this.booksForm.get('title')?.setValue(data.title);
      this.booksForm.get('author')?.setValue(data.author);
      this.booksForm.get('description')?.setValue(data.description);
    })
  }
  updateBooks() {
    this.http.put<Books>(`http://localhost:3000/books/${this.booksForm.value.id}`, this.booksForm.value).subscribe((data) => {
      alert("Update success ")
      this.router.navigate(["/books"])
    })
  }
}
