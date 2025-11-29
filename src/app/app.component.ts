import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormPage } from './pages/form-page/form-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario-acortador';
}
