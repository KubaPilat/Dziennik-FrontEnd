// zbędny import
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
// Potrzebujesz całego komponentu do kalendarza, sam anuglar datepicker nie wystarcza?, ponownie ;)
export class CalendarComponent {

  // enkapsulacja, ponownie ;)
  view: CalendarView = CalendarView.Month;
// enkapsulacja
  viewDate: Date = new Date();
// enkapsulacja
  events: CalendarEvent[] = [
    {
      title: 'Editable event',
      start: new Date(),
      actions: [
        {
          label: '<i class="fas fa-fw fa-pencil-alt"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            console.log('Edit event', event);
          },
        },
      ],
    },
    {
      title: 'Deletable event',
      start: new Date(),
      actions: [
        {
          label: '<i class="fas fa-fw fa-trash-alt"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter((iEvent) => iEvent !== event);
            console.log('Event deleted', event);
          },
        },
      ],
    },
    {
      title: 'Non editable and deletable event',
      start: new Date(),
    },
  ];

}
