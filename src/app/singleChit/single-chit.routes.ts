import { RouterModule } from '@angular/router';
import { SingleChitComponent } from './single-chit/single-chit.component';

const homeroutes: any = [
  {
    path: '',
    component: SingleChitComponent,
  },
];

export const routes = RouterModule.forChild(homeroutes);
