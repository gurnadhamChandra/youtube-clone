
import { Box, CircularProgress, CssBaseline } from '@mui/material'
import './App.css'
// import AppContent from './AppContent'
// import Routing from './Routing'
// import MainRoutes from './routes/MainRoutes'
import ThemeRoutes from './routes'
import { Suspense } from 'react'

function App() {

  return (
    <>
    {/* <Routing /> */}
    
    <Suspense fallback={<Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <CircularProgress/>
    </Box>}>
    <ThemeRoutes/>
    </Suspense>
    </>
  )
}

export default App
