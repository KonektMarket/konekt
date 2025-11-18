import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5173,
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress PURE annotation warnings from @privy-io/react-auth
        if (warning.message && warning.message.includes('/*#__PURE__*/')) {
          return;
        }
        // Suppress other Privy-related warnings
        if (warning.message && warning.message.includes('@privy-io/react-auth')) {
          return;
        }
        warn(warning);
      },
    },
  },
  plugins: [
    react(),
    nodePolyfills({
      include: ['buffer', 'process'],
      globals: {
        Buffer: true,
        process: true,
      },
    }),
    VitePWA({
      registerType: 'prompt',
      devOptions: {
        enabled: true,
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // 4 MB limit
      },
      includeAssets: ['icon-512.png', 'icon-192.png', 'apple-touch-icon.png', 'ringtone.mp3', 'notification.mp3'],
      manifest: {
        name: 'Konekt - Anonymous Social Marketplace',
        short_name: 'Konekt',
        description: 'Get a number without a SIM. Use it to chat, call, bet, or pay, all on-chain.',
        theme_color: '#00D9FF',
        background_color: '#0A0A0A',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    'process.env': {},
  },
}));

