import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable()
export class AuthService {
  constructor(private storage: Storage){
  }

  _getToken():Promise<any>{
    return this.storage.get('token')
  }

  _setStarted():Promise<any> {
    return this.storage.set('started', true)
  }

  _getStarted():Promise<any>{
    return this.storage.get('started')
  }

}
