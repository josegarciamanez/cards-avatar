import { Component } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
})
export class DbzComponent {
  constructor(private demoService: DemoService) {}
  public console() {
    console.log('debugger');
  }
}
