import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public  items:Array<any> = [];
          title:String = '';
          //data:any;
          searchkey:any='';
          filter:any;

  //sorting start
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){

    this.key = key;
    this.reverse = !this.reverse;

  }

  // sorting end

  //initializing p to one

  p: number = 1;

	constructor(private _appservice:AppService){
      this.title = 'Users List';
	}

  getUsers(){
    this._appservice.allUser().subscribe(response=> {         
      if(response.success){
       this.items = response.data; 
      } else {
        console.log('ERROR!');
      }
    });
  }

  ngOnInit() {
    this.getUsers();
  }
  
  deleteUser(_user:any,pos){
    let conf = confirm('Are you sure you want to delete this user?');
    if(conf){
       this._appservice.deleteUser(_user).subscribe(response=> {         
       console.log(response);
       if(response.success){
         this.items.splice(pos, 1);
       } else {
         alert('Error while deleting...')
       }
      });
    }
  }

  clear(){
    this.searchkey='';
    this.getUsers();
  }

}
