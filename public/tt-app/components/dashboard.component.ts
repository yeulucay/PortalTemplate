import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

/*
import {CrisisListComponent}   from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisService}         from './crisis.service';
*/
@Component({
    templateUrl:'/tt-app/views/dashboard.html',
    directives: [RouterOutlet]
    //providers:  [CrisisService]
})

export class DashboardComponent { }
