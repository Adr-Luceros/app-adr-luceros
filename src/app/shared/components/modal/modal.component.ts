import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [CommonModule],
})
export class ModalComponent {
  @ViewChild('asContainerModal') containerModal!: ElementRef;
  @Input() withClickDesactiveModal: boolean = true;
  @Input() hasBtnEdit: boolean = false;

  constructor(
    private modalSrv: ModalService
  ) { }

  public closeModal($event: any) {
    const container = this.containerModal.nativeElement;
    if ($event === container && this.withClickDesactiveModal) {
      this.emitCloseModal();
    }
  }

  public emitCloseModal() {
    this.modalSrv.activatedModal$.emit(false);
  }

  public onhasActiveEditableChange() {
    this.hasBtnEdit = false;
    this.modalSrv.hasBtnEdit$.emit(this.hasBtnEdit);
  }
}
