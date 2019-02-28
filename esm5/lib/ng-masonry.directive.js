/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, ElementRef, forwardRef, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgMasonryComponent } from './ng-masonry.component';
/**
 * @record
 */
function MutationWindow() { }
if (false) {
    /** @type {?} */
    MutationWindow.prototype.MutationObserver;
    /** @type {?} */
    MutationWindow.prototype.WebKitMutationObserver;
}
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
export { NgMasonryDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgMasonryDirective.prototype._element;
    /**
     * @type {?}
     * @private
     */
    NgMasonryDirective.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    NgMasonryDirective.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWFzb25yeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXNvbnJ5LyIsInNvdXJjZXMiOlsibGliL25nLW1hc29ucnkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUE0QixXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFNUQsNkJBR0M7OztJQUZDLDBDQUFzQjs7SUFDdEIsZ0RBQTRCOztBQUs5QjtJQUlFLDRCQUNVLFFBQW9CLEVBRXBCLE9BQTJCLEVBQ04sVUFBZTtRQUhwQyxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBRXBCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQ04sZUFBVSxHQUFWLFVBQVUsQ0FBSztJQUMzQyxDQUFDOzs7O0lBRUosNENBQWU7OztJQUFmO1FBQ0UsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVELDZFQUE2RTs7Ozs7O0lBQ3JFLGdEQUFtQjs7Ozs7SUFBM0I7UUFDRSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLElBQUksTUFBTSxDQUFDLHNCQUFzQixDQUFDO1FBRTVFLElBQUksZ0JBQWdCLEVBQUU7Ozs7O2dCQUVkLE1BQUksR0FBRyxJQUFJOztnQkFDWCxRQUFRLEdBQUcsSUFBSSxnQkFBZ0I7Ozs7O1lBQUMsVUFBUyxTQUFTLEVBQUUsbUJBQW1CO2dCQUMzRSxNQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLENBQUMsRUFBQztZQUVGLHlEQUF5RDtZQUN6RCxtREFBbUQ7WUFDbkQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtnQkFDNUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7aUJBQzNDOzs7O2dCQWQyQixVQUFVO2dCQUc3QixrQkFBa0IsdUJBZXRCLE1BQU0sU0FBQyxVQUFVOzs7d0JBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixFQUFDO2dEQUUzQyxNQUFNLFNBQUMsV0FBVzs7SUFtQ3ZCLHlCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0F4Q1ksa0JBQWtCOzs7Ozs7SUFFM0Isc0NBQTRCOzs7OztJQUM1QixxQ0FDbUM7Ozs7O0lBQ25DLHdDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTWFzb25yeUNvbXBvbmVudCB9IGZyb20gJy4vbmctbWFzb25yeS5jb21wb25lbnQnO1xuXG5pbnRlcmZhY2UgTXV0YXRpb25XaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBNdXRhdGlvbk9ic2VydmVyOiBhbnk7XG4gIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXI6IGFueTtcbn1cblxuZGVjbGFyZSB2YXIgd2luZG93OiBNdXRhdGlvbldpbmRvdztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nTWFzb25yeUl0ZW1dLCBuZ01hc29ucnlJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ01hc29ucnlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBOZ01hc29ucnlDb21wb25lbnQpKVxuICAgIHByaXZhdGUgX3BhcmVudDogTmdNYXNvbnJ5Q29tcG9uZW50LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55XG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5hZGQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMud2F0Y2hGb3JIdG1sQ2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLl9wYXJlbnQucmVtb3ZlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFdoZW4gSFRNTCBpbiBicmljayBjaGFuZ2VzIGRpbmFtaWNhbGx5LCBvYnNlcnZlIHRoYXQgYW5kIGNoYW5nZSBsYXlvdXQgKi9cbiAgcHJpdmF0ZSB3YXRjaEZvckh0bWxDaGFuZ2VzKCk6IHZvaWQge1xuICAgIE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxuICAgIGlmIChNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAvKiogV2F0Y2ggZm9yIGFueSBjaGFuZ2VzIHRvIHN1YnRyZWUgKi9cbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMsIG9ic2VydmVyRnJvbUVsZW1lbnQpIHtcbiAgICAgICAgc2VsZi5fcGFyZW50LmxheW91dCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGRlZmluZSB3aGF0IGVsZW1lbnQgc2hvdWxkIGJlIG9ic2VydmVkIGJ5IHRoZSBvYnNlcnZlclxuICAgICAgLy8gYW5kIHdoYXQgdHlwZXMgb2YgbXV0YXRpb25zIHRyaWdnZXIgdGhlIGNhbGxiYWNrXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwge1xuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSJdfQ==