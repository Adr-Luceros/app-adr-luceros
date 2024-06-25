import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css', '../form-style-components.css']
})
export class TiendasComponent {
  @Input() isDisable: boolean = true
}
