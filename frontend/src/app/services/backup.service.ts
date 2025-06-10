import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BackupService {
  private baseUrl = 'http://localhost:3000/api/backups';

  constructor(private http: HttpClient) {}

  triggerBackup(data: { sourceDir: string, backupName: string }) {
    return this.http.post(`${this.baseUrl}/trigger`, data);
  }

  getBackups() {
    return this.http.get(`${this.baseUrl}/list`);
  }
}