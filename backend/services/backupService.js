const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const LOG_FILE = path.join(__dirname, "../../db/backup_log.json");

exports.runBackupScript = (sourceDir, backupName) => {
  return new Promise((resolve, reject) => {
    const command = `python3 scripts/backup.py "${sourceDir}" "${backupName}"`;
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(stderr);
      } else {
        const log = { backupName, sourceDir, date: new Date().toISOString() };
        const logs = fs.existsSync(LOG_FILE) ? JSON.parse(fs.readFileSync(LOG_FILE)) : [];
        logs.push(log);
        fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
        resolve(stdout.trim());
      }
    });
  });
};

exports.getAllLogs = () => {
  return new Promise((resolve) => {
    const logs = fs.existsSync(LOG_FILE) ? JSON.parse(fs.readFileSync(LOG_FILE)) : [];
    resolve(logs);
  });
};