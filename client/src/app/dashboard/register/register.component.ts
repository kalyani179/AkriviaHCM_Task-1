import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,NgIf,CommonModule], // Import FormsModule for ngModel (template-driven form)
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  model: any = {}; // Initialize model (e.g., empty object)

  onSubmit(form: NgForm) {
    console.log(form);  // Log form state for debugging
    if (form.invalid) {
        console.log('Form is invalid');
        form.control.markAllAsTouched();
        return;
    }
    console.log('Form is valid');
  }

}
