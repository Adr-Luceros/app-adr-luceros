import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiderbarService {
  activatedSidebar$: EventEmitter<boolean> = new EventEmitter<boolean>();
}
