import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.html'
})

export class SidebarComponent {
  isActive = false;
  showMenu = '';
  divClass:String = 'fa fa-plus';
  userRole:String;
  userId: String;
  
  ngOnInit(){
    this.userRole = sessionStorage.getItem('userRole');
    this.userId = sessionStorage.getItem('user_id');
  }
  eventCalled() {
    this.isActive = !this.isActive;
  }
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
      this.divClass = 'fa fa-plus';
    } else {
      this.divClass = 'fa fa-minus';
      this.showMenu = element;
    }
  }
}
