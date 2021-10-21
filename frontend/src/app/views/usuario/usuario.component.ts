import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books';
import { BookService } from 'src/app/services/books.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public books: Array<Book> = [];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
  }

  findByName(name: string){
    this.bookService.getBookByName(name).subscribe((response) => {
      //this.books = response;
      this.loadInfo();
    })
  }

  loadInfo(){
    this.bookService.getBooks().subscribe((response) => {
      this.books = response;
    })
  }

}
