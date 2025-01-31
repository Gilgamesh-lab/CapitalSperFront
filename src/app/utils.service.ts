import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from './environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private http: HttpClient) {}
  
  
  /*
      @function getEndPoint
      @return EndPoint
      @desc: get the endpoint according to environment
  */
  getEndPoint(): EndPoint {
    if (environment.production) {
      return {
        apiUrl: environment.apiUrl,
      }
    } else {
      return {
        apiUrl: environment.apiUrl,
      }
    }
  }

  getJsonHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;',
      }),
      withCredentials: true
    }
  }


}

export class EndPoint {
  apiUrl: string
}
