# Sanity Content Revalidation Setup

## Problem
When content is updated in Sanity Studio, changes don't appear on the website until the `.next` cache folder is deleted and rebuilt.

## Solution
We've implemented webhook-based on-demand revalidation. When you publish content in Sanity, it automatically triggers a rebuild of affected pages.

## Setup Instructions

### 1. Generate a Webhook Secret
Generate a strong random secret (use one of these):
```bash
# Using PowerShell
[System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((Get-Random -SetSeed $env:RANDOM -Count 32 | % {[char]$_}) -join '')) 

# Or use an online generator: https://www.random.org/strings/
```

### 2. Add to `.env.local`
```env
SANITY_WEBHOOK_SECRET=your_generated_secret_here
```

### 3. Configure Webhook in Sanity Studio
1. Go to **Sanity Dashboard** → Your Project → **API Settings**
2. Click **Webhooks** in the left sidebar
3. Click **+ Create webhook**
4. Add webhook details:
   - **URL:** `https://yourdomain.com/api/revalidate`
   - **Events:** Select both:
     - ✓ Create
     - ✓ Update
     - ✓ Delete
   - **Document types:** Leave empty (or select specific types)
   - **HTTP Headers:** Add custom header
     - Key: `x-sanity-webhook-secret`
     - Value: (paste your secret from step 1)
5. Save and test the webhook

### 4. Test Locally (Optional)
For development, you can disable CDN to always fetch fresh data:
- The client is already configured to disable CDN in non-production (`useCdn: false` in development)
- Changes will be visible after a page refresh

## How It Works
1. When you publish/update content in Sanity
2. Sanity calls the webhook: `POST /api/revalidate`
3. The webhook verifies the secret header
4. Next.js revalidates the cached pages with the matching tag (`homepage`, `contact`, etc.)
5. New content appears on the next page request

## Cache Strategy
- **Revalidation Tags:** `homepage`, `contact`
- **Time-based:** Pages revalidate every 60 seconds as fallback
- **On-demand:** Instant refresh when webhook triggers
