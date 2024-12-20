import { Suspense } from "react"
import { Await, useLoaderData } from "react-router-dom"

const ProductDetails:React.FC=()=>{
const  {products}  = useLoaderData()  
    console.log("prodcuts details",products)
    return (
        <>
        <Suspense fallback={<h2>loaiding details page</h2>} >
           <Await resolve={products} >
              {
                 (product) => {
                     if(!product) return <h1>no product found</h1>
                     return (
                        <>
                         <h1>Product Details</h1>
                         <div style={{width:"70%" ,display:"flex",padding:"20px"}} >
                             <img src={product.image} alt={product.title} style={{width:"400px"}} />
                                 <div> 
                                     <h2>{product.title}</h2>
                                     <p>{product.description}</p>
                                     <p>Price {product.price}</p>
                                     
                                     
                                     </div>
                         </div>
                        
                        </>
                     )
                 }
              }
           </Await>
        </Suspense>
        </>
    )
}

export default ProductDetails