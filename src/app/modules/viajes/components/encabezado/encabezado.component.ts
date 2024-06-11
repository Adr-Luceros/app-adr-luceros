import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements AfterViewInit {
  @ViewChild('startDate') inputDateInit!: ElementRef;
  @ViewChild('endDate') inputDateEnd!: ElementRef;
  today = new Date()

  constructor() { }

  ngAfterViewInit(): void {
    this.inputDateInit.nativeElement.value = this.today.toISOString().split('T')[0]
    this.inputDateEnd.nativeElement.value = this.today.toISOString().split('T')[0]
  }
}
