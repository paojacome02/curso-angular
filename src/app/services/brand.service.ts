import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Brand} from '../model/brand.model'

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  getSingleBrand(id: string){
    return this.http.get<Brand>('https://super-rest.herokuapp.com/test/pao/' + id);
  }
  getBrands(): Observable<[Brand]>{
    return this.http.get<[Brand]>('https://super-rest.herokuapp.com/test/pao');
  }

  saveBrand(data: Brand){
    return this.http.post('https://super-rest.herokuapp.com/test/pao',data)
  }

  updateBrand(id:string, data: Brand){
    return this.http.put('https://super-rest.herokuapp.com/test/pao/' + id, data)
  }

  deleteBrand(id: string){
    return this.http.delete('https://super-rest.herokuapp.com/test/pao/' + id)
  }
}
