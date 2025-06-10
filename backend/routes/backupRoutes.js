const express = require("express");
const router = express.Router();
const { triggerBackup, listBackups } = require("../controllers/backupController");

router.post("/trigger", triggerBackup);
router.get("/list", listBackups);

module.exports = router;