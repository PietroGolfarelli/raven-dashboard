import { Component } from '@angular/core';
import { HealthService } from '../../services/health.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.html',
  styleUrls: ['./health.scss'],
})
export class HealthComponent {
  result = 'pending…';
  backendUrl = (window as any)?.__env?.BACKEND_URL || 'not-set';

  constructor(private health: HealthService) { }

  async ngOnInit() {
    await this.check();
  }

  async check() {
    this.result = 'checking…';
    try {
      const ready = await this.health.checkReady();
      const ping = await this.health.ping();
      this.result = JSON.stringify({ ready, ping }, null, 2);
    } catch (e: any) {
      this.result = `error: ${e?.message || 'unknown'}`;
    }
  }
}