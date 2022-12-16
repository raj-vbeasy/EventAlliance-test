import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: "app-artist-details",
    templateUrl: "./artist-details.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ArtistDetailsComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts(
            'app-artists', [
                'assets/eventalliance/custom/components/datatables/base/data-ajax.js'
            ]);

    }

}