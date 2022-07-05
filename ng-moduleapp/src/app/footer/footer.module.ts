import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer.component";


@NgModule({
    declarations: [FooterComponent],
    imports: [],
    exports: [FooterComponent] // we make this component is public, outside this module.
})
export class FooterModule {

}