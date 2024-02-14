import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_ENDPOINTS } from '../../core/config/api.config';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private http: HttpClient) {}

    getUserInformation(): Observable<any> {
        return this.http.get('/assets/json-data/user-information.json').pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Observable<never> {
        console.error('An error occurred:', error);
        throw error;
    }
}
