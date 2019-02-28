import { ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { NgMasonryComponent } from './ng-masonry.component';
export declare class NgMasonryDirective implements OnDestroy, AfterViewInit {
    private _element;
    private _parent;
    private platformId;
    constructor(_element: ElementRef, _parent: NgMasonryComponent, platformId: any);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** When HTML in brick changes dinamically, observe that and change layout */
    private watchForHtmlChanges;
}
