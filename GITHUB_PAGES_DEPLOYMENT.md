# GitHub Pages Deployment Guide

This guide explains how to deploy the NexPyRS frontend to GitHub Pages.

## 🚀 Quick Start

### Automatic Deployment (Recommended)

The project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Wait for deployment:**
   - Go to **Actions** tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow complete
   - Once done, your site will be live at: `https://nishanth-kj.github.io/NexPyRS/`

### Manual Deployment

You can also build and deploy manually:

1. **Build the static site:**
   ```bash
   cd web
   npm run build:github
   ```

2. **The static files will be in `web/out/`** - you can deploy these files to any static hosting service.

## 🔧 Configuration Details

### Next.js Configuration

The project uses conditional configuration in `web/next.config.js`:

- **For GitHub Pages:** Sets `output: 'export'`, `basePath`, and `assetPrefix`
- **For Local Development:** Uses standard Next.js server
- **For Tauri:** Uses Tauri-specific configuration

### Environment Variables

- **`NEXT_PUBLIC_GITHUB_PAGES=true`**: Enables GitHub Pages build mode
- **`NEXT_PUBLIC_TAURI_BUILD=true`**: Enables Tauri build mode

### BasePath Configuration

The site is configured with `basePath: '/NexPyRS'` for repository-based deployment.

**If you want to deploy to a user/organization site** (`username.github.io`):
1. Create a repository named `username.github.io`
2. Update `web/next.config.js`:
   ```javascript
   const basePath = ''; // Remove basePath for user site
   ```

## 📝 Important Notes

### ⚠️ Backend Services Not Included

GitHub Pages only hosts **static files**. The following services will **NOT** be available:

- ❌ FastAPI backend (`api.localhost`)
- ❌ Django backend (`django.localhost`)
- ❌ gRPC service
- ❌ Rust service
- ❌ PostgreSQL database

**Result**: The frontend will load, but any features requiring backend APIs will not function.

### 🔗 Links and Navigation

All internal links should use the Next.js `Link` component:

```jsx
import Link from 'next/link';

// ✅ Correct
<Link href="/about">About</Link>

// ❌ Incorrect (won't work with basePath)
<a href="/about">About</a>
```

### 🖼️ Images and Assets

Use Next.js `Image` component or reference assets correctly:

```jsx
import Image from 'next/image';

// Images from public folder
<Image src="/logo.png" alt="Logo" width={100} height={100} />
```

## 🛠️ Local Testing

Test the GitHub Pages build locally before deploying:

```bash
cd web

# Build for GitHub Pages
npm run build:github

# Serve the static files (requires a static file server)
npx serve out -p 3000
```

Then visit: `http://localhost:3000/NexPyRS/`

## 🔄 Workflow

The GitHub Actions workflow (`.github/workflows/deploy-pages.yml`):

1. Triggers on push to `main` or manual dispatch
2. Checks out code
3. Installs Node.js dependencies
4. Builds Next.js app with `NEXT_PUBLIC_GITHUB_PAGES=true`
5. Uploads build artifacts
6. Deploys to GitHub Pages

## 📊 Monitoring Deployments

- **Actions Tab**: View deployment progress and logs
- **Environments**: Check deployment history under **Settings** → **Environments** → **github-pages**

## 🐛 Troubleshooting

### Issue: 404 on page refresh
**Solution**: GitHub Pages serves `404.html` for missing routes. Add a custom 404 page or use hash routing.

### Issue: Assets not loading (403/404)
**Solution**: 
1. Ensure `.nojekyll` file exists in `web/public/`
2. Check basePath configuration in `next.config.js`
3. Verify all asset paths use Next.js components

### Issue: Styles not loading
**Solution**: Check that `assetPrefix` is correctly set in `next.config.js`

### Issue: Deployment fails
**Solution**:
1. Check workflow logs in Actions tab
2. Ensure GitHub Pages is enabled in repository settings
3. Verify Node.js version compatibility

## 🔐 Custom Domain (Optional)

To use a custom domain:

1. Add domain in **Settings** → **Pages** → **Custom domain**
2. Create a `CNAME` file in `web/public/`:
   ```
   yourdomain.com
   ```
3. Configure DNS records with your domain provider

## 📚 Additional Resources

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)

## ✅ Checklist

Before deploying, ensure:

- [ ] GitHub Pages is enabled in repository settings
- [ ] Repository name matches `repoName` in `next.config.js`
- [ ] `.nojekyll` file exists in `web/public/`
- [ ] All links use Next.js `Link` component
- [ ] Workflow file exists at `.github/workflows/deploy-pages.yml`
- [ ] Pushed to `main` branch

---

**Your site will be available at:** `https://nishanth-kj.github.io/NexPyRS/`
