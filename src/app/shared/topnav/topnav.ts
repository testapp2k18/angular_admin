import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

declare var $: any;

@Component({
    selector: 'app-top-nav',
    templateUrl: 'topnav.html',
})

export class TopNavComponent {

  userInfo:any;
  valueDate:any = {};
  constructor(public router:Router){
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    this.valueDate =  new Date(); 
    
    setInterval(() => {
        this.valueDate =  new Date();
     }, 1000);
  }

  changeTheme(color: string): void {
    let link: any = $('<link>');
    link
      .appendTo('head')
      .attr({type : 'text/css', rel : 'stylesheet'})
      .attr('href', 'themes/app-' + color + '.css');
  }

  rtl(): void {
    let body: any = $('body');
    body.toggleClass('rtl');
  }

  sidebarToggler(): void  {
    let sidebar: any = $('#sidebar');
    let mainContainer: any = $('.main-container');
    sidebar.toggleClass('sidebar-left-zero');
    mainContainer.toggleClass('main-container-ml-zero');
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  change_password(){
    
  }
}
