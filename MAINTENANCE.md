# Maintenance Guide

## Keeping Your Portfolio Running Smoothly

### 1. Updating Dependencies
Every few months, it's good to update the software libraries to get the latest features and security fixes.
Run this command in your terminal:
```bash
npm update
```

### 2. Checking for Issues
If something breaks, you can check for errors by running:
```bash
npm run lint
```

### 3. Backups
If you are using GitHub (recommended), your code is already backed up!
If not, make sure to copy your `web-portfolio` folder to an external drive or cloud storage regularly.

## Deployment (Getting it Online)

### Recommended: Vercel (Best & Free)
1.  Create a GitHub account and push this code to a repository.
2.  Go to [Vercel.com](https://vercel.com) and sign up.
3.  Click "Add New Project" and select your GitHub repository.
4.  Click "Deploy".
5.  Done! Your site is online and updates automatically when you push to GitHub.

### Alternative: Free.fr (Legacy)
Since Free.fr uses PHP/FTP, this Next.js app (which is Node.js based) cannot run directly on their standard hosting.
**Workaround**: You can "export" this site to static HTML files.
1.  Run `npm run build`.
2.  The output will be in the `out` folder (you need to enable `output: 'export'` in `next.config.ts` first).
3.  Upload the contents of the `out` folder to your Free.fr FTP server.
*Note: Some dynamic features might not work perfectly in static export mode.*
