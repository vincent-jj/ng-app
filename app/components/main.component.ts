import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';

import {MenuComponent} from './menu.component';
import {FooterComponent} from './footer.component';
import {AppComponent} from './app.component';

@Component({
  selector: 'ng-main',
  template: `
    <div>
    <ng-menu></ng-menu>
    <ng-app> </ng-app>
    <ng-footer></ng-footer>
    </div>
  `,
  styleUrls: [
    'app/css/main.component.css'
  ],
  directives: [
    ROUTER_DIRECTIVES,
    MenuComponent,
    FooterComponent,
    AppComponent
  ],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'MainComponent',
    component: MainComponent,
    useAsDefault: true
  }
])
export class MainComponent {
  title: string = "ngHubApp";
}
