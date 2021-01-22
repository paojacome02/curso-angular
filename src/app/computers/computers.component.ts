import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import {ComputersService} from '../services/computers.service';
import {Computer} from '../model/computers.model'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {
  formComputer: FormGroup;
  id: string;
  constructor(private formBuilder: FormBuilder, private computers: ComputersService, private route: ActivatedRoute, private router:Router) {
    this.formComputer = this.formBuilder.group({
      brand:['', [Validators.required, Validators.minLength(1)]],
      memory:['',[Validators.required, Validators.min(1)]],
      size: ['', Validators.required]
    });
    this.route.params.subscribe(parameters => {
      if (parameters.id){
        this.id = parameters.id;

        this.computers.getSingleComputer(parameters.id).subscribe(res => {
          this.formComputer.get('brand').setValue(res.brand);
          this.formComputer.get('memory').setValue(res.memory);
          this.formComputer.get('size').setValue(res.size);
        })
      }
    });
  }

  ngOnInit(): void {
  }

  saveClick(){
    const data = new Computer();
    data.brand = this.formComputer.get('brand').value;
    data.memory= this.formComputer.get('memory').value;
    data.size= this.formComputer.get('size').value
    if(this.id){
      this.computers.updateComputer(this.id, data).subscribe(() => {
        this.router.navigate(['list']);
      },err =>{
        alert('Ocurrio error al actualizar elemento ')
      });
    } else{
      this.computers.saveComputer(data).subscribe(() =>{
        alert('Elemento guardado con éxito');
      }, err =>{
        alert(err.error.error);
      });
    }
  }

}
