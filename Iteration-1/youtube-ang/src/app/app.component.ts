import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project CC';
  devName: String

  constructor() {
    this.devName = 'Karan'
    this.doSomething(this.devName)
  }

  doSomething(msg: String): void {
    console.log(`${msg} developed this app with Youtube!!`)
  }
}
