import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading1 = 'Inside Root component';
  name:string ="insid call";
  fun() {
    this.name="Button clicked";
  }
}
