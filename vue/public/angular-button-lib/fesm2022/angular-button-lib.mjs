import * as i0 from '@angular/core';
import { Component, NgModule, Injectable } from '@angular/core';
import { createCustomElement } from '@angular/elements';

class AngularButtonLibComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: AngularButtonLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.5", type: AngularButtonLibComponent, isStandalone: true, selector: "lib-angular-button", ngImport: i0, template: `<button class="bn31" role="button">
    This is an angular library button
  </button> `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: AngularButtonLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-angular-button', imports: [], template: `<button class="bn31" role="button">
    This is an angular library button
  </button> ` }]
        }] });

class MyLibraryWebComponentModule {
    injector;
    constructor(injector) {
        this.injector = injector;
    }
    ngDoBootstrap(appRef) {
        const customElement = createCustomElement(AngularButtonLibComponent, {
            injector: this.injector,
        });
        customElements.define('angular-lib-button', customElement);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: MyLibraryWebComponentModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.0.5", ngImport: i0, type: MyLibraryWebComponentModule, imports: [AngularButtonLibComponent], exports: [AngularButtonLibComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: MyLibraryWebComponentModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: MyLibraryWebComponentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [AngularButtonLibComponent],
                    exports: [AngularButtonLibComponent],
                }]
        }], ctorParameters: () => [{ type: i0.Injector }] });

class AngularButtonLibService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: AngularButtonLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: AngularButtonLibService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: AngularButtonLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

/*
 * Public API Surface of angular-button-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularButtonLibComponent, AngularButtonLibService, MyLibraryWebComponentModule };
//# sourceMappingURL=angular-button-lib.mjs.map
