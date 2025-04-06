import { useEffect, useState } from "react";
import ProductCard from "./PrductCard";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
           
            const result = await axios.get(`https://dummyjson.com/products/`);
            setProducts(result.data.products);
        } catch (error) {
            console.log("Error fetching products", error);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []); 

    return (
        <>
            <div className="container">
            <h3 className="text-center m-5 bg-primary text-white py-1 rounded">All Products</h3>
            
            <div className="row justify-content-center ps-4 ">
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
            </div>


        </>
    );
};

export default Products;
