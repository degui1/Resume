import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes'

import './main.css'
import { ThemeProvider } from '@emotion/react'
import { DarkTheme } from './styles/themes/DarkTheme'
import { THEME_ID } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={{ [THEME_ID]: DarkTheme }}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>,
)
