# Deployment Guide: Portfolio on Raspberry Pi

This guide covers how to build your portfolio as a Docker container, run it on a Raspberry Pi, and expose it to the internet using your Freebox.

## Prerequisites

- **Raspberry Pi** (3, 4, or 5) with Raspberry Pi OS installed.
- **Freebox** with admin access.
- **Domain Name** (Optional but recommended) or use Freebox's DynDNS.

---

## 1. Docker Setup

### Build the Image (On your PC)

First, build the Docker image locally to verify it works.

```bash
docker build -t web-portfolio .
```

### Run Locally (Test)

```bash
C
```

Visit `http://localhost:3000` to see your site.

### Transfer to Raspberry Pi

You have two options:
1.  **Push to Docker Hub (Easiest)**:
    - Create an account on [Docker Hub](https://hub.docker.com/).
    - Log in: `docker login`
    - Tag image: `docker tag web-portfolio yourusername/web-portfolio:latest`
    - Push: `docker push yourusername/web-portfolio:latest`
    - On Pi: `docker pull yourusername/web-portfolio:latest`

2.  **Save and Copy (Offline)**:
    - Save: `docker save -o portfolio.tar web-portfolio`
    - Copy to Pi: `scp portfolio.tar user@raspberrypi.local:~`
    - Load on Pi: `docker load -i portfolio.tar`

---

## 2. Raspberry Pi Setup

### Install Docker

SSH into your Raspberry Pi:

```bash
ssh user@raspberrypi.local
```

Run the convenience script to install Docker:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Add your user to the Docker group (so you don't need `sudo`):

```bash
sudo usermod -aG docker $USER
newgrp docker
```

### Run the Container

Run the container in the background (`-d`) and restart automatically if the Pi reboots (`--restart unless-stopped`).

```bash
docker run -d \
  --name portfolio \
  -p 3000:3000 \
  --restart unless-stopped \
  yourusername/web-portfolio:latest
```

(Replace `yourusername/web-portfolio:latest` with `web-portfolio` if you used the "Save and Copy" method).

Check if it's running:

```bash
docker ps
```

---

## 3. Network Configuration (Freebox)

### Static IP for Raspberry Pi

1.  Go to your Freebox OS interface (usually `http://mafreebox.freebox.fr/`).
2.  Go to **Paramètres de la Freebox** -> **DHCP**.
3.  Find your Raspberry Pi in the list of connected devices.
4.  Assign it a **Static IP** (e.g., `192.168.1.50`).
5.  Reboot the Pi or reconnect network to apply.

### Port Forwarding (NAT)

To make your site accessible from the internet, you need to forward traffic from your public IP to the Pi.

1.  Go to **Paramètres de la Freebox** -> **Gestion des ports**.
2.  Add a new redirection:
    - **IP Destination**: `192.168.1.50` (The Pi's static IP)
    - **IP Source**: All
    - **Protocol**: TCP
    - **Port Start**: 80
    - **Port End**: 80
    - **Destination Port**: 3000 (The container's port)
3.  (Optional) Do the same for port 443 if you plan to set up SSL later.

Now, your site should be accessible at `http://YOUR_PUBLIC_IP`.

### DynDNS (Domain Name)

Since your home IP might change (though Freebox often has a fixed IP), it's better to use a domain name.

1.  **Freebox Domain**: Freebox offers a free domain (e.g., `xxxx.freeboxos.fr`).
    - Go to **Paramètres de la Freebox** -> **Nom de domaine**.
    - Enable it and choose a name.
2.  **Custom Domain**: If you bought a domain (e.g., `bastiencaspani.com`), configure the DNS **A Record** to point to your Freebox's public IP.

---

## 4. Security Recommendations (Important!)

Exposing a container directly to the internet is okay for testing, but for a permanent portfolio, you should use a **Reverse Proxy** to handle HTTPS (SSL).

### Recommended: Nginx Proxy Manager

It provides a nice UI to manage domains and free SSL certificates (Let's Encrypt).

1.  **Install Nginx Proxy Manager** on the Pi (using Docker).
2.  **Port Forwarding Update**:
    - Forward External Port 80 -> Pi Port 80 (Nginx)
    - Forward External Port 443 -> Pi Port 443 (Nginx)
3.  **Configure Proxy**:
    - Point your domain to the Pi.
    - In Nginx Proxy Manager, create a Proxy Host:
        - Domain: `yourdomain.com`
        - Forward Host: `172.17.0.1` (Docker host IP) or the Pi's IP.
        - Forward Port: `3000`
        - **SSL Tab**: Request a new Let's Encrypt certificate and enable "Force SSL".

This ensures your site is secure (HTTPS) and looks professional.
