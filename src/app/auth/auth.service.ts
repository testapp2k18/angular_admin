import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public isAuthenticated(){

	const token = sessionStorage.getItem('accessToken');
	if(token){
		return true;
	} 
	return false;

  }

  public isAdmin(){

	const role = sessionStorage.getItem('userRole');
  		console.log(role);
  		console.log('ROLE');

	if(role === 'admin'){
		return true;
	} 
	return false;

  }
}
