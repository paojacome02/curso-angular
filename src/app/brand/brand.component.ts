import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router'
import {Brand} from '../model/brand.model';
import {BrandService} from '../services/brand.service'

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {
  formComplete: FormGroup;
  id: string;

  constructor(private formBuilder: FormBuilder, private brands: BrandService, private route: ActivatedRoute, private router:Router) {
    this.formComplete = this.formBuilder.group({
      brand:['', [Validators.required, Validators.minLength(1)]],
      colection:['',[Validators.required, Validators.minLength(4)]],
      quantity: ['', Validators.required, Validators.min(1)]
    });

    this.route.params.subscribe(parameters => {
      if (parameters.id){
        this.id = parameters.id;
        this.brands.getSingleBrand(parameters.id).subscribe(res => {
          this.formComplete.get('brand').setValue(res.brand);
          this.formComplete.get('colection').setValue(res.colection);
          this.formComplete.get('quantity').setValue(res.quantity);
        })
      }
    });
  }

  ngOnInit(): void {
  }

  saveClick(){
    const data = new Brand();
    data.brand = this.formComplete.get('brand').value;
    data.colection= this.formComplete.get('colection').value;
    data.quantity= this.formComplete.get('quantity').value
    console.log("id", this.id)
    if(this.id){
      this.brands.updateBrand(this.id, data).subscribe(() => {
        this.router.navigate(['list']);
      },err =>{
        alert('Ocurrio error al actualizar elemento ')
      });
    } else{
      this.brands.saveBrand(data).subscribe(() =>{
        alert('Elemento guardado con éxito');
      }, err =>{
        alert('Error al ingresar elemento');
      });
    }
  }
}
