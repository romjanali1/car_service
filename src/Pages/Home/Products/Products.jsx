import { useEffect, useState } from "react";
import ProductsLoed from "./ProductsLoed";


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://car-service-server-six.vercel.app/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="grid justify-items-center">
            <div className="text-center space-y-4">
                <h1 className="text-orange-500 text-2xl font-bold">Popular Products</h1>
                <h2 className="text-3xl font-bold">Browse Our Products</h2>
                <p>
                the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. 
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                products.map(product => <ProductsLoed
                key={product._id}
                product={product}
                ></ProductsLoed>)
            }
            </div>
            <div className="py-8 text-center">
            <button className="btn btn-outline text-orange-500 hover:bg-orange-400">More Services</button>
            </div>
            
        </div>
    );
};

export default Products;