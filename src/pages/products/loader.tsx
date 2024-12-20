import { defer, LoaderFunction } from "react-router-dom";

const url = "https://fakestoreapi.com/products";

const loader: LoaderFunction = async () => {
    const products = fetch(url).then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    });

    return defer({ products }) 
};

export default loader;
