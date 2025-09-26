import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class HealthService {
    private readonly rawBase = (environment.backendUrl || '').replace(/\/$/, '');

    // Se la dashboard gira su 4200, usa SEMPRE il proxy
    private readonly useProxy =
        typeof window !== 'undefined' &&
        (window.location.host === 'localhost:4200' || window.location.port === '4200');

    private get base() {
        return this.useProxy ? '' : this.rawBase;
    }

    constructor(private http: HttpClient) { }

    checkReady() {
        const url = this.base ? `${this.base}/q/health/ready` : `/q/health/ready`;
        console.log('checkReady ->', url, 'base=', this.base, 'useProxy=', this.useProxy);
        return firstValueFrom(this.http.get(url));
    }

    ping() {
        const url = this.base ? `${this.base}/api/ping` : `/api/ping`;
        console.log('ping ->', url, 'base=', this.base, 'useProxy=', this.useProxy);
        return firstValueFrom(this.http.get(url, { responseType: 'text' as 'json' }));
    }
}