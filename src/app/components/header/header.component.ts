import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() collapseSidebar: boolean = false;
  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();
  toggleHamburger() {
    this.collapseSidebar = !this.collapseSidebar;
    console.log(this.collapseSidebar);

    this.toggleSidebar.emit(this.collapseSidebar);
  }
}
