import { Component } from '@angular/core';
import { Appointment } from '../Shared/Interface/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
})
export class AppointmentListComponent {
  appointment: Appointment = {
    id: 1,
    title: 'take dog for a walk',
    date: new Date('2023-07-30'),
  };
}
