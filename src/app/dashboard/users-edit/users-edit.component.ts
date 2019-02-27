import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationServiceService } from '../../validation-service.service';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { FileSelectDirective, FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3131/upload';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})

export class UsersEditComponent implements OnInit {

  user:any = {};
  userForm:FormGroup;
  isUsers:boolean = false;
  heading:any;
  successDiv:boolean = false;
  errDiv:boolean = false;
  fileUpload:boolean = false;
  message:String;
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'upload'});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }


  constructor(private FB:FormBuilder,public router:Router,private route:ActivatedRoute,private _appservice:AppService) { 
    // this.userForm = FB.group({
    //      'name':[],
    //      'email': ['', [Validators.required, ValidationServiceService.emailValidator]],
    //    })
  }
  loadFiles(){
    this.fileUpload = true;
  }
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item, response, status, headers) => {
        console.log("ImageUpload:uploaded:", item, status, response);
        var resObj = JSON.parse(response);
        this.user.upload= resObj.fileName;
        if(status==200){
        }
    };

	  this.getSingleUser(this.route.snapshot.params);
    
  }

  private getSingleUser(_user){
	  let heading; let btn;
	  if(_user.id)
		  this.heading = 'Edit Users';
	  else
		  this.heading = 'Add Users';
		  
      if(_user.id){

        this._appservice.readUser(_user.id).subscribe(response=> {         
          if(response.success){
            console.log("Response : ",response);
            if(response.data.role === 'user'){
              this.isUsers = true;
            }
            this.user = response.data;
          } else {
            console.log("Error");
          }
        });

      }
  }
  
  updateUser() {
    this.successDiv = false;
    this.errDiv = false;
    console.log(this.user);
    if(this.user._id){

      if(this.user.email){
          if(!this.FnIsEmail(this.user.email)){
            this.errDiv = true;
            this.message = 'Invalid email address.';
          } else {
            
            if(this.user.org_pw) {
              if(this.user.org_pw.length >= 6){
                this.successDiv = true;
              } else {
                this.errDiv = true;
                this.message = 'Password must be 6 characters long.';
              }
            } else {
                this.successDiv = true;
            }
          }

          if(this.successDiv) {
            
            this._appservice.updateUser(this.user).subscribe(response=>{
            console.log("Update Response : ",response);
              if(response.success){
              this.message = 'User details updated successfully'; //response.message
              if(this.fileUpload = true)
              {
                this.uploader.uploadAll();
                this.fileUpload = false;
              }
              } else {
              console.log("Error");
              }
            });

          }
          
      } else {
          this.errDiv = true;
          this.message = 'Please fill mandatory fields.';
      }
    }
}
  
  addUser(){
    this.successDiv = false;
    this.errDiv = false;
    if(this.user.email){

      if(!this.FnIsEmail(this.user.email)) {

        this.errDiv = true;
        this.message = 'Invalid email address.';

      } else {

          this.user.role = 'user';

          if(this.user.password.length >= 6){
              this._appservice.addUser(this.user).subscribe(response=> {
              console.log(response);        
              if(response.success){
              this.errDiv = false;
                this.successDiv = true;
                this.message = 'User created successfully';//response.message;
                this.user = {};
              } else {
                this.errDiv = true;
                this.message = response.err.message;
                console.log("Error");
              }
            });
          } else {
            this.errDiv = true;
            this.message = 'Password must be 6 characters long.';
          }
      }

    } else {
      this.errDiv = true;
      this.message = 'Please fill mandatory fields.';
    }
  }

  clear(){

    this.user.first_name = '';
    this.user.last_name = '';
    this.user.email = '';
    this.user.password = '';
    this.user.phone = '';
    this.getSingleUser(this.route.snapshot.params);
  }

  public address : Object;
  getAddress(place:Object) { 

      this.address = place['formatted_address'];
      this.user.address2 = this.address;
      //var location = place['geometry']['location'];
      //var lat =  location.lat();
      //var lng = location.lng();
      console.log(this.address);
      //console.log("Address Object", place);
  }

  FnIsEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  } 

}