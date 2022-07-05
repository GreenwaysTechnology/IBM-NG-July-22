import { Component } from "@angular/core";


@Component({
    selector: 'app-menu',
    template: `
    <hr>
        <ul>
            <li>
                <a href="services">services</a>
            </li>
            <li>
                <a href="clients">clients</a>
            </li>
            <li>
                <a href="usecases">usecases</a>
            </li>
        </ul>
    `
})
export class MenuBar {

}
