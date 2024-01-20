import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor(private http:HttpClient) { }

  private fetchData(){
    return this.http.get
  }

}
