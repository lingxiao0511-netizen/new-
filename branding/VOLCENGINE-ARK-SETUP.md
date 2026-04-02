# Volcengine / Seedream setup note

The previously provided key did not match the expected ARK API key format for Seedream image generation.

## What is needed
A valid `ARK_API_KEY` for Volcengine ARK image generation.

## Expected usage pattern
The generation script expects an environment variable like:

```powershell
$env:ARK_API_KEY = "<your-real-ark-api-key>"
```

## Current status
- The provided value failed authentication with `AuthenticationError`
- Error message indicated: `The API key format is incorrect`

## Next step
Provide the correct ARK API key from the Volcengine ARK console, then rerun image generation for:
- `public/og-default.jpg`
- `public/og-home.jpg`
- `public/icon.png`
- `public/favicon.ico` (or derive from icon)
