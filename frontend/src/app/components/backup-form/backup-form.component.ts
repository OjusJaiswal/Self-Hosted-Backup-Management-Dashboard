import { Component } from '@angular/core';
import { BackupService } from '../../services/backup.service';

@Component({ selector: 'app-backup-form', templateUrl: './backup-form.component.html' })
export class BackupFormComponent {
  sourceDir = '';
  backupName = '';

  constructor(private backupService: BackupService) {}

  submitBackup() {
    this.backupService.triggerBackup({ sourceDir: this.sourceDir, backupName: this.backupName })
      .subscribe((res: any) => alert('Backup Started: ' + res.result));
  }
}