import paramiko
import sys

HOST = "192.168.1.141"
USERNAME = "bast"
PASSWORD = sys.argv[1] if len(sys.argv) > 1 else "120013"

def verify():
    try:
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(HOST, username=USERNAME, password=PASSWORD)
        
        print("Checking running containers...")
        stdin, stdout, stderr = ssh.exec_command("docker ps --format '{{.Names}} - {{.Status}}'")
        output = stdout.read().decode().strip()
        print("Containers:")
        print(output)
        
        if "portfolio" in output:
            print("\nSUCCESS: Portfolio container is running!")
        else:
            print("\nFAILURE: Portfolio container is NOT running.")
            
        ssh.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    verify()
