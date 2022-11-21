import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'
import AppRoutes from 'pages/Router'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
