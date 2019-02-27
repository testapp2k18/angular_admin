import { Route } from '@angular/router';

import { TableComponent } from './index';

export const TableRoutes: Route[] = [
  {
    path: 'merchant',
    component: TableComponent
  },
  {
    path: 'recommender',
    component: TableComponent
  },
  {
    path: 'recommender/edit/:id',
    component: TableComponent
  },
];
