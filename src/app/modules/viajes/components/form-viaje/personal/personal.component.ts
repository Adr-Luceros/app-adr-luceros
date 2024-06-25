import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css', '../form-style-components.css']
})
export class PersonalComponent {
  @Input() isDisable: boolean = true;
}
