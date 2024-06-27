import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [CommonModule],
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('asContainerModal') containerModal!: ElementRef;
  @Input() withClickDesactiveModal: boolean = true;
  @Input() hasBtnEdit: boolean = false;
  btnSaveSubcription: Subscription = new Subscription();

  constructor(
    private modalSrv: ModalService
  ) { }

  ngOnInit(): void {
    this.btnSaveSubcription = this.modalSrv.hasBtnEdit$.subscribe(res => {
      this.hasBtnEdit = res;
    })
  }

  ngOnDestroy(): void {
    this.btnSaveSubcription.unsubscribe();
  }

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
