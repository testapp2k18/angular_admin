import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

 //export const baseURL='http://127.0.0.1:4000/';
 export const baseURL='http://localhost:4000/';
// export const baseURL='http://162.243.110.92:4848/';



@Injectable()
export class AppService {

  private messageSourceapiUrl = new BehaviorSubject<any>(baseURL);
  apiUrlMessage = this.messageSourceapiUrl.asObservable();

  constructor(private _http: Http) { }

  success(){

    return 'Service Response...';

  }

  isAuthenticated(){

    let token = sessionStorage.getItem("accessToken");
    return (token) ? true : false;

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

  addUser(user?: any):Observable<any>{

    let token = sessionStorage.getItem('accessToken');
    let url = baseURL+'user';
    var data = JSON.stringify(user);
    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
    headers.append('x-access-token', token);
    let options = new RequestOptions({headers: headers});
    return this._http.post(url, data, options).map((res) => res.json()).catch((error) => error.message);

  }


  readUser(_userId?: any):Observable<any>{

    let token = sessionStorage.getItem('accessToken');
    let url = _userId == undefined ? baseURL+'user' : baseURL+'user/'+_userId;
    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
    headers.append('x-access-token', token);
    let options = new RequestOptions({headers: headers});
    return this._http.get(url,options).map((res)=>res.json()).catch((error) => error.message);

  }

  updateUser(user):Observable<any>{

    let token = sessionStorage.getItem('accessToken');
    let url = baseURL+'user';
    if(user._id != undefined){
      url = url + '/'+user._id;
    }
    
    var data = JSON.stringify(user);
    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
    headers.append('x-access-token', token);
    let options = new RequestOptions({headers: headers});
    return this._http.put(url, data, options).map((res) => res.json()).catch((error) => error.message);

  }


  deleteUser(_userId?: any):Observable<any>{
    let token = sessionStorage.getItem('accessToken');
    let url = _userId == undefined ? baseURL+'user' : baseURL+'user/'+_userId;
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

  emailVerify(_accessToken):Observable<any>{
    let url = baseURL+'email_validate';
    var data = {"access_token": _accessToken.access_token};
    let headers = new Headers({'Content-Type': 'application/json'});        
    let options = new RequestOptions({headers: headers});    
    return this._http.post(url, data, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
  }



  /*=================================== STORE ===================================*/

    getStore(type):Observable<any> {
      let token = sessionStorage.getItem("accessToken");        
      let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});        
      headers.append('x-access-token', token);
      let options = new RequestOptions({headers: headers});
      let url = baseURL+'stores';
      return this._http.get(url, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
    }
  
    searchStore(searchData):Observable<any> {
      let token = sessionStorage.getItem("accessToken");
      let url = baseURL+'searchStore/?type='+searchData.type+'&key='+searchData.key; 
      let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});        
      headers.append('x-access-token', token);
      let options = new RequestOptions({headers: headers});   
      return this._http.get(url, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
    }
  
   getSingleStore(_store):Observable<any>{
      let token = sessionStorage.getItem("accessToken");
      let url = baseURL+'store/'+_store; 
      let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});        
      headers.append('x-access-token', token);
      let options = new RequestOptions({headers: headers});   
      return this._http.get(url, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
    }
  
    deleteStore(_store):Observable<any>{
      let token = sessionStorage.getItem("accessToken");
      let url = baseURL+'store/'+_store; 
      let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});        
      headers.append('x-access-token', token);
      let options = new RequestOptions({headers: headers});   
      return this._http.delete(url, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
    }
    deleteStoreImage(_store):Observable<any>{
      let token = sessionStorage.getItem("accessToken");
      let url = baseURL+'delete_store_image/'+_store; 
      let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});        
      headers.append('x-access-token', token);
      let options = new RequestOptions({headers: headers});
      return this._http.delete(url, options).map((response:Response)=><any>response.json()).catch((error) => error.message);
    }
  
    blockStore(_store):Observable<any>{
      let token = sessionStorage.getItem("accessToken");
      let url = baseURL+`block_store`;
      var data = {
        "storeid":_store
      }
      let headers = new Headers({'Content-Type': 'application/json'});        
      headers.append('x-access-token', token);
      let options = new RequestOptions({headers: headers});
      return this._http.post(url, data, options).map((res) => res.json()).catch((error) => error.message);
    }
  
    updateStore(value):Observable<any> {
      let token = sessionStorage.getItem("accessToken");
      let url = baseURL+`store`;
      var data = JSON.stringify(value);
      let headers = new Headers({'Content-Type': 'application/json'});        
      headers.append('x-access-token', token);
      let options = new RequestOptions({headers: headers});
      return this._http.put(url, data, options).map((res) => res.json()).catch((error) => error.message);
    }
    
    addStore(value):Observable<any>{
      let token = sessionStorage.getItem("accessToken");
      let url = baseURL+`store`;
      var data = JSON.stringify(value);
      let headers = new Headers({'Content-Type': 'application/json'});
      headers.append('x-access-token', token);
      let options = new RequestOptions({headers: headers});
      return this._http.post(url, data, options).map((res) => res.json()).catch((error) => error.message);
    }
}