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

export const routes: Routes = [
    {
        path: '', component: FirstComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'interpolation', component: InterpolationComponent
    },
    {
        path: 'dataBinding', component: DataBindingComponent
    },
    {
        path: 'directive', component: DirectiveExpComponent
    },
    {
        path: 'mouseEvents', component: MouseComponent
    },
    {
        path: 'dragEvents', component: DragComponent
    },
    {
        path: 'styleCSS', component: StyleCssComponent
    }
];
