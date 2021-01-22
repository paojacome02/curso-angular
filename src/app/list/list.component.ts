import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Brand} from '../model/brand.model';
import {BrandService} from '../services/brand.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns= ['_id','brand','colection','quantity'];
  dataSource = new MatTableDataSource<Brand>();

  constructor(private brands: BrandService, private router: Router) {
    this.brands.getBrands().subscribe(res =>{
      this.dataSource.data = res;
    })
  }

  ngOnInit(): void {
  }

  edit(id: string){
    this.router.navigate(['brand',id])
  }

  delete(id: string){
    this.brands.deleteBrand(id).subscribe(()=>{
      this.refresh();
      }, err =>{
        alert('Ocurió un error al borrar el elemento')
      });
  }

  refresh(){
    this.brands.getBrands().subscribe(res => {
      this.dataSource.data = res;
    })
  }

}
