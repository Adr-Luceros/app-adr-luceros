import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pickings',
  templateUrl: './pickings.component.html',
  styleUrls: ['./pickings.component.css', '../form-style-components.css']
})
export class PickingsComponent {
  @Input() isDisable: boolean = true;
}
