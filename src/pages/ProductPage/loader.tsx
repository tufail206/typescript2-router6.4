
import { LoaderFunction  } from "react-router-dom";


const loader: LoaderFunction = async (): Promise <  Response >   =>{
     const Rresponse = fetch("https://fakestoreapi.com/products")
          
     return (
         Rresponse
     )   
     

}
export default loader