import { Component, OnInit } from '@angular/core';
import { Appointment } from '../Shared/Interface/appointment';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
})
export class AppointmentListComponent implements OnInit {
  form!: FormGroup;
  appointments: Appointment[] = [];

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  get f() {
    return this.form.controls;
  }

  buildForm(): void {
    this.form = this.fb.group({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.appointments.push(this.form.value);
      console.log(this.appointments);
      this.form.reset();
    } else {
      alert('Please fill out the form before submitting');
    }
  }
}
