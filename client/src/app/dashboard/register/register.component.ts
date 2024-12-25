import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  model: any = {};

  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('Form is invalid');
      form.control.markAllAsTouched();
      return;
    }

    const userData = form.value;  // Get form data

    console.log(userData); 

    this.http.post('http://localhost:3000/register', userData)
      .subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          alert('Registration successful');
        },
        error: (err) => {
          console.error('Error during registration:', err);
          alert('Registration failed');
        }
      });
  }
}
