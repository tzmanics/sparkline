import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public barData: any[] = [ 22, 24, 29, 17, 20, 15];
  public pieData: any[] = [12, 23, 6];
}
