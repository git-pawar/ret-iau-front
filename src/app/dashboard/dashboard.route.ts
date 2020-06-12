import { AddpatientComponent } from './addpatient/addpatient.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard.component';
import{Route} from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

export const DashboardRoute : Route[]=[
    {
        path:'',
        component:DashboardComponent,
        canActivate:[AuthGuard],
        children:[
            {path:'settings', component:SettingsComponent},
            {path:'dashboard', component:MainComponent},
            {path:'patientlist', component:PatientlistComponent},
            {path:'addpatient', component:AddpatientComponent}
        ]
    }
]