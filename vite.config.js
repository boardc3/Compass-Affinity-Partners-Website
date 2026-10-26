import { defineConfig } from 'vite'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  base: isGitHubPages ? '/Compass-Affinity-Partners-Website/' : '/',
  esbuild: {
    jsx: 'automatic',
  },
})
