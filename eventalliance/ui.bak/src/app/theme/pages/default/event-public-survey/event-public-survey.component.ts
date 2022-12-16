import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: "app-event-public-survey",
    templateUrl: "./event-public-survey.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class EventPublicSurveyComponent implements OnInit {

    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-event-public-survey',
            ['assets/app/js/dashboard.js']);

    }

}