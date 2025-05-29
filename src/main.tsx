import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "next-themes";
import './index.css'
import App from './App.tsx'
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system">
      <App />
      <Analytics mode="production" />
    </ThemeProvider>
  </StrictMode>,
)
