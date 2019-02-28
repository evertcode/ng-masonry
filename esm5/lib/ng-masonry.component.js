/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ElementRef, EventEmitter, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
export { NgMasonryComponent };
if (false) {
    /** @type {?} */
    NgMasonryComponent.prototype._msnry;
    /** @type {?} */
    NgMasonryComponent.prototype.options;
    /** @type {?} */
    NgMasonryComponent.prototype.useImagesLoaded;
    /** @type {?} */
    NgMasonryComponent.prototype.updateLayout;
    /** @type {?} */
    NgMasonryComponent.prototype.layoutComplete;
    /** @type {?} */
    NgMasonryComponent.prototype.removeComplete;
    /**
     * @type {?}
     * @private
     */
    NgMasonryComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    NgMasonryComponent.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWFzb25yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXNvbnJ5LyIsInNvdXJjZXMiOlsibGliL25nLW1hc29ucnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUtULEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUloRCxZQUFpQjs7SUFDakIsa0JBQXVCO0FBRTNCO0lBWUUsNEJBQXlDLFVBQWUsRUFBVSxRQUFvQjtRQUE3QyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQU10RSxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUN4QyxpQkFBWSxHQUFZLEtBQUssQ0FBQzs7UUFHN0IsbUJBQWMsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUNoRSxtQkFBYyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO0lBWGUsQ0FBQzs7OztJQWExRixxQ0FBUTs7O0lBQVI7UUFBQSxpQkErQkM7UUE5QkMsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDdEQsWUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUMxRSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNoRDtRQUVELGdDQUFnQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNuQjtRQUVELDJCQUEyQjtR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QUFjLE9BQW9CO1FBQ2hDLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1QixlQUFlO1FBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7O2dCQTdIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLDJCQUEyQjs2QkFFbkMsaURBSUY7aUJBRUQ7Ozs7Z0RBRWMsTUFBTSxTQUFDLFdBQVc7Z0JBeEIvQixVQUFVOzs7MEJBNkJULEtBQUs7a0NBQ0wsS0FBSzsrQkFDTCxLQUFLO2lDQUdMLE1BQU07aUNBQ04sTUFBTTs7SUF1R1QseUJBQUM7Q0FBQSxBQTlIRCxJQThIQztTQW5IWSxrQkFBa0I7OztJQUc3QixvQ0FBbUI7O0lBR25CLHFDQUEwQzs7SUFDMUMsNkNBQWlEOztJQUNqRCwwQ0FBdUM7O0lBR3ZDLDRDQUEwRTs7SUFDMUUsNENBQTBFOzs7OztJQVg5RCx3Q0FBNEM7Ozs7O0lBQUUsc0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01hc29ucnlPcHRpb25zIH0gZnJvbSAnLi9uZy1tYXNvbnJ5LW9wdGlvbnMnO1xuXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XG5sZXQgaW1hZ2VzTG9hZGVkOiBhbnk7XG5sZXQgbWFzb25yeUNvbnN0cnVjdG9yOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZy1tYXNvbnJ5XSwgbmctbWFzb25yeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlczogW1xuICAgIGBcblx0XHQ6aG9zdCB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR9XG5cdGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ01hc29ucnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgcHVibGljIF9tc25yeTogYW55O1xuXG4gIC8vIElucHV0c1xuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogTmdNYXNvbnJ5T3B0aW9ucztcbiAgQElucHV0KCkgcHVibGljIHVzZUltYWdlc0xvYWRlZDogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB1cGRhdGVMYXlvdXQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBPdXRwdXRzXG4gIEBPdXRwdXQoKSBsYXlvdXRDb21wbGV0ZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG4gIEBPdXRwdXQoKSByZW1vdmVDb21wbGV0ZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudXNlSW1hZ2VzTG9hZGVkICYmIGltYWdlc0xvYWRlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbWFnZXNMb2FkZWQgPSByZXF1aXJlKCdpbWFnZXNsb2FkZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiBtYXNvbnJ5Q29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbWFzb25yeUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnbWFzb25yeS1sYXlvdXQnKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbWFzb25yeSBvcHRpb25zIG9iamVjdFxuICAgIGlmICghdGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBpdGVtU2VsZWN0b3JcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5pdGVtU2VsZWN0b3IpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5pdGVtU2VsZWN0b3IgPSAnW25nTWFzb25yeUl0ZW1dLCBuZ01hc29ucnlJdGVtJztcbiAgICB9XG5cbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgLy8gSW5pdGlhbGl6ZSBNYXNvbnJ5XG4gICAgICB0aGlzLl9tc25yeSA9IG5ldyBtYXNvbnJ5Q29uc3RydWN0b3IodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAvLyBCaW5kIHRvIGV2ZW50c1xuICAgICAgdGhpcy5fbXNucnkub24oJ2xheW91dENvbXBsZXRlJywgKGl0ZW1zOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5sYXlvdXRDb21wbGV0ZS5lbWl0KGl0ZW1zKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fbXNucnkub24oJ3JlbW92ZUNvbXBsZXRlJywgKGl0ZW1zOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb21wbGV0ZS5lbWl0KGl0ZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyBvbmx5IHVwZGF0ZSBsYXlvdXQgaWYgaXQncyBub3QgdGhlIGZpcnN0IGNoYW5nZVxuICAgIGlmIChjaGFuZ2VzLnVwZGF0ZUxheW91dCkge1xuICAgICAgaWYgKCFjaGFuZ2VzLnVwZGF0ZUxheW91dC5maXJzdENoYW5nZSkge1xuICAgICAgICB0aGlzLmxheW91dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9tc25yeSkge1xuICAgICAgdGhpcy5fbXNucnkuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBsYXlvdXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9tc25yeS5sYXlvdXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZWxvYWRJdGVtcygpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX21zbnJ5LnJlbG9hZEl0ZW1zKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBwdWJsaWMgYWRkKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcmVwZW5kOiBib29sZWFuID0gZmFsc2UpIHtcbiAgcHVibGljIGFkZChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGxldCBpc0ZpcnN0SXRlbSA9IGZhbHNlO1xuXG4gICAgLy8gQ2hlY2sgaWYgZmlyc3QgaXRlbVxuICAgIGlmICh0aGlzLl9tc25yeS5pdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlzRmlyc3RJdGVtID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51c2VJbWFnZXNMb2FkZWQpIHtcbiAgICAgIGltYWdlc0xvYWRlZChlbGVtZW50LCAoaW5zdGFuY2U6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gVGVsbCBNYXNvbnJ5IHRoYXQgYSBjaGlsZCBlbGVtZW50IGhhcyBiZWVuIGFkZGVkXG4gICAgICAgIHRoaXMuX21zbnJ5LmFwcGVuZGVkKGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIGxheW91dCBpZiBmaXJzdCBpdGVtXG4gICAgICAgIGlmIChpc0ZpcnN0SXRlbSkge1xuICAgICAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRlbGwgTWFzb25yeSB0aGF0IGEgY2hpbGQgZWxlbWVudCBoYXMgYmVlbiBhZGRlZFxuICAgICAgdGhpcy5fbXNucnkuYXBwZW5kZWQoZWxlbWVudCk7XG5cbiAgICAgIC8vIGxheW91dCBpZiBmaXJzdCBpdGVtXG4gICAgICBpZiAoaXNGaXJzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgLy8gVGVsbCBNYXNvbnJ5IHRoYXQgYSBjaGlsZCBlbGVtZW50IGhhcyBiZWVuIHJlbW92ZWRcbiAgICB0aGlzLl9tc25yeS5yZW1vdmUoZWxlbWVudCk7XG5cbiAgICAvLyBMYXlvdXQgaXRlbXNcbiAgICB0aGlzLmxheW91dCgpO1xuICB9XG59Il19