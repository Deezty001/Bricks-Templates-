# Automated Bricks Render Server

This folder contains everything you need to deploy a fully contained, lightweight WordPress installation on Coolify that operates solely as an automated screenshot and rendering factory for your Bricks Templates Vault.

Because we are using Docker Compose, the entire rendering pipeline (WordPress, Database, and our custom Auto-Render Plugin) is packaged together. If you ever migrate your VPS, you just bring this folder with you and it spins right back up!

## Deployment Instructions on Coolify

Because I have automated as much as possible, you do not need to upload the `bricks-renderer.php` manually—it is automatically mounted inside the WordPress container! 

1. **Deploying the Service:**
   - In your Coolify dashboard, go to your Project/Environment where you want to host the Render Server.
   - Click **Add New Resource** -> **Docker Compose**.
   - Point it to this same Github repository (`Bricks-Templates-`).
   - For the **Base Directory** or **Compose File Path**, specify `/render-server`. Coolify will automatically read the `docker-compose.yml` file in this folder and spin up the database and WordPress container.
   - Attach your desired subdomain for this server (e.g., `render.yourdomain.com`).

2. **WordPress Setup (The Only Manual Step):**
   - Click the link to open your new WordPress site.
   - Run through the famous 1-minute WordPress setup (Language, Site Title, Admin User).
   - Go to **Plugins -> Installed Plugins** and activate "Bricks Auto Renderer". *(It's already there waiting for you!)*
   - Go to **Appearance -> Themes -> Add New** and upload your `bricks.zip` theme file.
   - Activate your Bricks license in the Bricks settings.

3. **Connecting it to the Vault**
   - Go back to your main Vault Application in Coolify.
   - Set the `WP_RENDER_URL` environment variable to `http://render.yourdomain.com/wp-json/bricks-render/v1/generate`.
   - Restart your Vault Application! 

You are fully automated! 🎉
