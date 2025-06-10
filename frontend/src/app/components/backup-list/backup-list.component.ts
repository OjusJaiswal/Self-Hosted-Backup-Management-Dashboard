import { Component, OnInit } from '@angular/core';
import { BackupService } from '../../services/backup.service';

@Component({ selector: 'app-backup-list', templateUrl: './backup-list.component.html' })
export class BackupListComponent implements OnInit {
  backups: any[] = [];

  constructor(private backupService: BackupService) {}

  ngOnInit() {
    this.backupService.getBackups().subscribe(data => this.backups = data);
  }
}