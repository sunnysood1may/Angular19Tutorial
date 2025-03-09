import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FirstComponent } from './first/first.component';
import { ContactComponent } from './contact/contact.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

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
    }
];
