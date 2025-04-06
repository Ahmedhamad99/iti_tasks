import { useParams, useSearchParams } from "react-router-dom"
import {  useEffect, useState } from "react"
import axios from "axios"
const ProductDetalis = ()=>{
   const {id} = useParams()
   const [product,setProduct] = useState({})

  const getAllDetalis = async ()=>{
    try{
               let reslut = await axios.get(`https://dummyjson.com/products/${id}`)
        console.log(reslut)
            setProduct(reslut.data)
     }catch{
         console.log(error)
    }
    }

 useEffect(()=>{
     getAllDetalis()
    },[id])

   return <>
               <h2 className="text-center">Product Detalis</h2>
          <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.thumbnail} alt={product.title} className="img-fluid" />
                </div>
                <div className="Card col-md-6">
                
                    <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>

                    
                    <h4 className="card-text fw-bold">Price: ${product.price}</h4>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Category: {product.category}</p>
                    <p className="card-text text-success">Rating: {product.rating}</p>
                    <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'}`}>
                        {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </span>
                    <br /><br />
                    <button className="btn btn-success">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
   </>

}

export default ProductDetalis