
import { Component } from '@angular/core';
import { FlagsService } from './services/flags.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'couponStore';

  constructor(public f: FlagsService) { }

}
