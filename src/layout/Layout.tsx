import { Outlet } from "react-router-dom"
import {Component as Header} from "../components/Header"
import { Component as  Sidebar } from "../components/Sidebar"
import { MainContainer, FlexColContainer, FlexBox } from "../Styles/GlobalStyle"
const Layout = () => {
  return (
 
          <MainContainer>
          <FlexBox>
              <Sidebar />

              <FlexColContainer>
                  <Header />
                  <Outlet />
              </FlexColContainer>
          </FlexBox>
        
                
            
      
        </MainContainer>
      
  
 
  )
}

export default Layout
