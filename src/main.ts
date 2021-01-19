// main app entry point
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

const test = "vide";
const test3 = "vide";
const test5 = "vide";
const test6 = "vide";
const test7 = "vide";

platformBrowserDynamic().bootstrapModule(AppModule);
