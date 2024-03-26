// A note about implementing PWA features with Vite: Vite automatically hands entry points and output configurations based on project structure so these do not have to be defined explicitly as with webpack
// Vite automatically injects bundles into the HTML file, so HTMLWebpackPlugin is not needed.
// I'm bundling my custom service worker directly with Vite using a custom build plugin, instead of using Workbox's InjectManifest feature. My service worker will thus be directly included in the final build output as service-worker.js.
// PWA manifest creation is handled by Vite PWA plugin which generates the web app manifest based on the configuration provided here and does not require WebpackPwaManifest plugin as for Webpack.
// CSS and Babel Loaders are also made redundant by the fact that Vite handles CSS and JavaScript modules natively. Vite provides built-in support for CSS and JavaScript files are processed using ESBuild, which supports ES6/next gen features.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ //Add VitePWA public for PWA support,
      manifest: {
        //Manifest options
        name: 'Soul Bench',
        short_name: 'Soul Bench',
        description: 'Social network site where users can discuss personal, financial or career-related problems in a public forum or one-on-one in a private conversation. Features sharer or listener roles and a robust collection of resources related to psychological wellbeing and self-awareness',
        background_color: '#ffffff',
        display: 'standalone',
        theme_color: '#DAEAF9',
        start_url: './',
        icons: [
          {
            src: 'https://res.cloudinary.com/dqtpaispt/image/upload/v1711078979/app-logo_yn0hqw.png',
            sizes: [96, 128, 192, 256, 384, 512],
            type: 'image/png',
          },
        ]
      }
    }),
    // {
    //   name: 'bundle-service-worker',
    //   enforce: 'post', // Ensures this runs after the regular build process
    //   apply: 'build',
    //   transformIndexHtml() {
    //     buildSync({
    //       minify: true,
    //       bundle: true,
    //       entryPoints: [join(process.cwd(), 'service-worker.js')],
    //       outfile: join(process.cwd(), 'dist', 'service-worker.js'),
    //     });
    //   },
    // },
  ],
  server: {
    port: 3001,
    open: true,
    // Important for MERN Setup: Here we're establishing a relationship between our two development servers.
    // We are pointing our Vite client-side development server to proxy API requests to our server-side Node server at port 3001.
    // Without this line, API calls would attempt to fallback and query for data from the current domain: localhost:3000
    proxy: {
      '/graphql': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },     
    }
  }
});
