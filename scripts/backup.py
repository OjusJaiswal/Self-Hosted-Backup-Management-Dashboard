import sys
import shutil
import os
from datetime import datetime

source_dir = sys.argv[1]
backup_name = sys.argv[2]
backup_dir = os.path.join("/tmp", f"{backup_name}_{datetime.now().strftime('%Y%m%d_%H%M%S')}")

try:
    shutil.copytree(source_dir, backup_dir)
    print(f"Backup created at {backup_dir}")
except Exception as e:
    print(f"Backup failed: {str(e)}", file=sys.stderr)
    exit(1)