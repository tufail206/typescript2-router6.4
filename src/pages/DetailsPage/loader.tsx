
import { LoaderFunction } from "react-router-dom";


const loader: LoaderFunction = async ({params}): Promise<Response> => {
    const {id} = params
    const Rresponse = fetch(`https://fakestoreapi.com/products/${id}`)

    return (
        Rresponse
    )


}
export default loader