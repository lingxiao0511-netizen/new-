# Image generation status for metaphysics-site

## Confirmed working historical setup
- `glm-image-gen` skill exists and was previously tested successfully
- Skill path: `C:\Users\Administrator\.openclaw\workspace\agents\router\skills\glm-image-gen`
- Local `.env` exists in that skill directory
- The key is present there, which explains why previous runs worked even though the current shell env showed `ZHIPU_API_KEY=EMPTY`

## Current blocking issue
When generating OG assets and icon for this site, GLM returned:

- `API Error 1113: 余额不足或无可用资源包,请充值。`

So the problem is not missing configuration anymore.
The current blocker is account balance / resource package availability.

## Assets attempted
- `public/og-default.jpg`
- `public/og-home.jpg`
- `public/icon.png`

## Next shortest recovery path
1. Recharge or enable an available GLM image resource package
2. Re-run the prepared prompts in `branding/`
3. Generate favicon from `icon.png`

## Prompt files ready
- `branding/og-default-prompt.md`
- `branding/og-home-prompt.md`
- `branding/icon-prompt.md`
