import React from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

import Product from "./ProductSchema";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { FlexBox } from "../../Styles/GlobalStyle";
function Products() {
    const Rresponse  = useLoaderData() as Product[];

    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Await resolve={Rresponse}>
                    {(products) => (

                        <FlexBox className="gap">
                        
                                {products.map((product) => (
                                    <Link to={`/products/${product.id}`} >
                                     

                                        
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={product.image}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                   {product.title}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                        {product.description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    
                                                                       </Link>
                                ))}
                                
                           
                        </FlexBox>
                    )}
                </Await>
            </React.Suspense>
        </div>
    );
}

export default Products;
