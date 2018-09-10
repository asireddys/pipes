import { Component, OnInit ,Pipe} from '@angular/core';
@Component({
  selector: 'app-multiple',
  template: `
  <p>Multiplier:{{2|muti:10}}</p>
  `,
  styles: []
})

export class MultipleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
