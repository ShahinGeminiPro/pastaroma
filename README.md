<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/b67c6afa-e9eb-4ec9-a535-61e074f6ebf3

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Local images

The HTML now points to a structured local image tree under `assets/images/`. Run:

```bash
node scripts/download-images.mjs
```

This downloads the exact image URLs from the original `index.html` into the paths referenced by the HTML.
