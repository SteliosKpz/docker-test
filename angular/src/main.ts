import {
  bootstrapApplication,
  createApplication,
} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { AngularButtonComponent } from './angular-button/angular-button.component';
import { AppComponent } from './app/app.component';

createApplication(appConfig).then((app) => {
  const angularBtn = createCustomElement(AngularButtonComponent, {
    injector: app.injector,
  });
  customElements.define('angular-button', angularBtn);
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
