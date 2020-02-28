import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {

  constructor(private http: HttpClient) { }

  public generateError() {
    return this.http.get(`${environment.api}/error`).subscribe(c => c)
  }

  public getHashtag() {
    return this.http.get<any[]>(`${environment.api}/tweets/group/lang`);
  }

  public getTopFive(){
    return this.http.get(`${environment.api}/tweets/topfive`);
  }

  public getHours() {
    return this.http.get(`${environment.api}/tweets/group/createdat`)
  }
}
