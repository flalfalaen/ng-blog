import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from "../about.component";
import {FormsModule} from "@angular/forms";


const routes: Routes = [
    {path: '', component: AboutComponent}
];

@NgModule({
    declarations: [AboutComponent],
    imports: [RouterModule.forChild(routes), FormsModule],
    exports: [RouterModule],
})
export class AboutRoutingModule {
}
