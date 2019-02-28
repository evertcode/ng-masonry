import { isPlatformBrowser } from '@angular/common';
import { Component, Input, Output, ElementRef, EventEmitter, PLATFORM_ID, Inject, Directive, forwardRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let imagesLoaded;
/** @type {?} */
let masonryConstructor;
class NgMasonryComponent {
    /**
     * @param {?} platformId
     * @param {?} _element
     */
    constructor(platformId, _element) {
        this.platformId = platformId;
        this._element = _element;
        this.useImagesLoaded = false;
        this.updateLayout = false;
        // Outputs
        this.layoutComplete = new EventEmitter();
        this.removeComplete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.useImagesLoaded && imagesLoaded === undefined) {
            imagesLoaded = require('imagesloaded');
        }
        if (isPlatformBrowser(this.platformId) && masonryConstructor === undefined) {
            masonryConstructor = require('masonry-layout');
        }
        // Create masonry options object
        if (!this.options) {
            this.options = {};
        }
        // Set default itemSelector
        if (!this.options.itemSelector) {
            this.options.itemSelector = '[ngMasonryItem], ngMasonryItem';
        }
        if (isPlatformBrowser(this.platformId)) {
            // Initialize Masonry
            this._msnry = new masonryConstructor(this._element.nativeElement, this.options);
            // Bind to events
            this._msnry.on('layoutComplete', (/**
             * @param {?} items
             * @return {?}
             */
            (items) => {
                this.layoutComplete.emit(items);
            }));
            this._msnry.on('removeComplete', (/**
             * @param {?} items
             * @return {?}
             */
            (items) => {
                this.removeComplete.emit(items);
            }));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // only update layout if it's not the first change
        if (changes.updateLayout) {
            if (!changes.updateLayout.firstChange) {
                this.layout();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._msnry) {
            this._msnry.destroy();
        }
    }
    /**
     * @return {?}
     */
    layout() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._msnry.layout();
        }));
    }
    /**
     * @return {?}
     */
    reloadItems() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._msnry.reloadItems();
        }));
    }
    // public add(element: HTMLElement, prepend: boolean = false) {
    /**
     * @param {?} element
     * @return {?}
     */
    add(element) {
        /** @type {?} */
        let isFirstItem = false;
        // Check if first item
        if (this._msnry.items.length === 0) {
            isFirstItem = true;
        }
        if (this.useImagesLoaded) {
            imagesLoaded(element, (/**
             * @param {?} instance
             * @return {?}
             */
            (instance) => {
                this._element.nativeElement.appendChild(element);
                // Tell Masonry that a child element has been added
                this._msnry.appended(element);
                // layout if first item
                if (isFirstItem) {
                    this.layout();
                }
            }));
            this._element.nativeElement.removeChild(element);
        }
        else {
            // Tell Masonry that a child element has been added
            this._msnry.appended(element);
            // layout if first item
            if (isFirstItem) {
                this.layout();
            }
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    remove(element) {
        // Tell Masonry that a child element has been removed
        this._msnry.remove(element);
        // Layout items
        this.layout();
    }
}
NgMasonryComponent.decorators = [
    { type: Component, args: [{
                selector: '[ng-masonry], ng-masonry',
                template: '<ng-content></ng-content>',
                styles: [`
		:host {
			display: block;
		}
	`]
            }] }
];
/** @nocollapse */
NgMasonryComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef }
];
NgMasonryComponent.propDecorators = {
    options: [{ type: Input }],
    useImagesLoaded: [{ type: Input }],
    updateLayout: [{ type: Input }],
    layoutComplete: [{ type: Output }],
    removeComplete: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgMasonryDirective {
    /**
     * @param {?} _element
     * @param {?} _parent
     * @param {?} platformId
     */
    constructor(_element, _parent, platformId) {
        this._element = _element;
        this._parent = _parent;
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this._parent.add(this._element.nativeElement);
            this.watchForHtmlChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            this._parent.remove(this._element.nativeElement);
        }
    }
    /**
     * When HTML in brick changes dinamically, observe that and change layout
     * @private
     * @return {?}
     */
    watchForHtmlChanges() {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (MutationObserver) {
            /**
             * Watch for any changes to subtree
             * @type {?}
             */
            const self = this;
            /** @type {?} */
            const observer = new MutationObserver((/**
             * @param {?} mutations
             * @param {?} observerFromElement
             * @return {?}
             */
            function (mutations, observerFromElement) {
                self._parent.layout();
            }));
            // define what element should be observed by the observer
            // and what types of mutations trigger the callback
            observer.observe(this._element.nativeElement, {
                subtree: true,
                childList: true
            });
        }
    }
}
NgMasonryDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngMasonryItem], ngMasonryItem'
            },] }
];
/** @nocollapse */
NgMasonryDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgMasonryComponent, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => NgMasonryComponent)),] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgMasonryModule {
}
NgMasonryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgMasonryComponent, NgMasonryDirective],
                imports: [],
                exports: [NgMasonryComponent, NgMasonryDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgMasonryComponent, NgMasonryDirective, NgMasonryModule };

//# sourceMappingURL=ng-masonry.js.map