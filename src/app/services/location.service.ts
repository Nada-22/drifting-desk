import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  API_URL=environment.API_URL;
  API_KEY=environment.API_KEY;
  constructor(private http:HttpClient ) { }


  getLocation(lat:any,lon:any){
    let params= new HttpParams();
   params= params.append('lat',lat);
   params= params.append('lon',lon);
   params= params.append('appid',this.API_KEY);
   const requestOptions = { params: params };

    return this.http.get(`${this.API_URL}`,requestOptions)
  }

}
