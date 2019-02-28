/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ElementRef, EventEmitter, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
/** @type {?} */
let imagesLoaded;
/** @type {?} */
let masonryConstructor;
export class NgMasonryComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWFzb25yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXNvbnJ5LyIsInNvdXJjZXMiOlsibGliL25nLW1hc29ucnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUtULEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUloRCxZQUFpQjs7SUFDakIsa0JBQXVCO0FBYTNCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBQzdCLFlBQXlDLFVBQWUsRUFBVSxRQUFvQjtRQUE3QyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQU10RSxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUN4QyxpQkFBWSxHQUFZLEtBQUssQ0FBQzs7UUFHN0IsbUJBQWMsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUNoRSxtQkFBYyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO0lBWGUsQ0FBQzs7OztJQWExRixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDdEQsWUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUMxRSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNoRDtRQUVELGdDQUFnQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNuQjtRQUVELDJCQUEyQjtR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QU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1QixlQUFlO1FBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7OztZQTdIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLDJCQUEyQjt5QkFFbkM7Ozs7RUFJRjthQUVEOzs7OzRDQUVjLE1BQU0sU0FBQyxXQUFXO1lBeEIvQixVQUFVOzs7c0JBNkJULEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUdMLE1BQU07NkJBQ04sTUFBTTs7OztJQVRQLG9DQUFtQjs7SUFHbkIscUNBQTBDOztJQUMxQyw2Q0FBaUQ7O0lBQ2pELDBDQUF1Qzs7SUFHdkMsNENBQTBFOztJQUMxRSw0Q0FBMEU7Ozs7O0lBWDlELHdDQUE0Qzs7Ozs7SUFBRSxzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgUExBVEZPUk1fSUQsXG4gIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTWFzb25yeU9wdGlvbnMgfSBmcm9tICcuL25nLW1hc29ucnktb3B0aW9ucyc7XG5cbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcbmxldCBpbWFnZXNMb2FkZWQ6IGFueTtcbmxldCBtYXNvbnJ5Q29uc3RydWN0b3I6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nLW1hc29ucnldLCBuZy1tYXNvbnJ5JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuXHRcdDpob3N0IHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblx0YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nTWFzb25yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBwdWJsaWMgX21zbnJ5OiBhbnk7XG5cbiAgLy8gSW5wdXRzXG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBOZ01hc29ucnlPcHRpb25zO1xuICBASW5wdXQoKSBwdWJsaWMgdXNlSW1hZ2VzTG9hZGVkOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHVwZGF0ZUxheW91dDogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIE91dHB1dHNcbiAgQE91dHB1dCgpIGxheW91dENvbXBsZXRlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIHJlbW92ZUNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy51c2VJbWFnZXNMb2FkZWQgJiYgaW1hZ2VzTG9hZGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGltYWdlc0xvYWRlZCA9IHJlcXVpcmUoJ2ltYWdlc2xvYWRlZCcpO1xuICAgIH1cblxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIG1hc29ucnlDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBtYXNvbnJ5Q29uc3RydWN0b3IgPSByZXF1aXJlKCdtYXNvbnJ5LWxheW91dCcpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBtYXNvbnJ5IG9wdGlvbnMgb2JqZWN0XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIC8vIFNldCBkZWZhdWx0IGl0ZW1TZWxlY3RvclxuICAgIGlmICghdGhpcy5vcHRpb25zLml0ZW1TZWxlY3Rvcikge1xuICAgICAgdGhpcy5vcHRpb25zLml0ZW1TZWxlY3RvciA9ICdbbmdNYXNvbnJ5SXRlbV0sIG5nTWFzb25yeUl0ZW0nO1xuICAgIH1cblxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAvLyBJbml0aWFsaXplIE1hc29ucnlcbiAgICAgIHRoaXMuX21zbnJ5ID0gbmV3IG1hc29ucnlDb25zdHJ1Y3Rvcih0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgIC8vIEJpbmQgdG8gZXZlbnRzXG4gICAgICB0aGlzLl9tc25yeS5vbignbGF5b3V0Q29tcGxldGUnLCAoaXRlbXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmxheW91dENvbXBsZXRlLmVtaXQoaXRlbXMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9tc25yeS5vbigncmVtb3ZlQ29tcGxldGUnLCAoaXRlbXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUNvbXBsZXRlLmVtaXQoaXRlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vIG9ubHkgdXBkYXRlIGxheW91dCBpZiBpdCdzIG5vdCB0aGUgZmlyc3QgY2hhbmdlXG4gICAgaWYgKGNoYW5nZXMudXBkYXRlTGF5b3V0KSB7XG4gICAgICBpZiAoIWNoYW5nZXMudXBkYXRlTGF5b3V0LmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21zbnJ5KSB7XG4gICAgICB0aGlzLl9tc25yeS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGxheW91dCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX21zbnJ5LmxheW91dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbG9hZEl0ZW1zKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fbXNucnkucmVsb2FkSXRlbXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBhZGQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByZXBlbmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICBwdWJsaWMgYWRkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgbGV0IGlzRmlyc3RJdGVtID0gZmFsc2U7XG5cbiAgICAvLyBDaGVjayBpZiBmaXJzdCBpdGVtXG4gICAgaWYgKHRoaXMuX21zbnJ5Lml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaXNGaXJzdEl0ZW0gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVzZUltYWdlc0xvYWRlZCkge1xuICAgICAgaW1hZ2VzTG9hZGVkKGVsZW1lbnQsIChpbnN0YW5jZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgICAgICAvLyBUZWxsIE1hc29ucnkgdGhhdCBhIGNoaWxkIGVsZW1lbnQgaGFzIGJlZW4gYWRkZWRcbiAgICAgICAgdGhpcy5fbXNucnkuYXBwZW5kZWQoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gbGF5b3V0IGlmIGZpcnN0IGl0ZW1cbiAgICAgICAgaWYgKGlzRmlyc3RJdGVtKSB7XG4gICAgICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGVsbCBNYXNvbnJ5IHRoYXQgYSBjaGlsZCBlbGVtZW50IGhhcyBiZWVuIGFkZGVkXG4gICAgICB0aGlzLl9tc25yeS5hcHBlbmRlZChlbGVtZW50KTtcblxuICAgICAgLy8gbGF5b3V0IGlmIGZpcnN0IGl0ZW1cbiAgICAgIGlmIChpc0ZpcnN0SXRlbSkge1xuICAgICAgICB0aGlzLmxheW91dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAvLyBUZWxsIE1hc29ucnkgdGhhdCBhIGNoaWxkIGVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZFxuICAgIHRoaXMuX21zbnJ5LnJlbW92ZShlbGVtZW50KTtcblxuICAgIC8vIExheW91dCBpdGVtc1xuICAgIHRoaXMubGF5b3V0KCk7XG4gIH1cbn0iXX0=