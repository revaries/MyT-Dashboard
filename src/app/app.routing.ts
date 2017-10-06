import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { EducationComponent } from './education/education.component';
import { } from './unAuth/login'

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
      // {
      // path: 'education',
      // component : EducationComponent,
      // },
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },{
        path: 'education',
        loadChildren: './education/education.module#EducationModule'
    },{
        path: 'workex',
        loadChildren: './workex/workex.module#WorkexModule'
    }, {
        path: 'deeds',
        loadChildren: './deeds/deeds.module#DeedsModule'
    }, {
        path: 'tools',
        loadChildren: './tools/tools.module#ToolsModule'
    }, {
        path: 'skills',
        loadChildren: './skills/skills.module#SkillsModule'
    }, {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
    }, {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
    }, {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    }, {
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    }, {
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
    }
  ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
