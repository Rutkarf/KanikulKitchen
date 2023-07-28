import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {

  categories: any

  constructor(private http: HttpService) {
   
  }



  delete(id: any) {
  

  }

  ngOnInit(): void {
   
    this.http.getData('categorie').subscribe({
      next:(data)=> this.categories=data,
      error:(err)=>console.log(err),
      complete:()=>console.log('categories recuperees')
  
    }); console.log(this.categories);
  

  }

}
