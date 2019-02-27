import { Route } from '@angular/router';
import { UsersComponent } from './index';
import { UsersEditComponent } from '../users-edit/users-edit.component';
//import { UserAddComponent } from '../user-add/user-add.component';

//import { FormComponent } from '../forms/forms.component';


export const UsersRoutes: Route[] = [
    {
      path: 'users',
      component: UsersComponent
    },
    {
      path: 'users/edit/:id',
      component: UsersEditComponent
    },
    {
      path: 'users/delete/:id',
      component: UsersComponent
    },
    {
      path: 'users/block/:id',
      component: UsersComponent
    }/*,
	{
      path: 'Users/add',
      component: UsersAddComponent
    }*/

];
