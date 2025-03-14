import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FirstComponent } from './first/first.component';
import { ContactComponent } from './contact/contact.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveExpComponent } from './directive-exp/directive-exp.component';
import { MouseComponent } from './mouse/mouse.component';
import { DragComponent } from './drag/drag.component';
import { StyleCssComponent } from './style-css/style-css.component';
import { DataTypesComponent } from './data-types/data-types.component';
import { GetSetInputComponent } from './get-set-input/get-set-input.component';
import { SignalsComponent } from './signals/signals.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailsComponent } from './details/details.component';
import { PipeTutorialComponent } from './pipe-tutorial/pipe-tutorial.component';

export const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'interpolation',
    component: InterpolationComponent,
  },
  {
    path: 'dataBinding',
    component: DataBindingComponent,
  },
  {
    path: 'directive',
    component: DirectiveExpComponent,
  },
  {
    path: 'mouseEvents',
    component: MouseComponent,
  },
  {
    path: 'dragEvents',
    component: DragComponent,
  },
  {
    path: 'styleCSS',
    component: StyleCssComponent,
  },
  {
    path: 'dataType',
    component: DataTypesComponent,
  },
  {
    path: 'getSetInput',
    component: GetSetInputComponent,
  },
  {
    path: 'signals',
    component: SignalsComponent,
  },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'details', component: DetailsComponent },
  {
    path: 'pipes',
    component: PipeTutorialComponent,
  },

  // Wildcard route for 404 page
  { path: '**', component: PageNotFoundComponent },
  
];
