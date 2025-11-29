import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ShortenResponse {
  shortCode: string;
  shortUrl: string;
  originalUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  private apiUrl = 'https://v6d8eib0zb.execute-api.us-west-1.amazonaws.com';

  constructor(private http: HttpClient) { }

  shortenUrl(url: string): Observable<ShortenResponse> {
    console.log("ddee")
    return this.http.post<ShortenResponse>(`${this.apiUrl}/url_shortener`, { url });
  }
}
