import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  addItem: boolean = false;
  @Output() searchChanged = new EventEmitter<string>();

  activateSearchChanged($event: any): void {
    this.searchChanged.emit($event.target.value);
  }
}
