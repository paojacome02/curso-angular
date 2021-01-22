import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Computer} from '../model/computers.model'
@Injectable({
  providedIn: 'root'
})
export class ComputersService {

  constructor(private http: HttpClient) { }

  getSingleComputer(id:string){
    return this.http.get<Computer>('https://super-rest.herokuapp.com/test/pao' + id);
  }
  getComputers(): Observable<[Computer]>{
    return this.http.get<[Computer]>('https://super-rest.herokuapp.com/test/paocomputers')
  }

  saveComputer(data: Computer){
    return this.http.post('https://super-rest.herokuapp.com/test/paocomputers', data)
  }

  updateComputer(id:string, data: Computer){
    return this.http.put('https://super-rest.herokuapp.com/test/paocomputers' + id, data)
  }

  deleteComputer(id: string){
    return this.http.delete('https://super-rest.herokuapp.com/test/paocomputers' + id)
  }
}
