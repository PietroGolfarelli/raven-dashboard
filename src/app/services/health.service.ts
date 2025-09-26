// src/app/services/health.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class HealthService {
    private readonly base = (environment.backendUrl || '').replace(/\/$/, '');

    constructor(private http: HttpClient) { }

    checkReady() {
        const url = this.base ? `${this.base}/q/health/ready` : `/q/health/ready`;
        return firstValueFrom(this.http.get(url));
    }

    ping() {
        const url = this.base ? `${this.base}/api/ping` : `/api/ping`;
        return firstValueFrom(this.http.get(url, { responseType: 'text' as 'json' }));
    }
}