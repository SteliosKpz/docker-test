import { ApplicationRef, DoBootstrap, Injector } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./angular-button-lib.component";
export declare class MyLibraryWebComponentModule implements DoBootstrap {
    private injector;
    constructor(injector: Injector);
    ngDoBootstrap(appRef: ApplicationRef): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyLibraryWebComponentModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MyLibraryWebComponentModule, never, [typeof i1.AngularButtonLibComponent], [typeof i1.AngularButtonLibComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MyLibraryWebComponentModule>;
}
