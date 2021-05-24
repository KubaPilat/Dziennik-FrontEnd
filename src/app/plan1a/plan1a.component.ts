import { Component } from '@angular/core';

export interface PeriodicElement {
  monday: string;
  hours: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {hours: '08:00 - 08:45', monday: 'His', tuesday:'Biologia', wednesday: 'W-f', thursday:'Informatyka', friday:'Angielski'},
  {hours: '08:55 - 09:40', monday: 'WF', tuesday:'Fizyka', wednesday: 'chemia', thursday:'Biologia', friday:'WF'},
  {hours: '09:50 - 10:35', monday: 'Informatyka', tuesday:'chemia', wednesday: 'Angielski', thursday:'WF', friday:'Polski'},
  {hours: '10:40 - 11:25', monday: 'Polski', tuesday:'Angielski', wednesday: 'Polski', thursday:'chemia', friday:'Informatyka'},
  {hours: '11:40 - 12:25', monday: 'Angielski', tuesday:'W-F', wednesday: 'Matematyka', thursday:'Niemiecki', friday:'Niemiecki'},
  {hours: '12:45 - 13:30', monday: 'Niemiecki', tuesday:'Matematyka', wednesday: 'chemia', thursday:'Angielski', friday:'chemia'},
  {hours: '13:40 - 14:25', monday: 'W-f', tuesday:'Angielski', wednesday: 'fizyka', thursday:'Polski', friday:'Biologia'},
  {hours: '14:30 - 15:15', monday: '', tuesday:'Informatyka', wednesday: 'Biologia', thursday:'', friday:''},
];

@Component({
  selector: 'app-plan1a',
  templateUrl: './plan1a.component.html',
  styleUrls: ['./plan1a.component.css']
})

export class Plan1aComponent{
  displayedColumns: string[] = ['hours', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  dataSource = ELEMENT_DATA;
}
