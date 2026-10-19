# Yuaan's Little Celebration

Responsive birthday invitation with animated envelope, RSVP form, private admin dashboard, charts, guest search, and CSV export.

## Netlify setup
1. Upload this project to a Git repository and connect it to the Netlify project `yuaan-little-celebration`, or deploy it using the Netlify CLI from this folder.
2. In Netlify project environment variables, add:
   - `ADMIN_PASSWORD`: a strong unique administrator password.
   - `ADMIN_SESSION_SECRET`: a random secret of at least 32 bytes. Example generation: `openssl rand -base64 48`.
   Give both variables **Functions** scope. Do not put secrets in HTML, Git, or `netlify.toml`.
3. Deploy. Netlify Blobs is used for persistent RSVP storage. Confirm Blobs storage is available for this site/account.
4. Test a guest RSVP, sign into the host dashboard, verify charts, then test CSV export.

## Notes
- Admin session cookies are HttpOnly, Secure, SameSite=Strict and expire after 8 hours.
- No guest-count field is included, as requested.
- This project does not include any preconfigured admin password. The environment variables must be set before login will work.
- External font loading uses Google Fonts; system fonts remain as fallback.
- This folder does not automatically delete itself on 20 November 2026. Remove the Netlify project and its Blobs data manually after the event, or schedule cleanup explicitly.
