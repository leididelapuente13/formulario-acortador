import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UrlShortenerService } from '../../services/ShortenService';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    MessageModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './form-page.html',
  styleUrls: ['./form-page.css']
})
export class FormPage {
  url = '';
  shortUrl = '';
  originalUrl = '';
  loading = false;
  error = '';

  readonly urlService = inject(UrlShortenerService);
  readonly messageService = inject(MessageService)

  shortenUrl() {
    console.log("ddee")

    if (!this.url) {
      console.error('Por favor ingresa una URL')
      this.error = 'Por favor ingresa una URL';
      return;
    }

    console.log("ddee")

    this.loading = true;
    this.error = '';
    this.shortUrl = '';

    this.urlService.shortenUrl(this.url).subscribe({
      next: (response) => {
        this.shortUrl = response.shortUrl;
        this.originalUrl = response.originalUrl;
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'URL acortada correctamente'
        });
      },
      error: (err) => {
        this.error = 'Error al acortar la URL. Intenta de nuevo.';
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo acortar la URL'
        });
      }
    });
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.shortUrl);
    this.messageService.add({
      severity: 'success',
      summary: 'Copiado',
      detail: 'URL copiada al portapapeles'
    });
  }

  openOriginalUrl() {
    if (this.originalUrl) {
      window.open(this.originalUrl, '_blank');
    }
  }

  reset() {
    this.url = '';
    this.shortUrl = '';
    this.originalUrl = '';
    this.error = '';
  }
}
