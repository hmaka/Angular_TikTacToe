import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  {{value}}
  `,
  styles: [
  ]
})
export class SquareComponent {
  @Input() value: 'X' | 'O' = "X";
}
