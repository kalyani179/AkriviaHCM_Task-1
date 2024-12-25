import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    if (form.invalid) {
      console.log('Form is invalid');
      return;
    }

    const loginData = form.value;  // Get form data
    console.log('Login data:', loginData);

    this.http.post('http://localhost:3000/login', loginData)
      .subscribe({
        next: (response: any) => {
          console.log('Login successful:', response);
          // Store the JWT token in localStorage
          localStorage.setItem('authToken', response.token);
        },
        error: (err) => {
          console.error('Error during login:', err);
          alert('Invalid email or password');
        }
      });
  }
}
