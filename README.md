# Amal Makwana - Personal Site

This is a Next.js portfolio/personal website.

## Run locally

### Prerequisites
- Node.js 20.x (matches Netlify config)
- npm (comes with Node)

### Steps
1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:3000
```

### Useful local commands
- Run tests:

```bash
npm test
```

- Build a production static export:

```bash
npm run build
```

The project is configured with `output: "export"`, so production build output is generated in the `out/` folder.

## Deploy on Netlify

This repository already includes a `netlify.toml` with:
- build command: `npm run build`
- publish directory: `out`
- Node version: `20`

### Option A: Deploy with Netlify UI
1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Netlify, click **Add new site** -> **Import an existing project**.
3. Select your repository.
4. Confirm the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `20` (or leave empty if `netlify.toml` is detected)
5. Click **Deploy site**.

### Option B: Deploy with Netlify CLI
1. Install Netlify CLI (global):

```bash
npm install -g netlify-cli
```

2. Login:

```bash
netlify login
```

3. Initialize and deploy:

```bash
netlify init
netlify deploy --build
```

4. For production deployment:

```bash
netlify deploy --build --prod
```

## Notes
- Static pages are exported at build time, which is compatible with Netlify's static hosting.
- If you add environment variables later, set them in **Site configuration -> Environment variables** on Netlify.
