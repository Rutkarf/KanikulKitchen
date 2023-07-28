import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorieService } from '../services/categorie.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AsyncService } from '../services/API/async.service';
import {HttpClient} from "@angular/common/http";
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent {

categories:any
wait:any
reponse:any
id: string | null ='0';
categorie = {
  id: 0,
  titre: ''
}

constructor( private router: Router, private route: ActivatedRoute, private http: HttpService) {

}

formulaire(form: NgForm , id: any){

this.http.postData('categorie', form.value).subscribe({
 next:(data)=>console.log(data),
 error:(err)=>console.log(err),
 complete:()=>console.log('categorie ajoutée')
});


  this.router.navigate(['categorie'])
  // console.log(test);

}

ngOnInit() {

  this.id = this.route.snapshot.paramMap.get('id');

  if (this.id != null) {

    this.http.getData('categorie', this.id).subscribe({
      next:(data)=> this.categorie=data,
      error:(err)=>console.log(err),
      complete:()=>console.log('id recuperees')
  
     }); 
    //  console.log(this.categories);


  }

  
}
}
