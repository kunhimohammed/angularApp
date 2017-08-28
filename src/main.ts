//main entry point
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './application/app.module';

console.log({AppModule});

platformBrowserDynamic().bootstrapModule(AppModule)