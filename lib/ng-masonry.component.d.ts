import { OnInit, OnChanges, SimpleChanges, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { NgMasonryOptions } from './ng-masonry-options';
export declare class NgMasonryComponent implements OnInit, OnChanges, OnDestroy {
    private platformId;
    private _element;
    constructor(platformId: any, _element: ElementRef);
    _msnry: any;
    options: NgMasonryOptions;
    useImagesLoaded: Boolean;
    updateLayout: Boolean;
    layoutComplete: EventEmitter<any[]>;
    removeComplete: EventEmitter<any[]>;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    layout(): void;
    reloadItems(): void;
    add(element: HTMLElement): void;
    remove(element: HTMLElement): void;
}
