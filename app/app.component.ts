import { Component } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import * as Platform from "platform";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('pt'); //chage pt
        //this.translate.use(Platform.device.language.split('-')[0]);
    }

}
