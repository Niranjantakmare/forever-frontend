import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'ec2-34-229-12-178.compute-1.amazonaws.co', // your EC2 DNS
      'localhost'
    ],
    port: 5173
  }
})
