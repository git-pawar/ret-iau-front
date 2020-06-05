import{Routes} from '@angular/router';
import { DashboardRoute } from './dashboard/dashboard.route';
import { HomeRoutes } from './home/home.router';
import { NoPageRoute } from './no-page/no-page.route';

export const routes : Routes=[...HomeRoutes,...DashboardRoute,...NoPageRoute];