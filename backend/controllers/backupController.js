const { runBackupScript, getAllLogs } = require("../services/backupService");

exports.triggerBackup = async (req, res) => {
  try {
    const { sourceDir, backupName } = req.body;
    const result = await runBackupScript(sourceDir, backupName);
    res.json({ success: true, result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Backup failed" });
  }
};

exports.listBackups = async (req, res) => {
  try {
    const logs = await getAllLogs();
    res.json(logs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not fetch logs" });
  }
};