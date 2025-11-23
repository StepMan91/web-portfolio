import paramiko
import os
import zipfile
import sys

# Configuration
HOST = "192.168.1.141"
USERNAME = "bast"
PASSWORD = sys.argv[1] if len(sys.argv) > 1 else "120013"
REMOTE_DIR = "/home/bast/web-portfolio"
ZIP_NAME = "portfolio.zip"

def create_zip():
    print("Creating zip file...")
    with zipfile.ZipFile(ZIP_NAME, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk('.'):
            # Exclude directories
            dirs[:] = [d for d in dirs if d not in ['.git', '.next', 'node_modules', '__pycache__']]
            for file in files:
                if file == ZIP_NAME or file.endswith('.pyc') or file == 'deploy.py' or file == 'debug_deploy.py' or file == 'verify_deploy.py':
                    continue
                
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, '.')
                
                # Fix line endings for Dockerfile
                if file == 'Dockerfile':
                    with open(file_path, 'rb') as f:
                        content = f.read()
                    content = content.replace(b'\r\n', b'\n')
                    zipf.writestr(arcname, content)
                else:
                    zipf.write(file_path, arcname)
                    
    print(f"Zip file created: {ZIP_NAME}")

def deploy():
    try:
        # Connect
        print(f"Connecting to {HOST}...")
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(HOST, username=USERNAME, password=PASSWORD)
        
        # SFTP Transfer
        print("Transferring files...")
        sftp = ssh.open_sftp()
        try:
            sftp.mkdir(REMOTE_DIR)
        except IOError:
            pass # Directory might exist
        
        sftp.put(ZIP_NAME, f"{REMOTE_DIR}/{ZIP_NAME}")
        sftp.close()
        print("Transfer complete.")

        # Remote Commands
        commands = [
            f"cd {REMOTE_DIR} && unzip -o {ZIP_NAME}",
            f"cd {REMOTE_DIR} && docker build -t web-portfolio .",
            f"docker stop portfolio || true",
            f"docker rm portfolio || true",
            f"docker run -d --name portfolio -p 3000:3000 --restart unless-stopped web-portfolio"
        ]

        for cmd in commands:
            print(f"Executing: {cmd}")
            stdin, stdout, stderr = ssh.exec_command(cmd)
            
            # Stream output
            for line in stdout:
                print(line.strip())
            for line in stderr:
                print(line.strip(), file=sys.stderr)
                
            exit_status = stdout.channel.recv_exit_status()
            if exit_status != 0:
                print(f"Error executing command: {cmd}")
                if "stop" not in cmd and "rm" not in cmd:
                    return

        print("Deployment successful! Website should be up at http://192.168.1.141:3000")
        
        ssh.close()
        
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    create_zip()
    deploy()
    if os.path.exists(ZIP_NAME):
        os.remove(ZIP_NAME)
