import {defer, LoaderFunction } from "react-router-dom"
const url ="https://fakestoreapi.com/products"
const loader: LoaderFunction = async({ params })  =>{
    const {id}=params
    const products =  fetch(`${url}/${id}`).then(response => response.json()) 
    return defer({ products })
    // return defer{ (products  )} as Response
}

export default loader