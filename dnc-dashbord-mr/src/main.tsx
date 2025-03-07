import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyle'
import { darkTheme } from './styles'
import App from './App'

createRoot(document.getElementById('root')!).render(
   <StrictMode>
     <ThemeProvider theme={darkTheme}>
       <GlobalStyle/>
         <App />
     </ThemeProvider>
    
   </StrictMode>,
)
