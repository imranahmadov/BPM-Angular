import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-process-category',
  templateUrl: './process-category.component.html',
  styleUrls: ['./process-category.component.scss'],
})
export class ProcessCategoryComponent {
  @ViewChild('tabCard') tabCard!: ElementRef<HTMLDivElement>;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Input() category: any;
  @Input() allCategories: any[] = [];

  toggleActiveState() {
    this.allCategories.forEach((element) => {
      if (element != this.category) {
        element.active = false;
      } else {
        element.active = !element.active;
      }
    });

    if (this.category.active) {
      this.toggle.emit(this.tabCard);
    }
  }
}
