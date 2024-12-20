import React from 'react';
import { Outlet } from "react-router-dom";
import { FlexColContainer,FlexBox } from "../Styles/GlobalStyle";
// import Sibebar from '../components/sidebar';
export const LayoutComponent:React.FC = ()=>{
    return(
       <FlexColContainer>
        <FlexBox className='gap'>
                
                <Outlet />
        </FlexBox>
          
        </FlexColContainer>
    )
}