import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  public items:Array<any> = [];
  title:String = '';
  searchkey:any='';
	heading:any;
  user:any = {};
  data:any = {};
  
	successDiv:boolean = false;
	errDiv:boolean = false;
	message:string;
	Countries:any = [];

	constructor(private _appservice:AppService){

    this.heading = 'My Profile';

	}

  ngOnInit() {

    this.getSingleUser();

  }

  private getSingleUser(){

    this._appservice.readUser().subscribe(response=> {         
       if(response.success){
         this.data= response.data;
       } else {
         console.log("Error");
       }
    });

  }
  
  updateAdmin(event) {

    event.stopPropagation();
    
    this.errDiv = false;
    this.successDiv = false;
    this.data.password = '';
    if(this.data){

      if(!this.data.first_name || (this.data.first_name).trim().length === 0){
        
        this.errDiv = true;
        this.message = "Please enter your first name"

      } else if(!this.data.last_name || (this.data.last_name).trim().length === 0){
        
        this.errDiv = true;
        this.message = "Please enter your last name"

      } else if(!this.data.email || (this.data.email).trim().length === 0){
        
        this.errDiv = true;
        this.message = "Please enter your email"

      } else if(!this.FnIsEmail(this.data.email)) {

        this.errDiv = true;
        this.message = 'Invalid email address.';

      } else {

        this._appservice.updateUser(this.data).subscribe(response=>{
          if(response.success){
            this.errDiv = false;
            this.successDiv = true;
            this.message = 'Profile updated successfully';
          } else {
            console.log("Error");
          }
        })
      }
      
    } else {

  		this.errDiv = true;
  		this.message = 'Error in profile update';

  	}
  }
  
  clear(){
    
    var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    this.getSingleUser();
  }

  FnIsEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  } 

}
