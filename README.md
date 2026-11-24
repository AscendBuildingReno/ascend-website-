# Ascend Building Renovations website

Live site: https://ascendbuildingrenovations.com (Netlify project `ascendbuildingrenovationsltd`)

- `site/`: the website exactly as published. Plain HTML, CSS and JS with no build step.
- `netlify.toml`: tells Netlify to publish `site/`.

## How changes go live
1. Changes are made on a branch and opened as a pull request. Netlify builds a Deploy Preview for it.
2. The preview link is sent to Matty on WhatsApp.
3. Once Matty approves, the pull request is merged into `main`, and Netlify publishes it to the live site automatically.

## Rules
- Never invent prices, reviews, projects, qualifications or facts.
- Project pages use only Matty's real job photos, and only where the client has said OK.
- Customer-facing text goes through the ascend-humanizer skill.
- Forms are Netlify Forms (`data-netlify="true"`). Keep each form's `name`, the honeypot fields (`bot-field` and `website`) and the maths check intact.

Source: published deploy 6b00c27e683df2378d5a5a24 (20 Nov 2026), downloaded from Netlify on 24 Nov 2026.
