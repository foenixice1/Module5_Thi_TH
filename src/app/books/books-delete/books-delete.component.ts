import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Books} from "../../models/books";

@Component({
  selector: 'app-books-delete',
  templateUrl: './books-delete.component.html',
  styleUrls: ['./books-delete.component.css']
})
export class BooksDeleteComponent implements OnInit {
  booksForm!: FormGroup;


  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.booksForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl(''),
    })
    this.activeRoute.params.subscribe((data) => this.booksForm.value.id = data.id);
    this.showDelete(this.booksForm.value.id)

  }

  showDelete(id: any) {
    this.http.get<Books>(`http://localhost:3000/books/${id}`).subscribe((data) => {
      this.booksForm.get('id')?.setValue(data.id);
      this.booksForm.get('title')?.setValue(data.title);
      this.booksForm.get('author')?.setValue(data.author);
      this.booksForm.get('description')?.setValue(data.description);
    })
  }

  deleteBoos() {
    this.http.delete(`http://localhost:3000/books/${this.booksForm.value.id}`).subscribe((data) => {
      alert("Xóa thành công");
      this.router.navigate(["/books"])
    })
  }
}
