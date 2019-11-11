import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getPosts(page){
    return this.httpClient.get(`https://reqres.in/api/users?page=${page}`);
  }

  sendPostRequest(postData){

    const httpOpitions = {
      headers: new HttpHeaders({
        'Acept': 'application/json',
        'Content-Tyoe': 'application/json'
      }),
    }

    return this.httpClient.post("https://reqres.in/api/users", postData, httpOpitions);
  }

  sendPutRequest(postData, id){

    const httpOpitions = {
      headers: new HttpHeaders({
        'Acept': 'application/json',
        'Content-Tyoe': 'application/json'
      }),
    }

    return this.httpClient.put('https://reqres.in/api/users/${id}', postData, httpOpitions);
  }

  sendDeleteRequest(id){

    const httpOpitions = {
      headers: new HttpHeaders({
        'Acept': 'application/json',
        'Content-Tyoe': 'application/json'
      }),
    }

    return this.httpClient.delete('https://reqres.in/api/users/${id}', httpOpitions);
  }
}
