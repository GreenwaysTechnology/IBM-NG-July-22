/**
 * Steps to create component
 * 1.declare class
 * 2.you have to export class
 * 3.you have to decorate using @Component decorator
 * 4.decorator takes parameter called decorator meta data which is object
 */

import { Component } from "@angular/core";


@Component({
  selector: 'app-root', //tag name <app-root></app-root>
  //inline template : template is written within component definition
  // template: `
  //     <div>
  //          <h1>Angular App!</h1>     
  //     </div>
  
  // `,
  //external template
  templateUrl:'app.component.html'
})
export class AppComponent {

}