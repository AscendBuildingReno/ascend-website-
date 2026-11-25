# Ascend Building Renovations website

Live site: https://ascendbuildingrenovations.com (Netlify project `ascendbuildingrenovationsltd`)

- `site/`: the website exactly as published. Plain HTML, CSS and JS with no build step.
- `netlify.toml`: tells Netlify to publish `site/`.

## How changes go live (fully automatic, Matty's choice on 24 Nov 2026)
1. Claude commits straight to `main`, and Netlify publishes to the live site automatically.
2. Claude then WhatsApps Matty with what went live and the link.
3. To undo a change, revert the commit. Never use Netlify rollback.

## Rules
- Never invent prices, reviews, testimonials, projects, qualifications or facts. Testimonials must be real reviews that Matty supplies or confirms.
- Project pages use only Matty's real job photos, and only where the client has said OK.
- Customer-facing text goes through the ascend-humanizer skill.
- Forms are Netlify Forms (`data-netlify="true"`). Keep each form's `name`, the honeypot fields (`bot-field` and `website`) and the maths check intact.

Source: published deploy 6b00c27e683df2378d5a5a24 (20 Nov 2026), downloaded from Netlify on 24 Nov 2026.

## Deploys
- The repo is public (since 25 Nov 2026). On Netlify's free plan, pushes to private repos from anyone other than the owner were blocked ("Unrecognized Git contributor").
- Never commit secrets, phone numbers, customer addresses or anything private. Everything here is public.
