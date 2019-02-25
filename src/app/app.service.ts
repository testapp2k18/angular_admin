import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

 export const baseURL='http://127.0.0.1:4040/';
//export const baseURL='http://162.243.110.92:4000/';



@Injectable()
export class AppService {

  constructor(private _http: Http) { }

  success(){

    return 'Service Response...';

  }

  isAuthenticated(){

    let token = sessionStorage.getItem("accessToken");
    return (token)?true:false;

  }

  login(value):Observable<any>{

    let url = baseURL+'login';
    var data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json'});      
    let options = new RequestOptions({headers: headers});   
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  
  }

  change_password(obj):Observable<any>{

    let token = sessionStorage.getItem("accessToken");
    let url = baseURL+'change_password';
    var data = JSON.stringify(obj);
    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
    headers.append('x-access-token', token);
    let options = new RequestOptions({headers: headers});
    return this._http.post(url, data, options).map((res) => res.json()).catch((error) => error.message);

  }

  forgot_password(email):Observable<any>{

    let url = baseURL+'forgot_password';
    var data = {"email":email};
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});
    return this._http.post(url, data, options).map((res) => res.json()).catch((error) => error.message);

  }


  /*=================================== USER ===================================*/

  createUser(user):Observable<any>{

    let token = sessionStorage.getItem('accessToken');
    let url = baseURL+'user';
    var data = JSON.stringify(user);
    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
    headers.append('x-access-token', token);
    let options = new RequestOptions({headers: headers});
    return this._http.post(url, data, options).map((res) => res.json()).catch((error) => error.message);

  }


  readUser():Observable<any>{

    let token = sessionStorage.getItem('accessToken');
    let url = baseURL+'user';
    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
    headers.append('x-access-token', token);
    let options = new RequestOptions({headers: headers});
    return this._http.get(url,options).map((res)=>res.json()).catch((error) => error.message);

  }


  updateUser(user):Observable<any>{

    let token = sessionStorage.getItem('accessToken');
    let url = baseURL+'user';
    var data = JSON.stringify(user);
    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
    headers.append('x-access-token', token);
    let options = new RequestOptions({headers: headers});
    return this._http.put(url, data, options).map((res) => res.json()).catch((error) => error.message);

  }


  deleteUser():Observable<any>{

    let token = sessionStorage.getItem('accessToken');
    let url = baseURL+'user';
    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
    headers.append('x-access-token', token);
    let options = new RequestOptions({headers: headers});
    return this._http.delete(url, options).map((res) => res.json()).catch((error) => error.message);

  }

  allUser():Observable<any>{

    let token = sessionStorage.getItem('accessToken');
    let url = baseURL+'users';
    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
    headers.append('x-access-token', token);
    let options = new RequestOptions({headers: headers});
    return this._http.get(url, options).map((res) => res.json()).catch((error) => error.message);

  } 

  uploadLogo(data: any):Observable<any>{

    let token = sessionStorage.getItem('accessToken');
    let url = baseURL+'upload_logo';
    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});        
    headers.append('x-access-token', token);
    let options = new RequestOptions({headers: headers});
    return this._http.post(url, data, options).map((res) => res.json()).catch((error) => error.message);

  }

}
