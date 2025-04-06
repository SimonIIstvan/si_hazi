import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideokartyaService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getAllVideokartyak(): Observable<any> {
    return this.http.get(`${this.apiUrl}/gpu`);
  }

  getAMDVideokartyak(): Observable<any> {
    return this.http.get(`${this.apiUrl}/gpu/amd`);
  }

  getNVIDIAVideokartyak(): Observable<any> {
    return this.http.get(`${this.apiUrl}/gpu/nvidia`);
  }
}
