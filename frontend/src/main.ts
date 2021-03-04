import 'hammerjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//if (environment.production) {
//  enableProdMode();
//}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
}).catch(err => console.error(err));

//platformBrowserDynamic().bootstrapModule(AppModule)
//    .catch(err => console.error(err));
