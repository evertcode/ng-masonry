import { isPlatformBrowser } from '@angular/common';
import { Component, Input, Output, ElementRef, EventEmitter, PLATFORM_ID, Inject, Directive, forwardRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var imagesLoaded;
/** @type {?} */
var masonryConstructor;
var NgMasonryComponent = /** @class */ (function () {
    function NgMasonryComponent(platformId, _element) {
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
    NgMasonryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            function (items) {
                _this.layoutComplete.emit(items);
            }));
            this._msnry.on('removeComplete', (/**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                _this.removeComplete.emit(items);
            }));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgMasonryComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // only update layout if it's not the first change
        if (changes.updateLayout) {
            if (!changes.updateLayout.firstChange) {
                this.layout();
            }
        }
    };
    /**
     * @return {?}
     */
    NgMasonryComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._msnry) {
            this._msnry.destroy();
        }
    };
    /**
     * @return {?}
     */
    NgMasonryComponent.prototype.layout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._msnry.layout();
        }));
    };
    /**
     * @return {?}
     */
    NgMasonryComponent.prototype.reloadItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._msnry.reloadItems();
        }));
    };
    // public add(element: HTMLElement, prepend: boolean = false) {
    // public add(element: HTMLElement, prepend: boolean = false) {
    /**
     * @param {?} element
     * @return {?}
     */
    NgMasonryComponent.prototype.add = 
    // public add(element: HTMLElement, prepend: boolean = false) {
    /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        /** @type {?} */
        var isFirstItem = false;
        // Check if first item
        if (this._msnry.items.length === 0) {
            isFirstItem = true;
        }
        if (this.useImagesLoaded) {
            imagesLoaded(element, (/**
             * @param {?} instance
             * @return {?}
             */
            function (instance) {
                _this._element.nativeElement.appendChild(element);
                // Tell Masonry that a child element has been added
                _this._msnry.appended(element);
                // layout if first item
                if (isFirstItem) {
                    _this.layout();
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
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgMasonryComponent.prototype.remove = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        // Tell Masonry that a child element has been removed
        this._msnry.remove(element);
        // Layout items
        this.layout();
    };
    NgMasonryComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ng-masonry], ng-masonry',
                    template: '<ng-content></ng-content>',
                    styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"]
                }] }
    ];
    /** @nocollapse */
    NgMasonryComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef }
    ]; };
    NgMasonryComponent.propDecorators = {
        options: [{ type: Input }],
        useImagesLoaded: [{ type: Input }],
        updateLayout: [{ type: Input }],
        layoutComplete: [{ type: Output }],
        removeComplete: [{ type: Output }]
    };
    return NgMasonryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgMasonryDirective = /** @class */ (function () {
    function NgMasonryDirective(_element, _parent, platformId) {
        this._element = _element;
        this._parent = _parent;
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    NgMasonryDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this._parent.add(this._element.nativeElement);
            this.watchForHtmlChanges();
        }
    };
    /**
     * @return {?}
     */
    NgMasonryDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this._parent.remove(this._element.nativeElement);
        }
    };
    /** When HTML in brick changes dinamically, observe that and change layout */
    /**
     * When HTML in brick changes dinamically, observe that and change layout
     * @private
     * @return {?}
     */
    NgMasonryDirective.prototype.watchForHtmlChanges = /**
     * When HTML in brick changes dinamically, observe that and change layout
     * @private
     * @return {?}
     */
    function () {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (MutationObserver) {
            /**
             * Watch for any changes to subtree
             * @type {?}
             */
            var self_1 = this;
            /** @type {?} */
            var observer = new MutationObserver((/**
             * @param {?} mutations
             * @param {?} observerFromElement
             * @return {?}
             */
            function (mutations, observerFromElement) {
                self_1._parent.layout();
            }));
            // define what element should be observed by the observer
            // and what types of mutations trigger the callback
            observer.observe(this._element.nativeElement, {
                subtree: true,
                childList: true
            });
        }
    };
    NgMasonryDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngMasonryItem], ngMasonryItem'
                },] }
    ];
    /** @nocollapse */
    NgMasonryDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgMasonryComponent, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return NgMasonryComponent; })),] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return NgMasonryDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgMasonryModule = /** @class */ (function () {
    function NgMasonryModule() {
    }
    NgMasonryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgMasonryComponent, NgMasonryDirective],
                    imports: [],
                    exports: [NgMasonryComponent, NgMasonryDirective]
                },] }
    ];
    return NgMasonryModule;
}());

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