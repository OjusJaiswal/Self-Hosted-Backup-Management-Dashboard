const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const backupRoutes = require("./routes/backupRoutes");
app.use("/api/backups", backupRoutes);

app.listen(port, () => {
  console.log(`Backup Dashboard API running at http://localhost:${port}`);
});