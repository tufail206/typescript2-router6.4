import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

import  {createBrowserRouter ,RouterProvider,createRoutesFromElements} from "react-router-dom"
import { Component as routers } from './routes';
const router=createBrowserRouter(createRoutesFromElements(routers))
createRoot(document.getElementById('root')!).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
