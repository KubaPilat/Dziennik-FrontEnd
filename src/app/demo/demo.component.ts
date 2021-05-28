import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'mwl-demo-utils-calendar-header',
  templateUrl: `./demo.component.html`,
})
// CamelCase, nazwa komponentu nie jest zgoda z plikiem, wprowadza to w błąd
export class helpToCalendar {
  // @ts-ignore
  @Input() view: CalendarView;

  // @ts-ignore
  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;
}
