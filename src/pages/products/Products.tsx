import { Card, CardActionArea } from "@mui/material";
import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";

const ProductsPage: React.FC = () => {
    const {products}  = useLoaderData()  
    console.log("products page loaded", products)
    const navigate=useNavigate()
   
    return (
        <div style={{padding:"20px"}}>
       <h1 style={{margin:"10px "}}>products page</h1>

            <Suspense fallback={<h1>loading...</h1>}>
                <div style={{display:"flex" ,flexWrap:"wrap",gap:"20px"}}>
                <Await resolve={products} errorElement={<div>no product found</div>} >
                  
                        {
                            (items) => {

                                return  items && items.map((item: any) => {
                                    return <div>
                                        <CardActionArea onClick={() => navigate(`products/${item.id}`)}>
                                            <Card sx={{ width: "200px ", padding: "10px" }}>
                                                <div>
                                                    <img src={item.image} alt="" width={200} height={200} />
                                                </div>
                                                <div>

                                                    <p>{item.title}</p>
                                                    <p>price {item.price}</p>
                                                </div>
                                            </Card>
                                        </CardActionArea>
                                    </div>
                                })
                            }
                        }
                
                </Await>

                </div>
            </Suspense>


        </div>
    )
}

export default ProductsPage;