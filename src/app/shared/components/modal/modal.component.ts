import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
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

  constructor(
    private modalSrv: ModalService
  ){}

  public closeModal($event: any) {
    const container = this.containerModal.nativeElement;
    if($event === container) {
      this.emitCloseModal();
    }
  }

  public emitCloseModal() {
    this.modalSrv.activatedModal$.emit(false);
  }
}
