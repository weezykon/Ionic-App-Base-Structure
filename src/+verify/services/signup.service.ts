import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../+shared/config';
@Injectable()
export class SignupService {

  constructor(private http: HttpClient) {

}

signup(data) {
  console.log('uuu')
  console.log(AppConfig.REST_API)
  return new Promise ((resolve, reject) => {
    this.http.post(`${AppConfig.REST_API}/api/register`, data)
    .subscribe((res) => resolve(res), (err) => reject(err));
  })
}



}
