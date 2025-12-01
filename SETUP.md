# Portfolio Setup Guide

## Environment Variables Setup

This project uses environment variables for sensitive API credentials. Follow these steps:

### Local Development

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Fill in your actual values in `.env`:
   - `REACT_APP_LAMBDA_URL` - Your AWS Lambda function URL
   - `REACT_APP_API_GATEWAY_KEY` - Your AWS API Gateway key

3. **Never commit the `.env` file** - it's already in `.gitignore`

### Netlify Production Deployment

To set up environment variables in Netlify:

1. Go to your Netlify dashboard
2. Navigate to: **Site Settings → Environment Variables**
3. Add the following variables:
   - `REACT_APP_LAMBDA_URL` = `https://854k0v7ei7.execute-api.us-west-1.amazonaws.com`
   - `REACT_APP_API_GATEWAY_KEY` = `your-api-key-here`

4. Redeploy your site for changes to take effect

### Security Best Practices

- ✅ `.env` is in `.gitignore` (never commit it)
- ✅ Use `.env.example` to document required variables
- ✅ Use Netlify environment variables for production
- ✅ Rotate API keys if they've been exposed
- ⚠️ Note: `REACT_APP_*` variables are embedded in the client bundle and visible to users
  - For truly sensitive operations, use Netlify Functions instead
  - Move API key validation to server-side (Netlify Functions)

### Netlify Functions (Recommended Approach)

For better security, consider moving your contact form logic to Netlify Functions:

```
netlify/functions/contact.js
```

This way, API keys stay on the server and are never exposed to the client.
