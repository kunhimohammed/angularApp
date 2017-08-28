//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

console.log('ggggggggg');

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>it's me {{name}}</h2>
    </div>
  `,
})
export class App {
  name:string;
  constructor() {
    this.name = `Kunhi Mohamed C`
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}