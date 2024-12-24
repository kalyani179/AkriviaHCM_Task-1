import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule], // Import FormsModule for ngModel
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';

  register(form: any): void {
    if (form.valid) {
      console.log('Form Submitted', {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
