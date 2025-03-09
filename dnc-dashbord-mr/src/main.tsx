import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyle'
import { lighTheme  } from './styles'
import App from './App'

createRoot(document.getElementById('root')!).render(
   <StrictMode>
     <ThemeProvider theme={lighTheme}>
       <GlobalStyle/>
         <App />
     </ThemeProvider>
    
   </StrictMode>,
)
