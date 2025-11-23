import paramiko
import sys
import os

HOST = "192.168.1.141"
USERNAME = "bast"
PASSWORD = sys.argv[1] if len(sys.argv) > 1 else "120013"
REMOTE_DIR = "/home/bast/web-portfolio"
LOCAL_LOG = "local_build.log"

def get_build_log():
    try:
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(HOST, username=USERNAME, password=PASSWORD)
        
        print("Running Docker Build and capturing log...")
        cmd = f"cd {REMOTE_DIR} && docker build -t web-portfolio . > build.log 2>&1"
        stdin, stdout, stderr = ssh.exec_command(cmd)
        exit_status = stdout.channel.recv_exit_status()
        print(f"Build finished with status: {exit_status}")
        
        print("Downloading log file...")
        sftp = ssh.open_sftp()
        sftp.get(f"{REMOTE_DIR}/build.log", LOCAL_LOG)
        sftp.close()
        print(f"Log downloaded to {LOCAL_LOG}")
        
        ssh.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    get_build_log()
