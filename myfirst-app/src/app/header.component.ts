import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header>
            <h1>IBM </h1>
            <app-menu></app-menu>
        </header>
    `
})
export class HeaderComponent {

}